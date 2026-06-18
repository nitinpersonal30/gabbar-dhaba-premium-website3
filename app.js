const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const body = document.body;

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setCommonText() {
  qsa('[data-phone]').forEach((item) => { item.textContent = PHONE_DISPLAY; });
  qsa('[data-address]').forEach((item) => { item.textContent = ADDRESS_TEXT; });
  qsa('[data-whatsapp]').forEach((item) => { item.href = whatsappLink(item.dataset.message || 'Hello Gabbar Dhaba, I want to make a booking.'); });
  qsa('[data-map-link]').forEach((item) => { item.href = MAP_URL; });
}
setCommonText();

const navToggle = qs('.nav-toggle');
const navLinks = qs('[data-nav-links]');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('menu-open', isOpen);
  });
  qsa('a', navLinks).forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    });
  });
}

const page = document.body.dataset.page || 'home';
qsa('[data-nav]').forEach((link) => {
  if (link.dataset.nav === page) link.classList.add('active');
});

const heroImages = qsa('.hero__media img');
const heroButtons = qsa('[data-hero-target]');
let heroIndex = 0;
let heroTimer;
function setHero(index) {
  if (!heroImages.length) return;
  heroIndex = index;
  heroImages.forEach((img, i) => img.classList.toggle('active', i === index));
  heroButtons.forEach((btn, i) => btn.classList.toggle('active', i === index));
}
function startHero() {
  if (heroImages.length < 2) return;
  clearInterval(heroTimer);
  heroTimer = setInterval(() => setHero((heroIndex + 1) % heroImages.length), 5200);
}
heroButtons.forEach((button) => button.addEventListener('click', () => {
  setHero(Number(button.dataset.heroTarget));
  startHero();
}));
setHero(0);
startHero();

function renderFeaturedDishes() {
  const grid = qs('[data-featured-dishes]');
  if (!grid) return;
  const limit = Number(grid.dataset.limit || FEATURED_DISHES.length);
  grid.innerHTML = FEATURED_DISHES.slice(0, limit).map((dish) => `
    <article class="dish-card reveal" data-category="${dish.category}">
      <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
      <div class="dish-card__content">
        <span class="tag">${dish.category.includes('nonveg') ? 'Non-Veg' : 'Veg'}</span>
        <h3>${dish.name}</h3>
        <p>${dish.note}</p>
      </div>
    </article>
  `).join('');
}
renderFeaturedDishes();

let selectedItems = [];
function renderMenu() {
  const container = qs('[data-menu-results]');
  if (!container) return;
  container.innerHTML = MENU_SECTIONS.map((section, sectionIndex) => `
    <article class="menu-section-card reveal" data-menu-section data-tags="${section.tag}" data-title="${section.title.toLowerCase()}">
      <div class="menu-section-head">
        <div>
          <h3>${section.title}</h3>
          <p>${section.intro}</p>
        </div>
        <span class="item-count">${section.items.length} items</span>
      </div>
      <div class="menu-items">
        ${section.items.map((item, itemIndex) => `
          <div class="menu-item" data-item-name="${item.toLowerCase()}">
            <span>${item}</span>
            <button type="button" data-add-item="${sectionIndex}:${itemIndex}" aria-label="Add ${item} to WhatsApp enquiry">+</button>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');

  qsa('[data-add-item]').forEach((button) => {
    button.addEventListener('click', () => {
      const [sectionIndex, itemIndex] = button.dataset.addItem.split(':').map(Number);
      const item = MENU_SECTIONS[sectionIndex].items[itemIndex];
      if (!selectedItems.includes(item)) selectedItems.push(item);
      button.textContent = '✓';
      updateOrderPanel();
    });
  });
}
renderMenu();

function updateOrderPanel() {
  const panel = qs('[data-order-panel]');
  const count = qs('[data-order-count]');
  const list = qs('[data-order-list]');
  const link = qs('[data-order-whatsapp]');
  if (!panel) return;
  panel.classList.toggle('active', selectedItems.length > 0);
  count.textContent = `${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} selected`;
  list.textContent = selectedItems.slice(0, 4).join(', ') + (selectedItems.length > 4 ? '...' : '');
  link.href = whatsappLink(`Hello Gabbar Dhaba, I want to ask about these menu items: ${selectedItems.join(', ')}.`);
}

qs('[data-clear-order]')?.addEventListener('click', () => {
  selectedItems = [];
  qsa('[data-add-item]').forEach((button) => { button.textContent = '+'; });
  updateOrderPanel();
});

const menuSearch = qs('[data-menu-search]');
const menuFilterButtons = qsa('[data-menu-filter]');
let activeMenuFilter = 'all';
function filterMenu() {
  const query = (menuSearch?.value || '').trim().toLowerCase();
  qsa('[data-menu-section]').forEach((section) => {
    const tags = section.dataset.tags || '';
    const title = section.dataset.title || '';
    const items = qsa('[data-item-name]', section);
    let visibleItems = 0;
    items.forEach((item) => {
      const name = item.dataset.itemName || '';
      const matchesQuery = !query || name.includes(query) || title.includes(query);
      const matchesFilter = activeMenuFilter === 'all' || tags.includes(activeMenuFilter);
      const show = matchesQuery && matchesFilter;
      item.classList.toggle('hidden', !show);
      if (show) visibleItems += 1;
    });
    section.classList.toggle('hidden', visibleItems === 0);
  });
}
menuSearch?.addEventListener('input', filterMenu);
menuFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeMenuFilter = button.dataset.menuFilter;
    menuFilterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    filterMenu();
  });
});

function renderGallery() {
  const grid = qs('[data-gallery-grid]');
  if (!grid) return;
  grid.innerHTML = GALLERY_IMAGES.map((image) => `
    <figure class="gallery-item reveal" data-gallery-item data-category="${image.category}" data-lightbox="${image.src}">
      <img src="${image.src}" alt="${image.title}" loading="lazy" />
      <figcaption class="gallery-caption">
        <strong>${image.title}</strong>
        <small>${image.category} • ${image.caption}</small>
      </figcaption>
    </figure>
  `).join('');
}
renderGallery();

const galleryButtons = qsa('[data-gallery-filter]');
galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.galleryFilter;
    galleryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    qsa('[data-gallery-item]').forEach((item) => {
      item.classList.toggle('hidden', filter !== 'All' && item.dataset.category !== filter);
    });
  });
});

const lightbox = qs('[data-lightbox-modal]');
const lightboxImage = lightbox?.querySelector('img');
function openLightbox(src) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  body.style.overflow = '';
}
document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-lightbox]');
  if (trigger) openLightbox(trigger.dataset.lightbox);
  if (event.target.matches('[data-close-lightbox]') || event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

function setupReservationForms() {
  qsa('[data-reservation-form]').forEach((form) => {
    const link = qs('[data-form-whatsapp]', form);
    const update = () => {
      const name = qs('[name="name"]', form)?.value.trim() || 'Guest';
      const service = qs('[name="service"]', form)?.value || 'Table booking';
      const guests = qs('[name="guests"]', form)?.value || '2 guests';
      const date = qs('[name="date"]', form)?.value || 'Date not selected';
      const time = qs('[name="time"]', form)?.value || 'Time not selected';
      const note = qs('[name="note"]', form)?.value.trim() || 'No extra note';
      link.href = whatsappLink(`Hello Gabbar Dhaba, I want to book ${service}. Name: ${name}. Guests: ${guests}. Date: ${date}. Time: ${time}. Note: ${note}.`);
    };
    qsa('input, select, textarea', form).forEach((field) => field.addEventListener('input', update));
    update();
  });
}
setupReservationForms();

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
function observeReveals() {
  qsa('.reveal').forEach((item) => {
    if (item.classList.contains('visible')) return;
    if (revealObserver) revealObserver.observe(item);
    else item.classList.add('visible');
  });
}
observeReveals();
setTimeout(observeReveals, 50);

qsa('[data-current-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });
