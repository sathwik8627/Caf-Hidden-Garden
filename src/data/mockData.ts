import { MenuItem, SeatingArea, Workshop, Review } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. TEA / COFFEE
  // ==========================================
  {
    id: 'tc-1',
    name: 'Tea',
    category: 'tea_coffee',
    price: 20.00,
    description: 'Freshly brewed aromatic hot tea with rich Assam tea leaves and pure milk.',
    botanicalNotes: 'Rich malty infusion with smooth milk notes and comforting warmth.',
    ingredients: ['Premium Assam tea leaves', 'Farm fresh milk', 'Cardamom hint', 'Sugar'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 85,
    customizations: [
      {
        name: 'Sweetness',
        options: [
          { label: 'Regular Sugar', priceDelta: 0 },
          { label: 'Less Sugar', priceDelta: 0 },
          { label: 'Sugar Free', priceDelta: 0 }
        ]
      }
    ]
  },
  {
    id: 'tc-2',
    name: 'Coffee',
    category: 'tea_coffee',
    price: 25.00,
    description: 'Traditional aromatic filter coffee brewed to perfection with frothy hot milk.',
    botanicalNotes: 'Deep roasted chicory and robust coffee bean aroma with creamy crema.',
    ingredients: ['South Indian roasted coffee blend', 'Steamed milk', 'Raw cane sugar'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 95
  },
  {
    id: 'tc-3',
    name: 'Boost',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Hot malted chocolate energy drink prepared rich with steaming fresh milk.',
    botanicalNotes: 'Toasted malt grains with velvety chocolate nourishment.',
    ingredients: ['Boost malt extract', 'Fresh boiled milk', 'Sugar'],
    dietaryTags: ['Vegetarian', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    calories: 140
  },
  {
    id: 'tc-4',
    name: 'Horlicks',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Classic wholesome malted hot milk beverage packed with soothing flavors.',
    botanicalNotes: 'Nutty malted barley aroma with soothing warm milk comfort.',
    ingredients: ['Horlicks traditional malt', 'Fresh dairy milk'],
    dietaryTags: ['Vegetarian', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    calories: 135
  },
  {
    id: 'tc-5',
    name: 'Green Tea',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Delicate whole-leaf green tea rich in antioxidants and refreshing vitality.',
    botanicalNotes: 'Grassy freshness with subtle sweet floral undertones.',
    ingredients: ['Organic green tea whole leaves', 'Filtered hot spring water', 'Optional lemon slice'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80',
    calories: 5
  },
  {
    id: 'tc-6',
    name: 'Lemon Tea',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Zesty black tea steeped with freshly squeezed lemon juice and a touch of honey.',
    botanicalNotes: 'Bright citrus zing, brisk amber tea, and balanced natural sweetness.',
    ingredients: ['Black tea', 'Fresh lemon juice', 'Organic honey or sugar', 'Mint sprig'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    calories: 45
  },
  {
    id: 'tc-7',
    name: 'Black Coffee',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Bold, pure espresso drip coffee served piping hot without milk.',
    botanicalNotes: 'Smoky dark chocolate, toasted walnut, and crisp clean finish.',
    ingredients: ['100% Arabica roasted dark beans', 'Hot filtered water'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    calories: 10
  },
  {
    id: 'tc-8',
    name: 'Ginger Tea',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Strong hot tea brewed with freshly crushed fiery ginger root and spices.',
    botanicalNotes: 'Invigorating ginger heat paired with soothing creamy milk.',
    ingredients: ['Fresh crushed organic ginger', 'Assam black tea', 'Boiled milk', 'Cardamom'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Signature'],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 90
  },
  {
    id: 'tc-9',
    name: 'Elachi Tea',
    category: 'tea_coffee',
    price: 30.00,
    description: 'Fragrant elaichi (green cardamom) steeped milk tea with royal aromatics.',
    botanicalNotes: 'Exotic sweet herbal cardamom perfume with velvety creaminess.',
    ingredients: ['Crushed green cardamom pods', 'Black tea leaves', 'Fresh milk', 'Sugar'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Signature'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc506b1826f?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 95
  },
  {
    id: 'tc-10',
    name: 'Milk',
    category: 'tea_coffee',
    price: 20.00,
    description: 'Pure, wholesome steamed hot milk served sweet or plain.',
    botanicalNotes: 'Simple, creamy, and soothing warmth.',
    ingredients: ['Fresh dairy milk', 'Optional sugar / saffron pinch'],
    dietaryTags: ['Vegetarian', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    calories: 120
  },

  // ==========================================
  // 2. FRIES
  // ==========================================
  {
    id: 'fr-1',
    name: 'Salted Fries',
    category: 'fries',
    price: 69.00,
    description: 'Golden crispy potato fries lightly sprinkled with pure sea salt crystals.',
    botanicalNotes: 'Crunchy exterior, fluffy interior potato with balanced mineral saltiness.',
    ingredients: ['Farm potatoes', 'Refined vegetable oil', 'Sea salt'],
    dietaryTags: ['Vegetarian', 'Vegan', 'Popular'],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 280
  },
  {
    id: 'fr-2',
    name: 'Peri Peri Fries',
    category: 'fries',
    price: 89.00,
    description: 'Crisp hot fries generously tossed in spicy, tangy African bird’s eye peri peri seasoning.',
    botanicalNotes: 'Spicy chili warmth, citrus zest, garlic, and savory herb kick.',
    ingredients: ['Crispy potato fries', 'Peri peri chili blend', 'Garlic powder', 'Oregano', 'Citrus salt'],
    dietaryTags: ['Vegetarian', 'Vegan', 'Spicy', 'Popular'],
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 310
  },
  {
    id: 'fr-3',
    name: 'Loaded Fries',
    category: 'fries',
    price: 149.00,
    description: 'Crispy golden fries smothered with melted cheese sauce, jalapeños, salsa, and herb mayo.',
    botanicalNotes: 'Decadent melted cheddar, pickled jalapeño punch, and savory scallions.',
    ingredients: ['Crisp french fries', 'Warm cheese blend', 'Pickled jalapeños', 'Creamy garlic sauce', 'Spring onion'],
    dietaryTags: ['Vegetarian', 'Signature', 'Popular'],
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 460
  },
  {
    id: 'fr-4',
    name: 'Desi Masala Fries',
    category: 'fries',
    price: 119.00,
    description: 'Crunchy potato fries seasoned with tangy chaat masala, roasted cumin, and red chili.',
    botanicalNotes: 'Tangy amchur (dry mango), toasted cumin seed, and fragrant coriander dust.',
    ingredients: ['Potato fries', 'Chaat masala', 'Roasted cumin', 'Degi mirch', 'Fresh cilantro'],
    dietaryTags: ['Vegetarian', 'Vegan', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    calories: 320
  },

  // ==========================================
  // 3. FRIED CHICKEN
  // ==========================================
  {
    id: 'fc-1',
    name: 'Fried Chicken (1 Pc)',
    category: 'fried_chicken',
    price: 79.00,
    description: 'Single piece of fresh chicken marinated in 11 secret spices, double-breaded and fried golden.',
    botanicalNotes: 'Ultra crispy spiced crust surrounding juicy, tender chicken meat.',
    ingredients: ['Fresh chicken piece', 'Secret herb & spice blend', 'Crispy buttermilk coating'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 220
  },
  {
    id: 'fc-2',
    name: 'Fried Chicken (2 Pcs)',
    category: 'fried_chicken',
    price: 149.00,
    description: 'Two pieces of succulent fried chicken with extra crunchy golden spice crust.',
    botanicalNotes: 'Craggy crunchy batter, savory garlic-herb marinade, and hot juicy center.',
    ingredients: ['2 chicken pieces', 'Signature spiced batter', 'Garlic pepper rub'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 440
  },
  {
    id: 'fc-3',
    name: 'Fried Chicken (3 Pcs)',
    category: 'fried_chicken',
    price: 229.00,
    description: 'Three hearty pieces of signature crispy golden fried chicken served hot.',
    botanicalNotes: 'Herb-infused crispy batter seasoned with paprika and white pepper.',
    ingredients: ['3 chicken cuts', 'Secret batter recipe', 'Paprika & spice mix'],
    dietaryTags: ['Non-Veg'],
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
    calories: 650
  },
  {
    id: 'fc-4',
    name: 'Fried Chicken (4 Pcs)',
    category: 'fried_chicken',
    price: 299.00,
    description: 'Four-piece family feast bucket of our signature crispy spiced fried chicken.',
    botanicalNotes: 'Generous sharing platter of crispy, golden-brown perfection.',
    ingredients: ['4 premium chicken cuts', 'House crunch marinade', 'Herb seasoning'],
    dietaryTags: ['Non-Veg', 'Signature'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    calories: 880
  },
  {
    id: 'fc-5',
    name: 'Wings (6 Pcs)',
    category: 'fried_chicken',
    price: 149.00,
    description: 'Six crispy golden chicken wings tossed with seasoning and served with garlic dip.',
    botanicalNotes: 'Crackling skin, spicy aromatic rub, and succulent tender wing meat.',
    ingredients: ['6 chicken wings', 'Crispy seasoning', 'Garlic herb dip'],
    dietaryTags: ['Non-Veg', 'Spicy', 'Popular'],
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 380
  },
  {
    id: 'fc-6',
    name: 'Lollipops (5 Pcs)',
    category: 'fried_chicken',
    price: 159.00,
    description: 'Five chicken wing lollipops frenched, seasoned in spicy masala, and deep fried crisp.',
    botanicalNotes: 'Spicy chili-garlic glazed outer crust with succulent lollipop bite.',
    ingredients: ['5 frenched chicken wings', 'Red chili ginger marinade', 'Soy garlic dip'],
    dietaryTags: ['Non-Veg', 'Spicy', 'Signature'],
    image: 'https://images.unsplash.com/photo-1527477378370-98d9cbca0b4b?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 390
  },
  {
    id: 'fc-7',
    name: 'Leg Piece (1 Pc)',
    category: 'fried_chicken',
    price: 80.00,
    description: 'One full chicken drumstick marinated in aromatic spices and fried with crunch.',
    botanicalNotes: 'Juicy dark meat drumstick coated in seasoned crispy crumbs.',
    ingredients: ['Chicken drumstick', 'House spice blend', 'Crisp flour batter'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    calories: 230
  },
  {
    id: 'fc-8',
    name: 'Body Piece (1 Pc)',
    category: 'fried_chicken',
    price: 99.00,
    description: 'Hearty chicken breast/thigh cut fried with extra crisp golden seasoned coating.',
    botanicalNotes: 'Meaty, tender portion seasoned with toasted pepper and garlic.',
    ingredients: ['Tender chicken body cut', 'Buttermilk spice soak', 'Golden coating'],
    dietaryTags: ['Non-Veg'],
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    calories: 260
  },
  {
    id: 'fc-9',
    name: 'Strips (5 Pcs)',
    category: 'fried_chicken',
    price: 149.00,
    description: 'Five boneless chicken tenders coated in crispy panko crumbs served with dip.',
    botanicalNotes: '100% boneless breast meat, tender inside with an audible crunch.',
    ingredients: ['5 chicken breast tenders', 'Panko breading', 'Special dipping sauce'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 360
  },
  {
    id: 'fc-10',
    name: 'Chicken Popcorn',
    category: 'fried_chicken',
    price: 149.00,
    description: 'Bite-sized tender boneless chicken morsels fried golden with spicy peri seasoning.',
    botanicalNotes: 'Addictive popping crunch with savory garlic and paprika seasoning.',
    ingredients: ['Boneless chicken bites', 'Crisp batter', 'Chili pepper shake'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 340
  },
  {
    id: 'fc-11',
    name: 'Tree Chicken',
    category: 'fried_chicken',
    price: 100.00,
    description: 'Speciality skewed tree-style crispy chicken with herb and spice glaze.',
    botanicalNotes: 'Distinctive skewer roast aroma with crispy herb seasoned edges.',
    ingredients: ['Tender spiced chicken cuts', 'Herb marinade', 'Sesame seed dust'],
    dietaryTags: ['Non-Veg', 'Signature'],
    image: 'https://images.unsplash.com/photo-1527477378370-98d9cbca0b4b?auto=format&fit=crop&w=800&q=80',
    calories: 280
  },
  {
    id: 'fc-12',
    name: 'Combo 1',
    category: 'fried_chicken',
    price: 169.00,
    description: 'Value platter featuring 3 crispy Wings and 2 spicy Chicken Lollipops with dips.',
    botanicalNotes: 'The best of both worlds: 3 crunchy wings & 2 fiery frenched lollipops.',
    ingredients: ['3 Chicken Wings', '2 Chicken Lollipops', 'Garlic Mayo Dip'],
    dietaryTags: ['Non-Veg', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 490
  },

  // ==========================================
  // 4. BURGERS
  // ==========================================
  {
    id: 'bg-1',
    name: 'Crispy Chicken Burger',
    category: 'burgers',
    price: 149.00,
    description: 'Golden fried crispy chicken patty topped with crunchy iceberg lettuce and creamy mayo.',
    botanicalNotes: 'Crisp golden chicken patty, cool shredded lettuce, and toasted sesame bun.',
    ingredients: ['Crispy chicken patty', 'Toasted brioche sesame bun', 'Iceberg lettuce', 'Creamy garlic mayo'],
    dietaryTags: ['Non-Veg', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 480
  },
  {
    id: 'bg-2',
    name: 'Paneer Crispy Burger',
    category: 'burgers',
    price: 149.00,
    description: 'Crispy battered spiced paneer slab loaded with chipotle mayo, onions, and lettuce.',
    botanicalNotes: 'Melt-in-mouth cottage cheese core wrapped in a crackling spicy crumb.',
    ingredients: ['Spiced paneer steak', 'Chipotle sauce', 'Fresh tomato slices', 'Sesame bun'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 440
  },
  {
    id: 'bg-3',
    name: 'Ufo Sealed Burger',
    category: 'burgers',
    price: 159.00,
    description: 'Unique UFO-pressed circular sealed toasted burger trapping all molten cheese and juicy filling inside.',
    botanicalNotes: 'Crisp sealed bun perimeter locking in sizzling hot molten cheese and savory fillings.',
    ingredients: ['Sealed brioche bun', 'Molten cheese core', 'Spiced savory patty', 'Special sauce blend'],
    dietaryTags: ['Signature', 'Popular'],
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 520
  },
  {
    id: 'bg-4',
    name: 'Veg Patty Burger',
    category: 'burgers',
    price: 139.00,
    description: 'Wholesome garden vegetable patty loaded with herbs, lettuce, and secret sauce.',
    botanicalNotes: 'Green peas, carrots, sweet corn, and garden herbs in a golden crisp crumb.',
    ingredients: ['Mixed vegetable patty', 'Lettuce', 'Tomato', 'Veg mayo', 'Toasted bun'],
    dietaryTags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
    calories: 390
  },
  {
    id: 'bg-5',
    name: 'Aloo Tikki Burger',
    category: 'burgers',
    price: 139.00,
    description: 'Desi spiced crispy potato tikki with mint-mayo sauce, onions, and crunchy greens.',
    botanicalNotes: 'Spiced mashed potato with roasted cumin, green chilies, and tangy mint notes.',
    ingredients: ['Aloo tikki patty', 'Mint mayo', 'Sliced red onions', 'Toasted sesame bun'],
    dietaryTags: ['Vegetarian', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    calories: 410
  },
  {
    id: 'bg-6',
    name: 'No Bun Burger',
    category: 'burgers',
    price: 179.00,
    description: 'Protein-packed burger wrapped in fresh crisp lettuce leaves without wheat buns.',
    botanicalNotes: 'Refreshing lettuce leaf wrap, juicy grilled patty, tomato, and clean dressings.',
    ingredients: ['Crisp romaine/iceberg wrap', 'Juicy patty', 'Avocado slice', 'Herb dressing', 'Cheese slice'],
    dietaryTags: ['Gluten-Free', 'Signature'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    calories: 340
  },
  {
    id: 'bg-7',
    name: 'Jumbo Burger',
    category: 'burgers',
    price: 199.00,
    description: 'Double patty monster burger loaded with double cheese slices, caramelized onions, and house glaze.',
    botanicalNotes: 'Towering layers of double savory patties, melted cheddar, and savory relish.',
    ingredients: ['Double patties', 'Double cheddar cheese', 'Pickles', 'Crispy lettuce', 'Brioche jumbo bun'],
    dietaryTags: ['Signature', 'Popular'],
    image: 'https://images.unsplash.com/photo-1583032015879-6799017bb523?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 680
  },

  // ==========================================
  // 5. PASTA
  // ==========================================
  {
    id: 'ps-1',
    name: 'White Sauce Pasta (Veg)',
    category: 'pasta',
    price: 179.00,
    description: 'Penne pasta tossed in rich, velvety garlic Alfredo cream sauce with bell peppers, sweet corn, and broccoli.',
    botanicalNotes: 'Silky cream, grated parmesan, sautéed garlic, and sweet garden bell peppers.',
    ingredients: ['Penne pasta', 'Rich white cream sauce', 'Broccoli', 'Bell peppers', 'Sweet corn', 'Oregano & chili flakes'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628169b?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 460
  },
  {
    id: 'ps-2',
    name: 'White Sauce Pasta (Non Veg)',
    category: 'pasta',
    price: 199.00,
    description: 'Penne pasta tossed in creamy parmesan Alfredo sauce with seasoned grilled chicken chunks and herbs.',
    botanicalNotes: 'Rich velvety cheese sauce with juicy garlic-herbed chicken pieces.',
    ingredients: ['Penne pasta', 'Alfredo white sauce', 'Juicy grilled chicken', 'Parmesan', 'Italian herbs'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 540
  },
  {
    id: 'ps-3',
    name: 'Red Sauce Pasta (Veg)',
    category: 'pasta',
    price: 169.00,
    description: 'Classic Penne pasta simmered in tangy tomato basil marinara sauce with sautéed garden veggies.',
    botanicalNotes: 'Sun-ripened San Marzano tomato richness, fresh sweet basil, and garlic warmth.',
    ingredients: ['Penne pasta', 'Tomato basil arrabbiata sauce', 'Olives', 'Bell peppers', 'Fresh basil'],
    dietaryTags: ['Vegetarian', 'Vegan'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    calories: 380
  },
  {
    id: 'ps-4',
    name: 'Red Sauce Pasta (Non Veg)',
    category: 'pasta',
    price: 189.00,
    description: 'Tender penne pasta simmered in spicy tomato herb marinara with seasoned chicken chunks.',
    botanicalNotes: 'Zesty tomato, roasted garlic, cracked pepper, and tender spiced chicken.',
    ingredients: ['Penne pasta', 'Spicy marinara sauce', 'Chicken chunks', 'Black olives', 'Herbs'],
    dietaryTags: ['Non-Veg', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    calories: 450
  },
  {
    id: 'ps-5',
    name: 'Spaghetti White Sauce Pasta',
    category: 'pasta',
    price: 199.00,
    description: 'Long spaghetti strands twirled in decadent creamy garlic cheese sauce with your choice of Veg or Non-Veg topping.',
    botanicalNotes: 'Silky twirled pasta ribbons coated in rich cheese and fragrant Italian herbs.',
    ingredients: ['Spaghetti', 'Creamy Alfredo sauce', 'Garlic herbs', 'Parmesan', 'Choice of Veggies or Chicken'],
    dietaryTags: ['Signature', 'Popular'],
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 510,
    customizations: [
      {
        name: 'Preparation Style',
        options: [
          { label: 'Veg (Garden Vegetables)', priceDelta: 0 },
          { label: 'Non-Veg (Grilled Chicken Chunks)', priceDelta: 20.00 }
        ]
      }
    ]
  },
  {
    id: 'ps-6',
    name: 'Spaghetti Red Sauce Pasta',
    category: 'pasta',
    price: 189.00,
    description: 'Classic long spaghetti coated in savory tomato marinara with garlic and Italian herbs.',
    botanicalNotes: 'Bright aromatic tomato essence with oregano, rosemary, and olive oil.',
    ingredients: ['Italian spaghetti', 'Red marinara sauce', 'Fresh herbs', 'Choice of Veg or Non-Veg'],
    dietaryTags: ['Signature'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    calories: 420,
    customizations: [
      {
        name: 'Preparation Style',
        options: [
          { label: 'Veg (Garden Vegetables)', priceDelta: 0 },
          { label: 'Non-Veg (Grilled Chicken Chunks)', priceDelta: 20.00 }
        ]
      }
    ]
  },

  // ==========================================
  // 6. MOMOS
  // ==========================================
  {
    id: 'mo-1',
    name: 'Veg Kurkure Momos',
    category: 'momos',
    price: 129.00,
    description: 'Juicy cabbage, carrot, and paneer dumplings coated with super crunchy kurkure flakes and deep fried.',
    botanicalNotes: 'Audible crunch followed by steaming hot, flavorful spiced vegetable core.',
    ingredients: ['Minced vegetables & paneer', 'Kurkure crunch coating', 'Spicy red chutney', 'Creamy mayo'],
    dietaryTags: ['Vegetarian', 'Popular', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 360
  },
  {
    id: 'mo-2',
    name: 'Non Veg Kurkure Momos',
    category: 'momos',
    price: 149.00,
    description: 'Tender spiced minced chicken dumplings dipped in crisp kurkure flakes and fried until ultra crunchy.',
    botanicalNotes: 'Fiery street-style crunch wrapping succulent, flavorful minced chicken.',
    ingredients: ['Spiced chicken mince', 'Crispy flake coating', 'Schezwan momo dip', 'Garlic mayo'],
    dietaryTags: ['Non-Veg', 'Popular', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 420
  },
  {
    id: 'mo-3',
    name: 'Chocolate Momos (3 Pcs)',
    category: 'momos',
    price: 169.00,
    description: 'Three crispy golden dessert dumplings filled with molten Belgian chocolate ganache.',
    botanicalNotes: 'Warm molten dark and milk chocolate exploding from a delicate crispy shell.',
    ingredients: ['Rich chocolate ganache', 'Crisp momo pastry', 'Chocolate drizzle', 'Icing sugar'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Signature'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    calories: 380
  },

  // ==========================================
  // 7. WRAPS
  // ==========================================
  {
    id: 'wr-1',
    name: 'Veg Wrap',
    category: 'wraps',
    price: 129.00,
    description: 'Warm tortilla rolled with crispy spiced veggie croquettes, crunchy slaw, and mint-mayo spread.',
    botanicalNotes: 'Crunchy fresh vegetables, tangy dressing, and comforting soft toasted wrap.',
    ingredients: ['Flour tortilla', 'Crispy vegetable patty', 'Lettuce & cabbage slaw', 'Mint mayo'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 380
  },
  {
    id: 'wr-2',
    name: 'Chicken Wrap',
    category: 'wraps',
    price: 149.00,
    description: 'Succulent spiced grilled chicken strips wrapped with caramelized onions, greens, and chipotle mayo.',
    botanicalNotes: 'Smoky grilled chicken, crunchy lettuce, and bold savory sauce in a warm wrap.',
    ingredients: ['Soft tortilla wrap', 'Spiced chicken breast strips', 'Onions & peppers', 'Chipotle sauce'],
    dietaryTags: ['Non-Veg', 'Popular'],
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 440
  },
  {
    id: 'wr-3',
    name: 'Paneer Wrap',
    category: 'wraps',
    price: 149.00,
    description: 'Tandoori spiced grilled cottage cheese cubes wrapped with bell peppers and spiced garlic yogurt sauce.',
    botanicalNotes: 'Warm cottage cheese, roasted cumin, tandoori marinade, and fresh cilantro.',
    ingredients: ['Grilled paneer', 'Tortilla flatbread', 'Tandoori dressing', 'Bell peppers & onions'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 430
  },

  // ==========================================
  // 8. MILK SHAKES
  // ==========================================
  {
    id: 'ms-1',
    name: 'Vanilla',
    category: 'milkshakes',
    price: 129.00,
    description: 'Thick, creamy classic Madagascar vanilla milkshake blended with velvety ice cream.',
    botanicalNotes: 'Smooth bourbon vanilla bean aroma and rich sweet dairy chill.',
    ingredients: ['Vanilla bean ice cream', 'Chilled full cream milk', 'Whipped topping'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Dessert'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    calories: 320
  },
  {
    id: 'ms-2',
    name: 'Chocolate',
    category: 'milkshakes',
    price: 149.00,
    description: 'Rich and decadent Dutch cocoa chocolate shake topped with dark chocolate fudge drizzle.',
    botanicalNotes: 'Deep roasted cocoa aroma, rich chocolate fudge, and creamy chill.',
    ingredients: ['Rich chocolate ice cream', 'Cocoa syrup', 'Chilled milk', 'Chocolate sprinkles'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 390
  },
  {
    id: 'ms-3',
    name: 'Strawberry',
    category: 'milkshakes',
    price: 149.00,
    description: 'Refreshing shake prepared with real strawberry crush, berry puree, and sweet milk.',
    botanicalNotes: 'Bright sweet strawberry notes, floral berry fragrance, and pastel pink chill.',
    ingredients: ['Fresh strawberry puree', 'Vanilla strawberry ice cream', 'Cold milk'],
    dietaryTags: ['Vegetarian', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80',
    calories: 330
  },
  {
    id: 'ms-4',
    name: 'Pineapple',
    category: 'milkshakes',
    price: 139.00,
    description: 'Tropical pineapple shake bursting with sweet and tangy sunshine flavors.',
    botanicalNotes: 'Sweet tropical pineapple aroma and smooth, velvety dairy body.',
    ingredients: ['Pineapple pulp', 'Vanilla ice cream', 'Chilled milk'],
    dietaryTags: ['Vegetarian', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=800&q=80',
    calories: 310
  },
  {
    id: 'ms-5',
    name: 'Butterscotch',
    category: 'milkshakes',
    price: 149.00,
    description: 'Golden butterscotch shake loaded with crunchy praline crunchies and caramel fudge.',
    botanicalNotes: 'Rich brown sugar butter caramel, nutty crunchies, and creamy body.',
    ingredients: ['Butterscotch ice cream', 'Caramel syrup', 'Butterscotch crunch', 'Chilled milk'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 380
  },
  {
    id: 'ms-6',
    name: 'Oreo',
    category: 'milkshakes',
    price: 149.00,
    description: 'Thick cookies-and-cream shake blended with crushed Oreo biscuits and chocolate drizzle.',
    botanicalNotes: 'Dark cocoa biscuit crunch swirled with sweet vanilla cream.',
    ingredients: ['Crushed Oreo cookies', 'Vanilla cream ice cream', 'Chocolate fudge', 'Cold milk'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 420
  },
  {
    id: 'ms-7',
    name: 'Kit Kat',
    category: 'milkshakes',
    price: 149.00,
    description: 'Crispy wafer Kit Kat chocolate bars blended into a decadent, velvety thick milkshake.',
    botanicalNotes: 'Crunchy chocolate wafer pieces suspended in creamy malt chocolate.',
    ingredients: ['Kit Kat chocolate bars', 'Chocolate ice cream', 'Cold milk', 'Wafer garnish'],
    dietaryTags: ['Vegetarian', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 430
  },

  // ==========================================
  // 9. CHINESE
  // ==========================================
  {
    id: 'ch-1',
    name: 'Chilli Chicken',
    category: 'chinese',
    price: 169.00,
    description: 'Indo-Chinese style crispy chicken wok-tossed with green chilies, onions, garlic, and dark soy sauce.',
    botanicalNotes: 'Pungent garlic, green chili heat, and savory scallions in a glossy dark glaze.',
    ingredients: ['Boneless diced chicken', 'Green chilies', 'Bell peppers', 'Dark soy sauce', 'Spring onions'],
    dietaryTags: ['Non-Veg', 'Spicy', 'Popular'],
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 390
  },
  {
    id: 'ch-2',
    name: 'Pepper Chicken',
    category: 'chinese',
    price: 169.00,
    description: 'Tender chicken pieces tossed with freshly cracked black pepper, curry leaves, and garlic.',
    botanicalNotes: 'Intense crushed black pepper punch with roasted garlic and aromatic shallots.',
    ingredients: ['Chicken pieces', 'Coarse black pepper', 'Garlic', 'Onions', 'Soy reduction'],
    dietaryTags: ['Non-Veg', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    calories: 370
  },
  {
    id: 'ch-3',
    name: 'Dragon Chicken',
    category: 'chinese',
    price: 169.00,
    description: 'Crispy fried chicken strips tossed in fiery sweet-and-spicy dragon sauce with roasted cashews.',
    botanicalNotes: 'Spicy chili paste, sweet honey balance, and crunchy roasted cashew nuts.',
    ingredients: ['Crispy chicken strips', 'Red chili paste', 'Honey soy glaze', 'Cashew nuts', 'Bell peppers'],
    dietaryTags: ['Non-Veg', 'Spicy', 'Signature'],
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 420
  },
  {
    id: 'ch-4',
    name: 'Chicken Achariya (Dry)',
    category: 'chinese',
    price: 199.00,
    description: 'Crispy chicken tossed in tangy, spicy pickling (achari) spices with mustard and nigella seeds.',
    botanicalNotes: 'Piquant mustard oil, fennel seeds, kalonji, and sun-dried red chili zest.',
    ingredients: ['Chicken pieces', 'Achari spice blend', 'Mustard seeds', 'Fennel', 'Tangy lemon juice'],
    dietaryTags: ['Non-Veg', 'Spicy', 'Signature'],
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 440
  },
  {
    id: 'ch-5',
    name: 'Veg Manchuria',
    category: 'chinese',
    price: 139.00,
    description: 'Golden fried minced vegetable balls tossed in fragrant ginger-garlic Manchurian sauce with coriander.',
    botanicalNotes: 'Ginger-garlic warmth, tangy soy-vinegar glaze, and crisp minced veg dumplings.',
    ingredients: ['Mixed veg dumplings (cabbage, carrot)', 'Garlic ginger sauce', 'Soy sauce', 'Spring onions'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 340
  },
  {
    id: 'ch-6',
    name: 'Paneer Manchuria',
    category: 'chinese',
    price: 169.00,
    description: 'Crispy coated cottage cheese cubes tossed in savory Indo-Chinese spicy Manchurian gravy.',
    botanicalNotes: 'Tender paneer cubes soaking in spicy garlic, green chilies, and scallion sauce.',
    ingredients: ['Crisp paneer cubes', 'Manchurian garlic glaze', 'Green chilies', 'Spring onions'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 410
  },

  // ==========================================
  // 10. WAFFLES
  // ==========================================
  {
    id: 'wf-1',
    name: 'Belgium Waffles',
    category: 'waffles',
    price: 139.00,
    description: 'Freshly baked golden Belgian waffle with deep pockets, served warm with your choice of premium chocolate ganache.',
    botanicalNotes: 'Crisp caramelized waffle exterior, fluffy vanilla interior, and molten chocolate cascade.',
    ingredients: ['Belgian waffle batter', 'Pure vanilla', 'Choice of chocolate drizzle (Dark, White, Milk, or Triple Chocolate)'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 430,
    customizations: [
      {
        name: 'Chocolate Flavor',
        options: [
          { label: 'Dark Chocolate', priceDelta: 0 },
          { label: 'Milk Chocolate', priceDelta: 0 },
          { label: 'White Chocolate', priceDelta: 0 },
          { label: 'Triple Chocolate (Dark + Milk + White)', priceDelta: 20.00 }
        ]
      }
    ]
  },
  {
    id: 'wf-2',
    name: 'Red Velvet Waffle',
    category: 'waffles',
    price: 169.00,
    description: 'Vibrant crimson red velvet waffle topped with cream cheese drizzle and your choice of melted chocolate ganache.',
    botanicalNotes: 'Subtle cocoa red velvet sweetness paired with creamy cheese notes and warm chocolate.',
    ingredients: ['Red velvet waffle batter', 'Cream cheese sauce', 'Chocolate choice (Dark/White/Milk/Triple Chocolate)'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Signature'],
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 480,
    customizations: [
      {
        name: 'Chocolate Flavor',
        options: [
          { label: 'White Chocolate (Classic pairing)', priceDelta: 0 },
          { label: 'Dark Chocolate', priceDelta: 0 },
          { label: 'Milk Chocolate', priceDelta: 0 },
          { label: 'Triple Chocolate (Dark + Milk + White)', priceDelta: 20.00 }
        ]
      }
    ]
  },

  // ==========================================
  // 11. CHEESE CAKES
  // ==========================================
  {
    id: 'cc-1',
    name: 'New York Cheese Cake',
    category: 'cheesecakes',
    price: 189.00,
    description: 'Classic dense and ultra-creamy baked New York cheesecake on a buttery graham cracker crumb crust.',
    botanicalNotes: 'Velvety cream cheese richness, gentle lemon zest note, and buttery biscuit base.',
    ingredients: ['Philadelphia cream cheese', 'Graham cracker crust', 'Vanilla extract', 'Fresh cream'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Signature'],
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 420
  },
  {
    id: 'cc-2',
    name: 'Blueberry Cheese Cake',
    category: 'cheesecakes',
    price: 169.00,
    description: 'Creamy cold-set cheesecake layered with luscious wild blueberry compote topping.',
    botanicalNotes: 'Tangy-sweet wild blueberries with silky smooth cream cheese layer.',
    ingredients: ['Cream cheese', 'Wild blueberry compote', 'Butter biscuit base'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Popular'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 390
  },
  {
    id: 'cc-3',
    name: 'Nutella Cheese Cake',
    category: 'cheesecakes',
    price: 189.00,
    description: 'Decadent cheesecake infused and topped with thick hazelnut Nutella spread and toasted nuts.',
    botanicalNotes: 'Roasted Italian hazelnuts, rich cocoa, and melt-in-mouth cream cheese.',
    ingredients: ['Nutella hazelnut spread', 'Cream cheese', 'Oreo biscuit base', 'Roasted hazelnuts'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Popular'],
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 470
  },
  {
    id: 'cc-4',
    name: 'Biscoff Cheese Cake',
    category: 'cheesecakes',
    price: 189.00,
    description: 'Creamy cheesecake blended with Lotus Biscoff spread on a crunchy spiced Biscoff biscuit crust.',
    botanicalNotes: 'Caramelized speculoos cinnamon spice, deep brown sugar, and velvety dairy.',
    ingredients: ['Lotus Biscoff spread', 'Biscoff biscuit crust', 'Cream cheese', 'Caramel drizzle'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Signature'],
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 460
  },

  // ==========================================
  // 12. BROWNIE
  // ==========================================
  {
    id: 'br-1',
    name: 'Brownie',
    category: 'brownies',
    price: 139.00,
    description: 'Dense, fudgy chocolate brownie with a crinkly top, served warm with your choice of chocolate sauce.',
    botanicalNotes: 'Intense roasted dark cocoa, molten gooey center, and caramelized edge.',
    ingredients: ['Dutch cocoa', 'Dark chocolate chunks', 'Pure butter', 'Choice of chocolate drizzle (Dark/Milk/White/Triple Chocolate)'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Popular'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 380,
    customizations: [
      {
        name: 'Chocolate Sauce',
        options: [
          { label: 'Dark Chocolate Sauce', priceDelta: 0 },
          { label: 'Milk Chocolate Sauce', priceDelta: 0 },
          { label: 'White Chocolate Sauce', priceDelta: 0 },
          { label: 'Triple Chocolate (Dark + Milk + White)', priceDelta: 20.00 }
        ]
      }
    ]
  },
  {
    id: 'br-2',
    name: 'Walnut Brownie',
    category: 'brownies',
    price: 169.00,
    description: 'Fudgy dark chocolate brownie studded with crunchy roasted California walnuts.',
    botanicalNotes: 'Earthy toasted walnuts, bitter-sweet cocoa richness, and warm fudgy center.',
    ingredients: ['Roasted walnuts', 'Gooey dark chocolate batter', 'Butter', 'Chocolate sauce choice'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Signature'],
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 420,
    customizations: [
      {
        name: 'Chocolate Sauce',
        options: [
          { label: 'Dark Chocolate Sauce', priceDelta: 0 },
          { label: 'Milk Chocolate Sauce', priceDelta: 0 },
          { label: 'White Chocolate Sauce', priceDelta: 0 },
          { label: 'Triple Chocolate (Dark + Milk + White)', priceDelta: 20.00 }
        ]
      }
    ]
  },

  // ==========================================
  // 13. BUNS
  // ==========================================
  {
    id: 'bn-1',
    name: 'Malai Bun',
    category: 'buns',
    price: 60.00,
    description: 'Soft pillow-like bakery bun stuffed with thick fresh clotted milk cream (malai) and sugar crystals.',
    botanicalNotes: 'Sweet aromatic dairy cream melting into warm, airy bakery bread.',
    ingredients: ['Soft baked bun', 'Fresh thick malai (cream)', 'Granulated sugar'],
    dietaryTags: ['Vegetarian', 'Dessert', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 260
  },
  {
    id: 'bn-2',
    name: 'Muska Bun',
    category: 'buns',
    price: 40.00,
    description: 'Classic Irani-style soft sweet bun slathered with generous salted butter, ideal with hot tea.',
    botanicalNotes: 'Slightly sweet bakery bun with rich melting salted butter.',
    ingredients: ['Fresh sweet bun', 'Salted table butter'],
    dietaryTags: ['Vegetarian', 'Popular'],
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 220
  },

  // ==========================================
  // 14. MOJITOS
  // ==========================================
  {
    id: 'mj-1',
    name: 'Blue Coracao',
    category: 'mojitos',
    price: 109.00,
    description: 'Electrifying blue citrus mocktail with curaçao orange notes, fresh mint sprigs, lime, and soda.',
    botanicalNotes: 'Citrus peel aromatics, fresh garden mint, and effervescent sparkling chill.',
    ingredients: ['Blue curaçao syrup', 'Fresh lime juice', 'Garden mint leaves', 'Sparkling soda water', 'Ice'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage', 'Popular', 'Signature'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 120
  },
  {
    id: 'mj-2',
    name: 'Green Apple',
    category: 'mojitos',
    price: 109.00,
    description: 'Crisp green apple refresher with crushed mint leaves, tangy lime slices, and bubbling soda.',
    botanicalNotes: 'Tart green apple crunch, cooling spearmint, and sparkling citrus fizz.',
    ingredients: ['Green apple syrup', 'Fresh lime wedges', 'Mint leaves', 'Chilled sparkling soda'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    calories: 115
  },
  {
    id: 'mj-3',
    name: 'Strawberry',
    category: 'mojitos',
    price: 109.00,
    description: 'Muddled ripe strawberries, garden mint, fresh lime, and sparkling water over crushed ice.',
    botanicalNotes: 'Sweet berry fragrance, tart lime, and refreshing crushed ice chill.',
    ingredients: ['Muddled strawberry puree', 'Fresh mint', 'Lime juice', 'Soda water'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 125
  },
  {
    id: 'mj-4',
    name: 'Virgin Mint',
    category: 'mojitos',
    price: 109.00,
    description: 'The timeless classic virgin mojito with freshly muddled garden mint, raw cane sugar, lime, and soda.',
    botanicalNotes: 'Pure aromatic mint leaves, crisp Persian lime, and lively carbonation.',
    ingredients: ['Freshly picked garden mint', 'Fresh lime juice', 'Cane sugar syrup', 'Sparkling club soda'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage', 'Popular'],
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    calories: 90
  },
  {
    id: 'mj-5',
    name: 'Watermelon',
    category: 'mojitos',
    price: 109.00,
    description: 'Juicy summer watermelon muddled with fresh mint leaves, lime juice, and sparkling soda.',
    botanicalNotes: 'Crisp hydrating watermelon, cooling herbal mint, and zesty citrus finish.',
    ingredients: ['Fresh watermelon juice', 'Mint sprigs', 'Lime juice', 'Sparkling soda'],
    dietaryTags: ['Vegan', 'Gluten-Free', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',
    calories: 105
  }
];

export const SEATING_AREAS: SeatingArea[] = [
  {
    id: 'conservatory',
    name: 'The Glass Conservatory',
    subtitle: 'Surrounded by century-old living palms & skylights',
    description: 'Dine inside our majestic 19th-century glass atrium under natural sun rays and soaring Victorian glass ceilings.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    atmosphere: 'Luminous, spacious, and filled with gentle birdsong',
    features: ['High natural sunlight', 'Cascading ferns', 'Marble bistro tables', 'High-speed Wi-Fi & power'],
    recommendedFor: 'Leisurely coffee breaks, brunch dates, and remote work',
    capacity: 'Up to 6 guests per table',
    dogFriendly: true,
    bestTime: 'Morning sun (8:00 AM – 1:00 PM)'
  },
  {
    id: 'secret-courtyard',
    name: 'The Secret Courtyard',
    subtitle: 'Under open skies, stone fountains & climbing roses',
    description: 'An open-air brick courtyard featuring shaded wisteria canopies, whispering water fountains, and fragrant blooming jasmine.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    atmosphere: 'Serene, romantic, and cooled by leafy shadows',
    features: ['Stone fountain acoustics', 'Open-air breeze', 'Heat lamps for cool evenings', 'Direct garden access'],
    recommendedFor: 'Romantic dates, afternoon tea, and celebratory gatherings',
    capacity: 'Up to 8 guests per table',
    dogFriendly: true,
    bestTime: 'Afternoon & golden hour (3:00 PM – 7:30 PM)'
  },
  {
    id: 'fern-glen',
    name: 'The Fern Glen Mezzanine',
    subtitle: 'Overlooking the living atrium with velvet booths',
    description: 'An elevated private sanctuary lined with plush olive velvet seating, bronze reading lamps, and panoramic greenhouse views.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    atmosphere: 'Intimate, quiet, and perfect for focused discussions',
    features: ['Quiet study atmosphere', 'Plush velvet banquettes', 'Individual reading lamps', 'Overhead garden view'],
    recommendedFor: 'Private conversations, deep work, and book reading',
    capacity: 'Up to 4 guests per booth',
    dogFriendly: false,
    bestTime: 'All day quiet hours (9:00 AM – 8:00 PM)'
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Artisanal Coffee & Chai Brewing',
    subtitle: 'Master single-origin extractions & spiced tea brewing',
    date: 'Saturday, May 18',
    time: '10:00 AM – 12:30 PM',
    duration: '2.5 Hours',
    instructor: 'Aarav Mehta',
    instructorRole: 'Head Barista & Roaster',
    price: 499,
    spotsLeft: 4,
    maxSpots: 12,
    description: 'Learn the chemistry of roasting, extraction ratios, milk steaming, and spices for crafting world-class coffee and tea.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    includes: ['Tasting flight of 4 brews', 'Fresh 250g coffee bean bag', 'Barista manual', 'Snack & waffle pairings'],
    level: 'All Levels'
  },
  {
    id: 'ws-2',
    title: 'Artisan Pastry & Belgian Waffle Masterclass',
    subtitle: 'Bake perfect waffles, molten brownies & cheesecakes',
    date: 'Sunday, May 26',
    time: '2:00 PM – 5:00 PM',
    duration: '3.0 Hours',
    instructor: 'Chef Elena Rostova',
    instructorRole: 'Executive Pastry Chef',
    price: 699,
    spotsLeft: 3,
    maxSpots: 10,
    description: 'Hands-on dessert baking workshop covering authentic Belgian waffle batter, chocolate ganaches, and no-fail cheesecake crusts.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    includes: ['All baking tools & ingredients', 'Box of freshly baked treats to take home', 'Chef recipe book'],
    level: 'Beginner'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    location: 'Bangalore, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'The Crispy Chicken Burger and Peri Peri Fries are extraordinary! Paired with their fresh Elachi Tea inside the glass conservatory, this is easily our favorite spot in town.',
    favoriteDish: 'Crispy Chicken Burger & Elachi Tea',
    tags: ['Crispy Chicken', 'Glass Greenhouse', 'Specialty Coffee'],
    verifiedVisit: true
  },
  {
    id: 'r2',
    name: 'Vikram Joshi',
    location: 'Hyderabad, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Belgium Waffles with triple chocolate ganache and the Oreo Milk Shake were pure perfection. Sitting by the courtyard fountain with friends was so refreshing.',
    favoriteDish: 'Belgium Waffles (Triple Chocolate)',
    tags: ['Waffles', 'Milk Shakes', 'Secret Courtyard'],
    verifiedVisit: true
  },
  {
    id: 'r3',
    name: 'Ananya Reddy',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The White Sauce Pasta and Veg Kurkure Momos were super flavorful and fresh. The ambiance among living ferns is unmatched.',
    favoriteDish: 'White Sauce Pasta & Kurkure Momos',
    tags: ['Pasta', 'Momos', 'Conservatory'],
    verifiedVisit: true
  },
  {
    id: 'r4',
    name: 'Rahul Verma',
    location: 'Chennai, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best Fried Chicken wings and Blue Coracao Mojito! Also loved the warm Malai Bun with our evening filter coffee.',
    favoriteDish: 'Combo 1 (Wings & Lollipops) & Blue Coracao Mojito',
    tags: ['Fried Chicken', 'Mojitos', 'Buns'],
    verifiedVisit: true
  }
];

export const FAQS = [
  {
    question: 'Do you offer vegetarian and vegan options across the menu?',
    answer: 'Yes! We offer extensive vegetarian and vegan selections across all sections, including Veg Patty & Paneer Burgers, Desi Masala Fries, Veg Kurkure Momos, Veg Alfredo & Marinara Pastas, Belgian Waffles, and all fresh fruit Mojitos.'
  },
  {
    question: 'Can I place takeaway or table orders online directly from my phone?',
    answer: 'Absolutely. You can customize dishes, choose spice levels and chocolate toppings, apply promo codes, and submit contactless orders for pick-up or table delivery with real-time live status tracking.'
  },
  {
    question: 'Are walk-ins welcome for dining in the conservatory or courtyard?',
    answer: 'Walk-in guests are always warmly welcomed. For guaranteed seating during peak weekend brunch and evening hours, we recommend making a quick online reservation.'
  },
  {
    question: 'Do you host private celebrations, workshops, and gatherings?',
    answer: 'Yes, our glass conservatory and secret courtyard are available for private parties, birthdays, intimate gatherings, and sensory coffee/waffle masterclasses. You can submit an inquiry through our visitor contact form.'
  }
];
