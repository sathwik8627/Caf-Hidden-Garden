import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem, DietaryTag } from '../types';
import { Search, Plus, Sparkles, Leaf, Utensils, SlidersHorizontal, LayoutGrid, List, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { CafeLogo } from './CafeLogo';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onQuickAdd
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'tea_coffee', label: 'Tea / Coffee' },
    { id: 'fries', label: 'Fries' },
    { id: 'fried_chicken', label: 'Fried Chicken' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'momos', label: 'Momos' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'milkshakes', label: 'Milk Shakes' },
    { id: 'chinese', label: 'Chinese' },
    { id: 'waffles', label: 'Waffles' },
    { id: 'cheesecakes', label: 'Cheese Cakes' },
    { id: 'brownies', label: 'Brownie' },
    { id: 'buns', label: 'Buns' },
    { id: 'mojitos', label: 'Mojitos' }
  ];

  const dietaryTags: (DietaryTag | 'all')[] = [
    'all',
    'Vegetarian',
    'Non-Veg',
    'Vegan',
    'Spicy',
    'Signature',
    'Popular',
    'Beverage',
    'Dessert'
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Tag filter
      if (activeTag !== 'all' && !item.dietaryTags.includes(activeTag as DietaryTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesNotes = item.botanicalNotes.toLowerCase().includes(query);
        const matchesIng = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesNotes && !matchesIng) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeTag, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex justify-center pb-1">
            <CafeLogo size="md" showTagline={false} />
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
              Full Café & Kitchen Menu
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              All Prices in INR (₹)
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter">
            Culinary Craft & <span className="italic font-normal">Botanical Refreshments</span>
          </h2>
          <p className="text-base text-[#666666] leading-relaxed font-light">
            Explore our complete menu with transparent pricing across hot teas, aromatic coffees, crispy fried chicken, UFO burgers, pastas, waffles, and cooling mojitos.
          </p>
        </div>

        {/* Search & Filters Toolbar */}
        <div className="space-y-4 bg-white p-4 sm:p-6 border border-[#1A1A1A]/20 shadow-xs">
          {/* Search bar & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search dishes, drinks, treats (e.g. burger, peri peri, tea, waffle, wings, momos, brownie)..."
                className="w-full pl-11 pr-4 py-3 bg-[#F5F2ED] border border-[#1A1A1A]/20 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#888888] focus:outline-none focus:border-[#1A1A1A]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider font-semibold text-[#666666] hover:text-black cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-[#F5F2ED] p-1 border border-[#1A1A1A]/15 shrink-0 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
                title="Cards Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
                title="Price Board / List View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Price Board</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                    : 'bg-[#F5F2ED] text-[#1A1A1A] hover:bg-[#EAE7E2] border-[#1A1A1A]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#1A1A1A]/10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] shrink-0 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              Filter:
            </span>
            {dietaryTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  activeTag === tag
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#666666] hover:bg-[#F5F2ED] border-[#1A1A1A]/15'
                }`}
              >
                {tag === 'all' ? 'All Tags' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Content */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#1A1A1A]/20 p-8 space-y-3">
            <Utensils className="w-8 h-8 mx-auto text-[#666666]" />
            <h3 className="font-serif text-xl font-normal text-[#1A1A1A]">No items matched your search</h3>
            <p className="text-xs text-[#666666]">
              Try clearing your search query or choosing another category or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setActiveTag('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-[#1A1A1A] text-white text-xs uppercase tracking-wider font-semibold mt-2 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="relative h-52 w-full overflow-hidden cursor-pointer bg-[#EAE7E2]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.popular && (
                      <span className="px-2.5 py-0.5 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-wider font-bold shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                    {item.seasonal && (
                      <span className="px-2.5 py-0.5 bg-amber-800 text-white text-[10px] uppercase tracking-wider font-bold shadow-xs">
                        Chef's Special
                      </span>
                    )}
                  </div>
                  {/* High visibility image price badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#1A1A1A] text-white font-serif font-semibold text-base shadow-md border border-white/20 flex items-center gap-1">
                    <span>₹{item.price.toFixed(2)}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.dietaryTags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-semibold text-[#666666] bg-[#F5F2ED] px-2 py-0.5 border border-[#1A1A1A]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Bold Price Row */}
                    <div className="flex items-baseline justify-between gap-3">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A] group-hover:underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <div className="shrink-0 font-serif font-bold text-lg text-[#1A1A1A] bg-[#F5F2ED] px-2.5 py-0.5 border border-[#1A1A1A]/15">
                        ₹{item.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Botanical Notes Pill */}
                    <div className="bg-[#F5F2ED] p-2.5 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] italic flex items-center gap-2">
                      <Leaf className="w-3.5 h-3.5 text-[#38533E] shrink-0" />
                      <span className="truncate">{item.botanicalNotes}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#1A1A1A]/10">
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] hover:underline cursor-pointer"
                    >
                      Details & Options
                    </button>

                    <button
                      type="button"
                      onClick={() => onQuickAdd(item)}
                      className="px-3.5 py-2 bg-[#1A1A1A] hover:bg-black text-white border border-[#1A1A1A] font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add • ₹{item.price.toFixed(0)}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* PRICE BOARD / LIST VIEW */
          <div className="bg-white border border-[#1A1A1A]/20 shadow-xs divide-y divide-[#1A1A1A]/10">
            <div className="p-4 bg-[#1A1A1A] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#F5F2ED]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Café Menu & Price Board ({filteredItems.length} items)
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-stone-300 hidden sm:inline">
                All prices inclusive of preparation
              </span>
            </div>

            <div className="divide-y divide-[#1A1A1A]/10">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F5F2ED]/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      onClick={() => onSelectItem(item)}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover border border-[#1A1A1A]/15 shrink-0 cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4
                          onClick={() => onSelectItem(item)}
                          className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] cursor-pointer hover:underline"
                        >
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-[#1A1A1A] text-white text-[9px] uppercase tracking-wider font-bold">
                            Popular
                          </span>
                        )}
                        {item.dietaryTags.map(tag => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase tracking-wider font-semibold text-[#666666] bg-[#F5F2ED] px-1.5 py-0.5 border border-[#1A1A1A]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#666666] line-clamp-1 font-light max-w-xl">
                        {item.description}
                      </p>
                      <p className="text-[11px] text-[#38533E] italic">
                        {item.botanicalNotes}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1A1A1A]/10">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase tracking-wider text-[#666666] block sm:inline mr-1">Price:</span>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                        ₹{item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="px-3 py-2 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] bg-white hover:bg-[#F5F2ED] cursor-pointer"
                      >
                        Options
                      </button>
                      <button
                        type="button"
                        onClick={() => onQuickAdd(item)}
                        className="px-4 py-2 bg-[#1A1A1A] hover:bg-black text-white text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

