export type MenuCategoryId =
  | 'biryani'
  | 'rolls'
  | 'noodles'
  | 'veg-starters'
  | 'non-veg-starters'
  | 'sticks'
  | 'beverages';

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  tagline: string;
  count: number;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  categoryName: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  available: boolean;
  isPopular?: boolean;
  variants?: {
    name: string;
    price: number;
    id: string;
  }[];
  portionNote?: string;
  tags?: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'biryani',
    name: 'Biryani',
    tagline: 'Aromatic basmati slow-cooked with royal dum spices',
    count: 3,
    image: '/hero-biryani.jpg',
  },
  {
    id: 'rolls',
    name: 'Rolls',
    tagline: 'Crispy flaky parathas rolled with juicy fillings',
    count: 6,
    image: '/crops/rolls.jpg',
  },
  {
    id: 'noodles',
    name: 'Noodles / Chowmein',
    tagline: 'Wok-tossed street-style noodles with fresh veggies & eggs',
    count: 2,
    image: '/crops/noodles.jpg',
  },
  {
    id: 'veg-starters',
    name: 'Veg Starters',
    tagline: 'Crispy, crunchy & tangy appetizers for pure indulgence',
    count: 7,
    image: '/crops/starters.jpg',
  },
  {
    id: 'non-veg-starters',
    name: 'Non-Veg Starters',
    tagline: 'Fiery chicken starters tossed in aromatic desi-Chinese masalas',
    count: 6,
    image: '/crops/nonveg-starters.jpg',
  },
  {
    id: 'sticks',
    name: 'Sides & Sticks',
    tagline: 'Flame-kissed skewers and quick bites starting at just ₹20',
    count: 3,
    image: '/crops/sticks.jpg',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Chilled mocktails and spiced coolers to complete your meal',
    count: 3,
    image: '/crops/beverages.jpg',
  },
];

export const menuItems: MenuItem[] = [
  // ================= CATEGORY A: BIRYANI =================
  {
    id: 'chicken-dum-biryani',
    name: 'Chicken Dum Biryani',
    category: 'biryani',
    categoryName: 'Biryani',
    price: 129,
    description: 'Signature fragrant long-grain basmati rice layered with juicy, marinated chicken cuts, saffron, caramelized onions, and slow-cooked to royal dum perfection.',
    image: '/hero-biryani.jpg',
    isVeg: false,
    available: true,
    isPopular: true,
    portionNote: 'Generous single meal portion with succulent chicken',
    tags: ['Dum Biryani', 'Bestseller', 'Chef Special', 'Chicken']
  },
  {
    id: 'chicken-mini-biryani',
    name: 'Chicken Mini Biryani',
    category: 'biryani',
    categoryName: 'Biryani',
    price: 99,
    description: 'The perfect budget-friendly aromatic dum biryani portion for quick cravings, loaded with tender spiced chicken and rich flavour.',
    image: '/chicken-mini-biryani.jpg',
    isVeg: false,
    available: true,
    isPopular: true,
    portionNote: 'Pocket-friendly single portion',
    tags: ['Mini Meal', 'Value Choice', 'Chicken']
  },
  {
    id: 'veg-biryani',
    name: 'Veg Biryani',
    category: 'biryani',
    categoryName: 'Biryani',
    price: 109,
    description: 'Rich basmati rice cooked with fresh seasonal vegetables, soft paneer, aromatic whole spices, kewra water, and golden fried onions.',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    isPopular: true,
    portionNote: 'Satisfying vegetarian feast',
    tags: ['Vegetarian', 'Paneer & Veggies', 'Shahi Dum']
  },

  // ================= CATEGORY B: ROLLS =================
  {
    id: 'mix-veg-roll',
    name: 'Mix Veg Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 69,
    description: 'Golden crispy flaky paratha wrapped tightly around spiced crunchy garden vegetables, onions, chat masala, and signature tangy sauces.',
    image: '/crops/rolls.jpg',
    isVeg: true,
    available: true,
    portionNote: 'Freshly rolled on the griddle',
    tags: ['Veggie Wrap', 'Street Style']
  },
  {
    id: 'paneer-roll',
    name: 'Paneer Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 69,
    description: 'Warm handmade paratha loaded with marinated diced cottage cheese sautéed with crisp capsicum, onions, and mint coriander chutney.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3d5ebcd96?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Soft fresh paneer',
    tags: ['Paneer', 'Vegetarian', 'Popular']
  },
  {
    id: 'mushroom-roll',
    name: 'Mushroom Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 69,
    description: 'Flaky griddled wrap packed with juicy butter-tossed button mushrooms, bell peppers, fresh herbs, and desi spicy dressing.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Tender mushrooms',
    tags: ['Mushroom', 'Crisp Paratha']
  },
  {
    id: 'egg-chicken-roll',
    name: 'Egg Chicken Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 79,
    description: 'Kolkata street-style classic: egg-battered paratha stuffed with tender spiced chicken bites, sliced onions, green chillies, and lemon juice.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop&q=80',
    isVeg: false,
    available: true,
    portionNote: 'Egg-layered paratha + chicken filling',
    tags: ['Egg & Chicken', 'Kolkata Classic']
  },
  {
    id: 'chicken-65-roll',
    name: 'Chicken 65 Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 99,
    description: 'Bold South-meets-street wrap filled with crispy spiced Chicken 65 chunks, curry leaves, crushed pepper, and creamy house dressing.',
    image: '/chicken-65-roll.jpg',
    isVeg: false,
    available: true,
    isPopular: true,
    portionNote: 'Crunchy Chicken 65 wrapped inside',
    tags: ['Chicken 65', 'Bestseller Roll', 'Spicy']
  },
  {
    id: 'chilly-chicken-roll',
    name: 'Chilly Chicken Roll',
    category: 'rolls',
    categoryName: 'Rolls',
    price: 99,
    description: 'Juicy Indo-Chinese chilli chicken tossed with crunchy bell peppers, onions, soy-garlic glaze, wrapped in a warm crispy paratha.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    isVeg: false,
    available: true,
    portionNote: 'Desi-Chinese fusion roll',
    tags: ['Chilli Chicken', 'Tangy & Spicy']
  },

  // ================= CATEGORY C: NOODLES / CHOWMEIN =================
  {
    id: 'veg-noodles',
    name: 'Veg Noodles',
    category: 'noodles',
    categoryName: 'Noodles / Chowmein',
    price: 69,
    description: 'Street-style hakka chowmein wok-tossed with shredded cabbage, carrots, bell peppers, spring onions, and savory dark soy sauce.',
    image: '/crops/noodles.jpg',
    isVeg: true,
    available: true,
    portionNote: 'Hot wok-tossed bowl',
    tags: ['Veg Chowmein', 'Hakka Style', 'Affordable']
  },
  {
    id: 'egg-chicken-noodles',
    name: 'Egg Chicken Noodles',
    category: 'noodles',
    categoryName: 'Noodles / Chowmein',
    price: 79,
    description: 'Wok-charred noodles stir-fried with fluffy scrambled eggs, shredded chicken strips, crunchy vegetables, and aromatic Indo-Chinese spices.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&auto=format&fit=crop&q=80',
    isVeg: false,
    available: true,
    portionNote: 'High protein egg & chicken bowl',
    tags: ['Chicken & Egg', 'Wok Tossed', 'Popular']
  },

  // ================= CATEGORY D: VEG STARTERS =================
  {
    id: 'american-crispy-corn',
    name: 'American Crispy Corn',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 99,
    description: 'Sweet American corn kernels batter-fried until golden and extra crispy, tossed with cracked black pepper, diced chillies, and spring onions.',
    image: '/american-crispy-corn.jpg',
    isVeg: true,
    available: true,
    isPopular: true,
    portionNote: 'Crispy & addictive appetizer',
    tags: ['Crispy Corn', 'Bestseller', 'Crunchy']
  },
  {
    id: 'paneer-pakoda',
    name: 'Paneer Pakoda',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 49,
    description: 'Thick succulent cottage cheese cubes dipped in an ajwain-spiced gram flour batter and fried until delicately crisp outside, melt-in-mouth soft inside.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Fresh hot fritters served with chutney',
    tags: ['Paneer', 'Desi Pakoda', 'Quick Bite']
  },
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 59,
    description: 'Golden vegetable dumplings tossed in an aromatic Indo-Chinese glaze infused with minced garlic, ginger, green chillies, and soy sauce.',
    image: '/veg-manchurian.jpg',
    isVeg: true,
    available: true,
    isPopular: true,
    portionNote: 'Rich garlicky dry gravy',
    tags: ['Veg Manchurian', 'Indo-Chinese']
  },
  {
    id: 'crispy-baby-corn',
    name: 'Crispy Baby Corn',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 99,
    description: 'Tender baby corn spears coated in seasoned crunchy batter, wok-tossed with aromatic herbs, onions, and spicy chilli garlic seasoning.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Super crispy spears',
    tags: ['Baby Corn', 'Crispy', 'Snack']
  },
  {
    id: 'paneer-chilli',
    name: 'Paneer Chilli',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 99,
    description: 'Crisp fried paneer cubes wok-tossed with diced capsicum, onions, slit green chillies, and savory dark chilli soya sauce.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Classic chilli paneer',
    tags: ['Chilli Paneer', 'Desi Chinese']
  },
  {
    id: 'mushroom-salt-pepper',
    name: 'Mushroom Salt & Pepper',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 99,
    description: 'Crisp batter-fried fresh button mushrooms tossed with crushed black peppercorns, roasted garlic, spring onions, and sea salt.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Zesty & peppery',
    tags: ['Mushroom', 'Salt & Pepper']
  },
  {
    id: 'mushroom-chatpata',
    name: 'Mushroom Chatpata',
    category: 'veg-starters',
    categoryName: 'Veg Starters',
    price: 99,
    description: 'Plump mushrooms sautéed in a fiery, tangy Indian chatpata masala with chopped onions, tomatoes, amchur, and lemon zest.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Tangy and spicy kick',
    tags: ['Chatpata', 'Desi Spices']
  },

  // ================= CATEGORY E: NON-VEG STARTERS =================
  {
    id: 'chicken-pakoda',
    name: 'Chicken Pakoda',
    category: 'non-veg-starters',
    categoryName: 'Non-Veg Starters',
    price: 49,
    description: 'Authentic Indian street-style chicken fritters, marinated in crushed ginger-garlic, curry spices, coated in spiced batter and deep-fried till golden and crispy.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80',
    isVeg: false,
    available: true,
    portionNote: 'Choose Half (₹49) or Full (₹99)',
    variants: [
      { id: 'chicken-pakoda-half', name: 'Half Portion', price: 49 },
      { id: 'chicken-pakoda-full', name: 'Full Portion', price: 99 }
    ],
    tags: ['Chicken Pakoda', 'Half & Full Available', 'Crispy']
  },
  {
    id: 'chicken-lolipop',
    name: 'Chicken Lolipop',
    category: 'non-veg-starters',
    categoryName: 'Non-Veg Starters',
    price: 99,
    description: 'Frenched chicken winglets marinated in fiery red spices, deep-fried to a super crunchy crust, served with hot Schezwan dip.',
    image: 'https://images.unsplash.com/photo-1527477378408-1bc09c2a311b?w=800&auto=format&fit=crop&q=80',
    isVeg: false,
    available: true,
    portionNote: 'Crispy fried lollipop wings',
    tags: ['Chicken Lollipop', 'Crunchy', 'Party Favourite']
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    category: 'non-veg-starters',
    categoryName: 'Non-Veg Starters',
    price: 129,
    description: 'Tender chicken bites batter-fried and tossed in a smoking hot wok with slit green chillies, garlic, capsicum, and savory soy-chilli gravy.',
    image: '/crops/nonveg-starters.jpg',
    isVeg: false,
    available: true,
    portionNote: 'Restaurant style chilli chicken',
    tags: ['Chilli Chicken', 'Hot & Savory', 'Classic']
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    category: 'non-veg-starters',
    categoryName: 'Non-Veg Starters',
    price: 129,
    description: 'Juicy chicken meatballs or bites tossed in a thick, fragrant Indo-Chinese Manchurian glaze with minced scallions, garlic, and coriander.',
    image: '/crops/nonveg-starters.jpg',
    isVeg: false,
    available: true,
    portionNote: 'Deep rich garlic Manchurian sauce',
    tags: ['Chicken Manchurian', 'Aromatic Glaze']
  },
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    category: 'non-veg-starters',
    categoryName: 'Non-Veg Starters',
    price: 129,
    description: 'The legendary spicy, deep-red South Indian fried chicken preparation tossed with fresh aromatic curry leaves, green chillies, and crushed garlic.',
    image: '/crops/nonveg-starters.jpg',
    isVeg: false,
    available: true,
    portionNote: 'Fiery & aromatic South Indian style',
    tags: ['Chicken 65', 'Chef Special', 'Spicy']
  },

  // ================= CATEGORY F: STICKS =================
  {
    id: 'paneer-stick',
    name: 'Paneer Stick',
    category: 'sticks',
    categoryName: 'Sides & Sticks',
    price: 20,
    description: 'Succulent cube skewers of cottage cheese brushed with spiced butter and grilled over hot embers for a quick smoky treat.',
    image: '/crops/sticks.jpg',
    isVeg: true,
    available: true,
    portionNote: 'Single skewer stick',
    tags: ['Paneer Skewer', 'Budget Star', '₹20 Only']
  },
  {
    id: 'mushroom-stick',
    name: 'Mushroom Stick',
    category: 'sticks',
    categoryName: 'Sides & Sticks',
    price: 20,
    description: 'Whole button mushrooms threaded on wooden skewers, marinated with chatpata masala, and flame-grilled to juicy tenderness.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Single skewer stick',
    tags: ['Mushroom Skewer', 'Smoky Snack', '₹20 Only']
  },
  {
    id: 'chicken-stick',
    name: 'Chicken Stick',
    category: 'sticks',
    categoryName: 'Sides & Sticks',
    price: 25,
    description: 'Juicy, seasoned boneless chicken cubes skewered and charred over high heat, finished with a dust of royal chaat masala and lemon.',
    image: '/crops/sticks.jpg',
    isVeg: false,
    available: true,
    portionNote: 'Single juicy chicken skewer',
    tags: ['Chicken Skewer', 'Unbeatable Value', '₹25 Only']
  },

  // ================= CATEGORY G: BEVERAGES =================
  {
    id: 'masala-coldrinks',
    name: 'Masala Coldrinks',
    category: 'beverages',
    categoryName: 'Beverages',
    price: 40,
    description: 'Chilled fizzy soda infused with roasted cumin, black rock salt, tangy lemon, and signature street chaat spices for instant digestive refreshment.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    isVeg: true,
    available: true,
    portionNote: 'Chilled glass with lemon wedge',
    tags: ['Masala Soda', 'Desi Fizz', 'Refreshing']
  },
  {
    id: 'virgin-mojito',
    name: 'Virgin Mojito',
    category: 'beverages',
    categoryName: 'Beverages',
    price: 60,
    description: 'Crisp and revitalizing mocktail crafted with freshly muddled garden mint leaves, juicy lime chunks, cane syrup, and sparkling soda over crushed ice.',
    image: '/crops/beverages.jpg',
    isVeg: true,
    available: true,
    portionNote: 'Tall glass with fresh mint & lime wheel',
    tags: ['Mojito', 'Mint & Lime', 'Cooler']
  },
  {
    id: 'blue-lagoon-mojito',
    name: 'Blue Lagoon Mojito',
    category: 'beverages',
    categoryName: 'Beverages',
    price: 60,
    description: 'A striking ocean-blue citrus mocktail featuring blue curacao syrup, sparkling soda, fresh lime juice, mint leaves, and a sweet citrus punch.',
    image: '/crops/beverages.jpg',
    isVeg: true,
    available: true,
    portionNote: 'Vibrant ocean-blue cooler with crushed ice',
    tags: ['Blue Lagoon', 'Citrus Mocktail', 'Instagram Worthy']
  }
];
