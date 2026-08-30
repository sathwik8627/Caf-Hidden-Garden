import React, { useState } from 'react';
import { REVIEWS } from '../data/mockData';
import { Review } from '../types';
import { Star, CheckCircle, MessageSquarePlus, X, Sparkles, Heart, Instagram, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeTag, setActiveTag] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [favoriteDish, setFavoriteDish] = useState('');
  const [selectedTag, setSelectedTag] = useState('Burgers');

  const filterTags = ['All', 'Fried Chicken', 'Burgers', 'Pasta', 'Momos', 'Waffles', 'Specialty Coffee', 'Mojitos'];

  const filteredReviews = activeTag === 'All'
    ? reviewsList
    : reviewsList.filter(r => r.tags.includes(activeTag));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !comment) {
      alert('Please fill in your name and review comments.');
      return;
    }

    const newRev: Review = {
      id: `rev_${Date.now()}`,
      name: reviewerName,
      location: reviewerLocation || 'Café Visitor',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating,
      date: 'Just now',
      comment,
      favoriteDish: favoriteDish || 'Crispy Chicken Burger & Elachi Tea',
      tags: [selectedTag],
      verifiedVisit: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsModalOpen(false);
    // Reset
    setReviewerName('');
    setReviewerLocation('');
    setComment('');
    setFavoriteDish('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
                The Guestbook
              </span>
              <div className="w-8 h-[1px] bg-[#1A1A1A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
                Community & Critic Notes
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter">
              Loved by Coffee Purists & <span className="italic font-normal">Nature Seekers</span>
            </h2>
            <p className="text-base text-[#666666] leading-relaxed font-light">
              Read verified impressions from brunch dates, remote creators, and botanical garden travelers.
            </p>
          </div>

          {/* Rating Summary Box & Write Review Trigger */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-white p-4 border border-[#1A1A1A]/15 shadow-xs flex items-center gap-3.5">
              <div className="text-center">
                <span className="font-serif text-3xl font-normal text-[#1A1A1A] block leading-none">
                  4.9
                </span>
                <div className="flex text-[#1A1A1A] mt-1">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="border-l border-[#1A1A1A]/10 pl-3 text-xs text-[#1A1A1A]">
                <p className="font-semibold text-[#1A1A1A]">850+ Verified Reviews</p>
                <p className="text-[#666666] font-light">Top 1% Conservatory Cafe</p>
              </div>
            </div>

            <button
              type="button"
              id="write-review-btn"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filterTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                activeTag === tag
                  ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#EAE7E2] border-[#1A1A1A]/15'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map(rev => (
            <motion.div
              key={rev.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 border border-[#1A1A1A]/15 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1A1A1A] transition-all"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 object-cover border border-[#1A1A1A]/20"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif font-normal text-base text-[#1A1A1A]">{rev.name}</h4>
                        {rev.verifiedVisit && (
                          <CheckCircle className="w-3.5 h-3.5 text-[#1A1A1A]" title="Verified Visitor" />
                        )}
                      </div>
                      <p className="text-xs text-[#666666] font-light">{rev.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex text-[#1A1A1A]">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#888888] mt-0.5 block">{rev.date}</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm text-[#444444] leading-relaxed italic font-serif">
                  "{rev.comment}"
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1 text-[#1A1A1A] font-medium">
                  <Heart className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Favorite: <strong className="font-semibold">{rev.favoriteDish}</strong></span>
                </div>

                <div className="flex gap-1">
                  {rev.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-[#F5F2ED] text-[#1A1A1A] text-[10px] uppercase tracking-wider border border-[#1A1A1A]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Community Highlight Banner */}
        <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 border border-[#1A1A1A] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] border border-white/20 flex items-center justify-center text-pink-400 shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-normal text-white">
                  Join Our Garden Community on Instagram
                </span>
                <span className="px-2 py-0.5 bg-white/10 text-[#C2BDAF] text-[10px] uppercase font-bold tracking-wider">
                  @cafe_hidden_garden_
                </span>
              </div>
              <p className="text-xs text-[#888888] font-light max-w-xl">
                Tag your cozy coffee moments, brunch dates, and waffle treats with <strong className="text-white">#CafeHiddenGarden</strong> for a chance to be featured in our monthly botanical Gazette!
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/cafe_hidden_garden_/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Follow @cafe_hidden_garden_</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#666666]" />
          </a>
        </div>

      </div>

      {/* Write Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div id="review-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              id="review-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] shadow-2xl overflow-hidden"
            >
              <div className="bg-[#1A1A1A] text-white p-6 relative border-b border-[#1A1A1A]">
                <button
                  id="close-review-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="font-serif text-2xl font-normal">Share Your Garden Experience</h3>
                <p className="text-xs text-[#C2BDAF] mt-1 font-light">We cherish feedback from our guests & coffee lovers.</p>
              </div>

              <form onSubmit={handleSubmitReview} className="p-6 space-y-4">
                {/* Rating selection */}
                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                    Your Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1.5 text-[#1A1A1A] hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-current' : 'text-stone-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="review-author" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Your Name *
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    required
                    value={reviewerName}
                    onChange={e => setReviewerName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label htmlFor="review-dish" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Favorite Dish / Drink Ordered
                  </label>
                  <input
                    id="review-dish"
                    type="text"
                    value={favoriteDish}
                    onChange={e => setFavoriteDish(e.target.value)}
                    placeholder="e.g. Wild Lavender Latte & Pistachio Cruffin"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label htmlFor="review-experience" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Your Review / Garden Notes *
                  </label>
                  <textarea
                    id="review-experience"
                    required
                    rows={3}
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Tell others about the coffee, greenhouse ambiance, service, and atmosphere..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="pt-2 border-t border-[#1A1A1A]/10 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#666666] hover:bg-[#EAE7E2] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="submit-user-review-btn"
                    className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
