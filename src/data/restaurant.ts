export interface RestaurantInfo {
  name: string;
  tagline: string;
  secondaryTagline: string;
  category: string;
  experienceYears: number;
  estdYear: number;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    locality: string;
    zone: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleMapsUrl: string;
  googleMapsEmbed: string;
  operatingHours: {
    days: string;
    time: string;
  }[];
  description: string;
  targetAudience: string[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  spaces: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    highlight: string;
  }[];
}

export const restaurantSpaces = [
  {
    id: 'space-counter',
    title: 'QSR Ordering & Pickup Counter',
    category: 'Front of House',
    description: 'Our welcoming quick-service counter featuring illuminated chalkboard menus, swift billing, and seamless takeaway pickup.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Instant Ordering & Fast Takeaway',
  },
  {
    id: 'space-handi',
    title: 'Traditional Dum Handi Station',
    category: 'Kitchen Specialty',
    description: 'The aromatic heart of our kitchen where aged basmati and marinated chicken are slow-cooked on gentle dum in sealed handis.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Charcoal Slow-Cooked Dum',
  },
  {
    id: 'space-tawa',
    title: 'Live Tawa & Griddle Roll Station',
    category: 'Live Cooking',
    description: 'Watch our chefs griddle fresh flaky parathas and roll them hot with juicy spiced chicken, paneer, and mushrooms.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Freshly Rolled to Order',
  },
  {
    id: 'space-wok',
    title: 'High-Flame Wok Station',
    category: 'Indo-Chinese Kitchen',
    description: 'Where our sizzling chowmein noodles, crunchy American crispy corn, and fiery chicken Manchurian are wok-tossed.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Smoky Desi-Chinese Flavours',
  },
  {
    id: 'space-seating',
    title: 'Casual Seating & Dining Corner',
    category: 'Dining Space',
    description: 'A cozy, clean, and vibrant space for college students, working professionals, and families to relax and relish hot meals.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Warm Atmosphere & Good Vibes',
  },
  {
    id: 'space-packaging',
    title: 'Hygienic Packaging & Delivery Bay',
    category: 'Operations',
    description: 'Every meal is packed in food-grade, leak-proof containers to ensure it arrives piping hot and full of aroma.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1000&auto=format&fit=crop&q=80',
    highlight: 'Tamper-Proof & Piping Hot',
  },
];

export const restaurantInfo: RestaurantInfo = {
  name: "The Biryani Drop",
  tagline: "Eat • Relish • Repeat",
  secondaryTagline: "Good Food, Good Mood!",
  category: "Quick Service Restaurant (QSR)",
  experienceYears: 2,
  estdYear: 2024,
  phone: "8079862715",
  phoneFormatted: "+91 8079862715",
  whatsappNumber: "918079862715",
  whatsappLink: "https://wa.me/918079862715",
  email: "chandrakantaparida268@gmail.com",
  address: {
    line1: "Prayaas",
    landmark: "Near RCM College",
    area: "Maitri Vihar",
    locality: "NALCO Nagar",
    zone: "Chandrasekharpur",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "752002",
    full: "Prayaas, near RCM College, Maitri Vihar, NALCO Nagar, Chandrasekharpur, Bhubaneswar, Odisha 752002, India."
  },
  googleMapsUrl: "https://maps.google.com/?q=Prayaas+near+RCM+College+Maitri+Vihar+NALCO+Nagar+Chandrasekharpur+Bhubaneswar+Odisha+752002",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.977468165507!2d85.808000!3d20.322000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a96e210137%3A0x6b3dbba8040fdfc8!2sRegional%20College%20of%20Management%20(RCM)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  operatingHours: [
    { days: "Monday – Sunday", time: "11:30 AM – 11:00 PM" }
  ],
  description: "The Biryani Drop is a Quick Service Restaurant (QSR) that has been successfully operating for the past 2 years, offering customers a diverse selection of delicious, affordable and satisfying food options. The business focuses on serving freshly prepared, flavourful meals that cater to different tastes and food preferences. Its menu features aromatic biryanis, delicious rolls, Indo-Chinese favourites like chowmein and Manchurian, crispy starters and refreshing beverages. The brand aims to bring together great taste, quality ingredients, generous portions and convenient service under one roof.",
  targetAudience: [
    "College Students & Youth",
    "Working Professionals",
    "Families & Groups",
    "Everyday Food Lovers"
  ],
  pillars: [
    {
      title: "Flavour-Packed Food",
      description: "Authentic dum spices, rich aromatic gravies, and perfectly seasoned dishes that satisfy every craving.",
      icon: "Flame"
    },
    {
      title: "Affordable Menu",
      description: "Generous portions of mouth-watering food at prices that are easy on your pocket, starting at just ₹20.",
      icon: "Wallet"
    },
    {
      title: "Wide Food Variety",
      description: "From royal dum biryanis and hearty rolls to wok-tossed chowmein, crispy starters and cooling mojitos.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Convenient QSR Experience",
      description: "Quick preparation, seamless WhatsApp ordering, and speedy takeaway or pickup right near RCM College.",
      icon: "Clock"
    },
    {
      title: "Freshly Prepared Meals",
      description: "Made fresh to order with quality ingredients, fresh chicken, crisp vegetables, and hygienic standards.",
      icon: "Sparkles"
    }
  ],
  spaces: restaurantSpaces,
};
