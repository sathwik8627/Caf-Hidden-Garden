export type DietaryTag = 'Vegetarian' | 'Non-Veg' | 'Vegan' | 'Gluten-Free' | 'Signature' | 'Popular' | 'Beverage' | 'Dessert' | 'Spicy';

export interface CustomizationOption {
  name: string;
  options: { label: string; priceDelta: number }[];
}

export type MenuCategory =
  | 'tea_coffee'
  | 'fries'
  | 'fried_chicken'
  | 'burgers'
  | 'pasta'
  | 'momos'
  | 'wraps'
  | 'milkshakes'
  | 'chinese'
  | 'waffles'
  | 'cheesecakes'
  | 'brownies'
  | 'buns'
  | 'mojitos';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory | string;
  price: number;
  description: string;
  botanicalNotes: string;
  ingredients: string[];
  dietaryTags: DietaryTag[];
  image: string;
  popular?: boolean;
  seasonal?: boolean;
  calories?: number;
  customizations?: CustomizationOption[];
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: Record<string, string>;
  specialInstructions?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface SeatingArea {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  atmosphere: string;
  features: string[];
  recommendedFor: string;
  capacity: string;
  dogFriendly: boolean;
  bestTime: string;
}

export interface Reservation {
  id: string;
  referenceCode: string;
  guestName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingAreaId: string;
  seatingAreaName: string;
  occasion: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  instructorRole: string;
  price: number;
  spotsLeft: number;
  maxSpots: number;
  description: string;
  image: string;
  includes: string[];
  level: 'All Levels' | 'Beginner' | 'Intermediate';
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
  tags: string[];
  verifiedVisit: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  tip: number;
  tax: number;
  total: number;
  orderType: 'takeaway' | 'table_order';
  tableNumber?: string;
  pickupTime: string;
  customerName: string;
  phone: string;
  email: string;
  status: 'received' | 'brewing' | 'ready' | 'completed';
  createdAt: string;
}
