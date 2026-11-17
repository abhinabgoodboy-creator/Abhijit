import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Shirt,
  Sparkles,
  MessageCircle,
  PackageCheck,
  Truck,
  Eye,
  ArrowRight,
  Scissors,
} from 'lucide-react';
import { RoutePath } from '../types';

interface AboutSectionProps {
  onNavigate: (path: RoutePath) => void;
  showMainHeadingAsH1?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  showMainHeadingAsH1 = false,
}) => {
  const categories = [
    {
      name: 'Blouse Designs',
      desc: 'Explore front blouse designs, back blouse designs, Bengali blouse designs, and custom blouse stitching options tailored to your preferred look.',
    },
    {
      name: 'Sarees',
      desc: 'Browse curated saree collections in the NAXALBLOUSE clothing app, ready to pair with matching blouse stitching services.',
    },
    {
      name: 'Kurtis',
      desc: 'Discover everyday and festive kurti styles with clear product details and simple ordering for Naxalbari shoppers.',
    },
    {
      name: 'Kurtas',
      desc: 'View classic and seasonal kurta designs available for browsing and direct order inquiries.',
    },
    {
      name: 'Shirts',
      desc: 'Browse casual and formal shirt styles within the same convenient Android clothing application.',
    },
    {
      name: 'Jeans',
      desc: 'Explore everyday denim and jeans options alongside ethnic and tailored apparel.',
    },
  ];

  const appFeatures = [
    {
      icon: Eye,
      title: 'Clothing Design Browsing',
      desc: 'Browse organized collections across blouses, sarees, kurtis, kurtas, shirts, and jeans from your Android phone.',
    },
    {
      icon: Shirt,
      title: 'Clear Product Details',
      desc: 'Inspect item information, design previews, and clothing specifications before placing an order.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp-Based Ordering',
      desc: 'Place your blouse or clothing order easily through built-in WhatsApp ordering without complicated checkout forms.',
    },
    {
      icon: PackageCheck,
      title: 'Customer Order Information',
      desc: 'Share accurate customer order details and stitching preferences clearly so your order is handled properly.',
    },
    {
      icon: Truck,
      title: 'Delivery-Related Information',
      desc: 'Review local delivery details for Naxalbari, West Bengal (PIN 734429) and coordinate fulfillment directly.',
    },
    {
      icon: Scissors,
      title: 'Custom Blouse Stitching Focus',
      desc: 'Dedicated focus on local Naxalbari blouse stitching, front and back neck styles, and saree-and-blouse coordination.',
    },
  ];

  const HeadingTag = showMainHeadingAsH1 ? 'h1' : 'h2';

  return (
    <section id="about-naxalblouse" aria-labelledby="about-naxalblouse-heading" className="py-8 sm:py-12 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Part 2A: About NAXALBLOUSE */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="apple-glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/25 shadow-xl space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-300">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Naxalbari, West Bengal • PIN 734429</span>
            </div>
            <span className="text-xs text-zinc-400 font-mono">Official Brand Overview</span>
          </div>

          <HeadingTag
            id="about-naxalblouse-heading"
            className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text"
          >
            About NAXALBLOUSE
          </HeadingTag>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              <p>
                <strong className="text-amber-200 font-semibold">NAXALBLOUSE</strong> is a clothing-related Android
                application designed around clothing designs, custom blouse stitching, and clothing delivery services in{' '}
                <strong className="text-zinc-100 font-medium">Naxalbari, West Bengal, India (PIN 734429)</strong>.
              </p>
              <p>
                Its purpose is simple: instead of searching across multiple shops or saving scattered screenshots,
                people in Naxalbari and across West Bengal can open one dedicated mobile application to browse latest
                blouse designs, sarees, kurtis, kurtas, shirts, and jeans, view product details, and place an order
                directly on WhatsApp.
              </p>
              <p>
                Whether you are looking for Bengali blouse designs, custom front or back blouse stitching for an
                upcoming occasion, or convenient local clothing delivery in Naxalbari, the NAXALBLOUSE app brings
                design discovery and ordering together in one fast, easy-to-use Android experience.
              </p>
            </div>

            <div className="lg:col-span-5 apple-glass rounded-2xl p-5 border border-white/10 space-y-3 text-xs sm:text-sm">
              <h3 className="font-cinzel text-base font-bold text-amber-300">
                Who NAXALBLOUSE Is Built For
              </h3>
              <ul className="space-y-2.5 text-zinc-300">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Shoppers in Naxalbari (734429) seeking custom blouse designs and stitching services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Customers browsing women’s ethnic wear, sarees, and kurtis alongside men’s kurtas, shirts, and jeans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Android users who prefer fast product browsing paired with direct WhatsApp-based ordering.</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/download"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/download');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                >
                  <span>Download NAXALBLOUSE APK</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="/categories"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/categories');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-amber-200 underline underline-offset-4"
                >
                  <span>Explore all categories</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Part 2B: About the Android App - Categories & Implemented Features */}
        <div id="app-categories" className="space-y-6 scroll-mt-24">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
              Inside the NAXALBLOUSE Android Application
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
              Available Clothing Categories &amp; App Features
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
              Every category and tool listed below reflects the current features available inside the official NAXALBLOUSE Android app.
            </p>
          </div>

          {/* 6 Clothing Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="apple-glass rounded-2xl p-5 border border-white/10 hover:border-amber-400/35 transition-colors space-y-2"
              >
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-amber-200">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 6 Implemented Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="apple-glass-card rounded-2xl p-5 border border-amber-500/20 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-zinc-100">{feat.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
