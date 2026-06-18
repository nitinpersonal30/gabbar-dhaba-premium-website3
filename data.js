const IMAGES = {
  logo: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/cropped-355452794_113863715075057_6411651895204412155_n-1-150x141.jpg',
  frontMain: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-09-at-12.38.37-PM1-1-r7l36wnvi74kyftq2ozlnexuqu25i7cfcx25xdy6x4.jpeg',
  frontLeaves: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-09-at-12.38.38-PM-r7l36wnvi74kyftq2ozlnexuqu25i7cfcx25xdy6x4.jpeg',
  frontPlants: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-09-at-12.38.31-PM1-1-r7l36wnvi74kyftq2ozlnexuqu25i7cfcx25xdy6x4.jpeg',
  acBanquet: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-09-at-12.38.38-PM2.jpeg',
  cottages: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-09-at-12.38.32-PM1-r7l36wnvi74kyftq2ozlnexuqu25i7cfcx25xdy6x4.jpeg',
  courtyard: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-08-09-at-12.38.33-PM-r7l36wnvi74kyftq2ozlnexuqu25i7cfcx25xdy6x4.jpeg',
  bambooDark: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/5-1-1024x1024.jpg',
  bambooHall: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/3-1024x1024.jpg',
  bambooLamp: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/1-1024x1024.jpg',
  tandooriChicken: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/chicken.jpg',
  seekhKebab: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/kebab.jpg',
  champaranMutton: 'https://gabbardhaba.co.in/wp-content/uploads/2023/08/bihari-cuisine_17d9fbffd60_large-removebg-preview.png',
  handiPaneer: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/handi-paneer1-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  cholaMasala: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/Chola_Masala-removebg-preview-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  paneerLababdar: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/Paneer_Lababdar-removebg-preview-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  kadhaiChicken: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/Kadhai_Chicken-removebg-preview-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  chickenKorma: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/Chicken_Korma-removebg-preview-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  chickenTikkaMasala: 'https://gabbardhaba.co.in/wp-content/uploads/elementor/thumbs/ChickenTikka_Masala-removebg-preview-r7l36wnsgk57p4r8vdhg3nwxykaz7vbjcoubjehnbk.png',
  barbecueFlame: 'https://gabbardhaba.co.in/wp-content/uploads/2019/12/Barbecue-dish-item-3.jpg'
};

const WHATSAPP_NUMBER = '919628182818';
const PHONE_DISPLAY = '+91 96281 82818';
const ADDRESS_TEXT = 'Gata No. 32, Sultanpur Road, Gosainganj, Lucknow, Uttar Pradesh 226501';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Gabbar%20Dhaba%20and%20Family%20Restaurant%20Gosainganj%20Lucknow';

const FEATURED_DISHES = [
  { name: 'Champaran Ahuna Handi Mutton', category: 'nonveg main signature', image: IMAGES.champaranMutton, note: 'Signature Bihari-style mutton' },
  { name: 'Tandoori Chicken', category: 'nonveg starters', image: IMAGES.tandooriChicken, note: 'Smoky tandoor classic' },
  { name: 'Seekh Kabab', category: 'nonveg starters', image: IMAGES.seekhKebab, note: 'Dhaba-style kebab platter' },
  { name: 'Handi Paneer', category: 'veg main', image: IMAGES.handiPaneer, note: 'Rich vegetarian curry' },
  { name: 'Paneer Lababdar', category: 'veg main', image: IMAGES.paneerLababdar, note: 'Creamy paneer favourite' },
  { name: 'Kadhai Chicken', category: 'nonveg main', image: IMAGES.kadhaiChicken, note: 'Bold masala gravy' },
  { name: 'Chicken Korma', category: 'nonveg main', image: IMAGES.chickenKorma, note: 'Classic rich korma' },
  { name: 'Chicken Tikka Masala', category: 'nonveg main', image: IMAGES.chickenTikkaMasala, note: 'Tikka in masala gravy' },
  { name: 'Chola Masala', category: 'veg main', image: IMAGES.cholaMasala, note: 'Comforting Punjabi flavour' }
];

const MENU_SECTIONS = [
  {
    title: 'Beverages',
    tag: 'beverages',
    intro: 'Cold, hot and refreshing drinks for family dining.',
    items: ['Chhach', 'Coffee', 'Coke Can', 'Cold Drink', 'Fresh Juice Real', 'Fresh Lime Soda', 'Masala Cold Drink', 'Masala Soda Lemonade', 'Mineral Water', 'Sweet Lassi With Rabari', 'Tadka Chanchal', 'Tea', 'Virgin Mojito']
  },
  {
    title: 'Breakfast',
    tag: 'breakfast',
    intro: 'Morning favourites, pakodas, parathas and quick snacks.',
    items: ['Bread Omelette 2 Egg', 'Chola Bhatura', 'Puri Sabzi', 'Puri Chola', 'Paneer Pakoda 8 PCS', 'Onion Pakoda 10 PCS', 'Mix Pakoda 10 PCS', 'Aloo Paratha Dahi Achar', 'Paneer Paratha Dahi Achar', 'Onion Paratha Dahi Achar', 'Bun Makkhan', 'Maggi Veg', 'Maggi Soup', 'Cheese Maggi', 'Egg Maggi', 'Chicken Maggi', 'Boiled Egg 2 PCS']
  },
  {
    title: 'Indian Starters — Veg',
    tag: 'veg starters',
    intro: 'Tandoor-style vegetarian starters for sharing.',
    items: ['Paneer Tikka 8 Salt & Pepper', 'Paneer Malai Tikka 8 PCS', 'Hariyali Paneer Tikka 8 PCS', 'Hyderabadi Paneer Tikka 8 PCS', 'Mushroom Tikka 8 PCS', 'Hara Bhara Kebab 6 PCS']
  },
  {
    title: 'Indian Starters — Non Veg',
    tag: 'nonveg starters',
    intro: 'Tikka, kebab, tangdi and classic non-veg starters.',
    items: ['Chicken Tikka 8 PCS', 'Chicken Malai Tikka 8 PCS', 'Fish Tikka 8 PCS', 'Tandoori Chicken 4 PCS', 'Tandoori Chicken 8 PCS', 'Chicken Kalimirch 4 PCS', 'Chicken Kalimirch 8 PCS', 'Badshahi Murg 4 PCS', 'Badshahi Murg 8 PCS', 'Chicken Seekh Kebab 6 PCS', 'Mutton Seekh Kebab 6 PCS', 'Mutton Shami 6 PCS', 'Mutton Galouti Kebab 4 PCS', 'Tangdi Kebab 2 PCS', 'Tangdi Kebab 4 PCS', 'Chicken Cheese Kebab 6 PCS']
  },
  {
    title: 'Chinese Starters — Veg',
    tag: 'veg starters chinese',
    intro: 'Crispy and spicy Indo-Chinese vegetarian starters.',
    items: ['Spring Roll', 'Chilly Potato', 'Honey Chilly Potato', 'Korean Chilly Potato', 'French Fry', 'Paneer Chilly Dry', 'Mushroom Chilly Dry', 'Paneer Manchurian Dry', 'Veg Manchurian Dry', 'Mushroom Salt & Pepper', 'Paneer 65', 'Veg Salt & Pepper', 'Chipsy Chilli Corn']
  },
  {
    title: 'Chinese Starters — Non Veg',
    tag: 'nonveg starters chinese',
    intro: 'Chicken lollipop, fried chicken and spicy dry starters.',
    items: ['Chicken Chilly Dry', 'Chicken 65', 'Chicken Lollipop 2 PCS', 'Chicken Lollipop 4 PCS', 'Fried Chicken 4 PCS', 'Fried Chicken 8 PCS']
  },
  {
    title: 'Indian Main Course — Veg',
    tag: 'veg main',
    intro: 'Paneer, dal, vegetables, kofta and classic Indian gravies.',
    items: ['Dal Fry Half', 'Dal Fry Full', 'Dal Makhani Half', 'Dal Makhani Full', 'Yellow Dal Tadka Half', 'Yellow Dal Tadka Full', 'Mix Veg Half', 'Aloo Jeera Half', 'Aloo Jeera Full', 'Veg Jalfrezi Half', 'Veg Jalfrezi Full', 'Aloo Matar Half', 'Aloo Matar Full', 'Aloo Matar Gobhi Half', 'Aloo Matar Gobhi Full', 'Handi Paneer Half', 'Handi Paneer Full', 'Kadai Paneer Half', 'Kadai Paneer Full', 'Lucknawi Dum Aloo', 'Malai Kofta Half', 'Malai Kofta Full', 'Matar Paneer Half', 'Matar Paneer Full', 'Mushroom Matar Masala Half', 'Mushroom Matar Masala Full', 'Mushroom Matar Half', 'Mushroom Matar Full', 'Nargisi Kofta Half', 'Nargisi Kofta Full', 'Paneer Bhujia Half', 'Paneer Bhujia Full', 'Paneer Butter Masala Half', 'Paneer Butter Masala Full', 'Paneer Do Pyaza Half', 'Paneer Do Pyaza Full', 'Paneer Kolhapuri Half', 'Paneer Kolhapuri Full', 'Paneer Lababdar Half', 'Paneer Lababdar Full', 'Paneer Rara Half', 'Paneer Rara Full', 'Paneer Tikka Masala', 'Shahi Paneer Half', 'Shahi Paneer Full', 'Veg Chaman Kofta Half', 'Veg Kofta Half', 'Veg Kofta Full', 'Kaju Butter Masala', 'Methi Matar Corn', 'Chola Masala']
  },
  {
    title: 'Indian Main Course — Non Veg',
    tag: 'nonveg main',
    intro: 'Chicken gravies, korma, tikka masala and kadhai specials.',
    items: ['Handi Chicken QTR 2 PCS', 'Handi Chicken Half 4 PCS', 'Handi Chicken Full 4 PCS', 'Butter Chicken Half 4 PCS', 'Butter Chicken Full 8 PCS', 'Chicken Masala 4 PCS', 'Chicken Masala 8 PCS', 'Chicken Tikka Masala Half 4 PCS', 'Chicken Tikka Masala Full 8 PCS', 'Chicken Korma 4 PCS', 'Chicken Korma 8 PCS', 'Chicken S2 4 PCS', 'Chicken S2 8 PCS', 'Kadhai Chicken S2 4 PCS', 'Kadhai Chicken S2 8 PCS']
  },
  {
    title: 'Breads & Roti',
    tag: 'breads',
    intro: 'Tawa, tandoori, naan, kulcha and paratha options.',
    items: ['Tawa Roti', 'Tawa Roti With Butter', 'Tandoori Roti', 'Tandoori Roti With Butter', 'Onion Missi + Chilly Missi', 'Missi Roti', 'Mughlai Roti', 'Roomali Roti', 'Plain Naan', 'Butter Naan', 'Garlic Naan', 'Lachha Paratha', 'Stuffed Aloo Kulcha', 'Stuffed Paneer Kulcha', 'Pudina Paratha', 'Cheese Kulcha', 'Onion Kulcha']
  },
  {
    title: 'Rolls',
    tag: 'rolls',
    intro: 'Quick roll options for takeaway-style orders.',
    items: ['Veg Roll', 'Paneer Roll', 'Kebab Paratha', 'Egg Roll', 'Chicken Roll', 'Mutton Boti Roll', 'Mutton Kebab Roll', 'Kaleji Roll']
  },
  {
    title: 'Thali & Combos',
    tag: 'thali main',
    intro: 'Complete meals for families, travellers and groups.',
    items: ['VIP Thali', 'Veg Thali', 'Non Veg Deluxe Thali', 'Chicken Combo', 'Mutton Combo']
  },
  {
    title: 'Salad',
    tag: 'salad',
    intro: 'Fresh sides to complete the meal.',
    items: ['Green Salad', 'Onion Salad', 'Fruity Salad', 'Aloo Chat']
  },
  {
    title: 'Raita & Papad',
    tag: 'raita papad',
    intro: 'Cooling sides and crunchy papad options.',
    items: ['Boondi Raita', 'Mix Raita', 'Pineapple Raita', 'Plain Curd', 'Dry Papad', 'Fry Papad', 'Masala Papad', 'Peanut Masala']
  },
  {
    title: 'Dessert & Ice Cream',
    tag: 'dessert',
    intro: 'Sweet endings after a dhaba-style meal.',
    items: ['Gulab Jamun', 'Rasgulla', 'Ice Cream', 'Butter Scotch', 'Tooty Frooty', 'American Nuts', 'Mango']
  }
];

const GALLERY_IMAGES = [
  { title: 'Restaurant Front', category: 'Exterior', src: IMAGES.frontMain, caption: 'Premium front elevation with lawn view.' },
  { title: 'Front Through Leaves', category: 'Exterior', src: IMAGES.frontLeaves, caption: 'Natural green framing for hero sections.' },
  { title: 'Facade & Branding', category: 'Exterior', src: IMAGES.frontPlants, caption: 'Strong brand board and roadside visibility.' },
  { title: 'Courtyard Entrance', category: 'Exterior', src: IMAGES.courtyard, caption: 'Open entry and outdoor event pathway.' },
  { title: 'Lawn Cottages', category: 'Lawn', src: IMAGES.cottages, caption: 'Outdoor lawn/cottage area for family seating.' },
  { title: 'Bamboo Dining Mood', category: 'Dining', src: IMAGES.bambooDark, caption: 'Warm rustic dhaba lighting.' },
  { title: 'Rustic Dining Hall', category: 'Dining', src: IMAGES.bambooHall, caption: 'Long bamboo-style seating ambience.' },
  { title: 'Bamboo Lamp Detail', category: 'Dining', src: IMAGES.bambooLamp, caption: 'Close-up ambience for premium storytelling.' },
  { title: 'A/C Banquet Hall', category: 'Banquet', src: IMAGES.acBanquet, caption: 'Indoor hall for events and gatherings.' },
  { title: 'Barbecue Flames', category: 'Food', src: IMAGES.barbecueFlame, caption: 'Tandoor and grill mood image from official site.' },
  { title: 'Tandoori Chicken', category: 'Food', src: IMAGES.tandooriChicken, caption: 'Featured non-veg starter.' },
  { title: 'Seekh Kabab', category: 'Food', src: IMAGES.seekhKebab, caption: 'Kebab platter image.' },
  { title: 'Champaran Ahuna Handi Mutton', category: 'Food', src: IMAGES.champaranMutton, caption: 'Signature dish visual.' },
  { title: 'Handi Paneer', category: 'Food', src: IMAGES.handiPaneer, caption: 'Featured veg main course.' },
  { title: 'Chola Masala', category: 'Food', src: IMAGES.cholaMasala, caption: 'Classic veg curry.' },
  { title: 'Paneer Lababdar', category: 'Food', src: IMAGES.paneerLababdar, caption: 'Creamy paneer main course.' },
  { title: 'Kadhai Chicken', category: 'Food', src: IMAGES.kadhaiChicken, caption: 'Non-veg main course visual.' },
  { title: 'Chicken Korma', category: 'Food', src: IMAGES.chickenKorma, caption: 'Rich curry presentation.' },
  { title: 'Chicken Tikka Masala', category: 'Food', src: IMAGES.chickenTikkaMasala, caption: 'Spiced chicken gravy visual.' }
];
