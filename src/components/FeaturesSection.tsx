import React from 'react';
import { motion } from 'motion/react';
import { Scissors, ShoppingBag, MessageCircle, ClipboardList, Truck, Sparkles, Award, Eye } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Scissors,
      title: 'Front & Back Blouse Designs',
      desc: 'Browse curated front blouse designs, back blouse designs, Bengali blouse styles, and custom blouse stitching options in one place.',
      badge: 'Blouse Designs',
    },
    {
      icon: ShoppingBag,
      title: 'Sarees, Kurtis & Ethnic Wear',
      desc: 'Explore women’s clothing designs including Sarees and Kurtis alongside Kurtas, Shirts, and Jeans inside the NAXALBLOUSE app.',
      badge: '6 Categories',
    },
    {
      icon: Eye,
      title: 'Design Browsing & Product Details',
      desc: 'View clear clothing design previews and essential product details directly from your Android phone before placing an order.',
      badge: 'Easy Browsing',
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp-Based Ordering',
      desc: 'Connect smoothly from product browsing to WhatsApp ordering so you can confirm designs, sizes, and stitching preferences easily.',
      badge: 'WhatsApp Order',
    },
    {
      icon: ClipboardList,
      title: 'Customer Order Information',
      desc: 'Submit your customer order details clearly when booking a custom blouse stitching job or selecting ready-to-order clothing.',
      badge: 'Clear Order Info',
    },
    {
      icon: Truck,
      title: 'Naxalbari Clothing Delivery',
      desc: 'Designed for local shoppers in Naxalbari, West Bengal (PIN 734429) with transparent delivery-related information for orders.',
      badge: 'PIN 734429',
    },
  ];

  return (
    <section id="features-section" aria-labelledby="features-section-heading" className="py-8 sm:py-14 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clothing Designs, Stitching &amp; Local Delivery</span>
          </div>
          <h2 id="features-section-heading" className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text">
            Why Choose the NAXALBLOUSE App
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Built for shoppers and tailoring customers in Naxalbari and West Bengal who want simple clothing design browsing, custom blouse stitching, and direct WhatsApp ordering.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="apple-glass-card rounded-2xl sm:rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group hover:shadow-amber-500/10 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100 mb-2 group-hover:text-amber-200 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-amber-400/80 font-medium">
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  <span>Available in NAXALBLOUSE Android App</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Honest Summary Strip (No fabricated statistics) */}
        <div className="apple-glass rounded-2xl p-5 sm:p-6 border border-amber-500/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg sm:text-xl font-cinzel font-bold text-amber-300">6 Categories</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Blouse, Saree, Kurti, Kurta, Shirt, Jeans</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-cinzel font-bold text-amber-300">WhatsApp</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Direct Order Placement</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-cinzel font-bold text-amber-300">Naxalbari</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">West Bengal • PIN 734429</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-cinzel font-bold text-amber-300">Android APK</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Official Direct Download</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
