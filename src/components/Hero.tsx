import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, Smartphone } from 'lucide-react';

interface HeroProps {
  onScrollToDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDownload }) => {
  return (
    <section className="relative pt-8 pb-6 sm:pt-14 sm:pb-10 px-4 text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[540px] h-96 sm:h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Verification Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass border border-amber-500/30 text-xs text-amber-200 shadow-lg mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-medium tracking-wide">Official Android Release • Haute Couture Blouse Studio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </motion.div>

        {/* Central Logo with Apple-like Glass Card & Gold Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-6"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl p-1 apple-glass border border-amber-400/40 shadow-2xl overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/naxal_beta_logo.jpg"
              alt="NAXAL BLOUSE BETA Official Logo"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Prompt requirement: Centered app name NAXAL BLOUSE BETA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 mb-4"
        >
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider gold-gradient-text">
            NAXAL BLOUSE BETA
          </h1>
          <p className="text-sm sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            The haute couture Android application for bespoke blouse tailoring, precision body measurements, and luxury bridal embroidery.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400 mb-8"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Genuine Official APK</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span>Android 8.0 to Android 15 Ready</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Virus & Malware Scanned</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
