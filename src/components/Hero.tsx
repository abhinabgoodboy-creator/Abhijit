import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, Smartphone, Download, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { RoutePath } from '../types';

interface HeroProps {
  onScrollToDownload: () => void;
  onNavigate: (path: RoutePath) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDownload, onNavigate }) => {
  return (
    <section className="relative pt-8 pb-6 sm:pt-12 sm:pb-10 px-4 text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[540px] h-96 sm:h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Official Identity Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass border border-amber-500/30 text-xs text-amber-200 shadow-lg mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
          <span className="font-medium tracking-wide">
            Official NAXALBLOUSE Website • Naxalbari, West Bengal 734429
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </motion.div>

        {/* Central Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-6"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl p-1 apple-glass border border-amber-400/40 shadow-2xl overflow-hidden bg-black flex items-center justify-center">
            <BrandLogo
              alt="NAXALBLOUSE Official Android App Logo — NAXAL BLOUSE BETA"
              size="lg"
              priority
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Centered H1 + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-3 mb-6"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-amber-300">
            NAXAL BLOUSE BETA • Official Android App
          </p>
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider gold-gradient-text">
            NAXALBLOUSE
          </h1>
          <p className="text-sm sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            The official Android clothing application for blouse designs, custom blouse stitching, sarees, kurtis, kurtas, shirts, jeans, and WhatsApp-based delivery services in Naxalbari, West Bengal.
          </p>
        </motion.div>

        {/* Primary Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-7">
          <button
            type="button"
            onClick={onScrollToDownload}
            className="gold-button px-6 py-3 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download NAXALBLOUSE APK</span>
          </button>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/about');
            }}
            className="px-5 py-3 rounded-xl border border-amber-400/35 bg-white/5 hover:bg-white/10 text-amber-200 text-xs sm:text-sm font-medium transition-colors"
          >
            Learn About NAXALBLOUSE
          </a>
        </div>

        {/* Truthful Verification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-zinc-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Official MediaFire APK Link</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Android 8.0 to Android 15</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>Naxalbari, West Bengal (734429)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Shield className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>Direct WhatsApp Ordering</span>
          </div>
        </div>
      </div>
    </section>
  );
};
