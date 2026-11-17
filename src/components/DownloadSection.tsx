import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  HardDrive,
  ShieldCheck,
  ChevronRight,
  Lock,
  Sparkles,
  Check,
  ArrowDownToLine,
  Smartphone,
  Info,
} from 'lucide-react';
import { ApkPackage, RoutePath } from '../types';
import { triggerApkDownload } from '../utils/apkStorage';
import { BrandLogo } from './BrandLogo';

interface DownloadSectionProps {
  activeApk: ApkPackage;
  onCardClick: () => void;
  onDirectDownload: () => void;
  onNavigate?: (path: RoutePath) => void;
  showMainHeadingAsH1?: boolean;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  activeApk,
  onCardClick,
  onDirectDownload,
  onNavigate,
  showMainHeadingAsH1 = false,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadStarted(true);
    triggerApkDownload(activeApk);
    onDirectDownload();
    setTimeout(() => setDownloadStarted(false), 4000);
  };

  const HeadingTag = showMainHeadingAsH1 ? 'h1' : 'h2';

  return (
    <section
      id="apk-download-section"
      aria-labelledby="download-naxalblouse-heading"
      className="py-6 sm:py-10 px-4 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header (Exact heading requested in Part 2 C) */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
            Official Android Application Package
          </span>
          <HeadingTag
            id="download-naxalblouse-heading"
            className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text"
          >
            Download NAXALBLOUSE APK
          </HeadingTag>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Get the official <strong className="text-amber-200 font-medium">NAXALBLOUSE</strong> Android APK to browse blouse designs, sarees, kurtis, kurtas, shirts, and jeans, and place orders via WhatsApp in Naxalbari, West Bengal (PIN 734429).
          </p>
        </div>

        {/* PRIMARY HORIZONTAL APK DOWNLOAD CARD */}
        <motion.div
          id="naxal-blouse-apk-card"
          whileHover={{ scale: 1.015, y: -2 }}
          whileTap={{ scale: 0.99 }}
          onClick={onCardClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCardClick();
            }
          }}
          aria-label="NAXALBLOUSE APK download card. Click to choose between learning about the app or downloading the APK."
          className="relative group apple-glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-2xl cursor-pointer overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 relative z-10">
            {/* Left Side: Logo + Info */}
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* NAXALBLOUSE App Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-amber-400/40 bg-black/80 shadow-md shrink-0 flex items-center justify-center p-0.5 group-hover:border-amber-400 transition-colors">
                <BrandLogo
                  alt="NAXALBLOUSE Official Android App Logo"
                  size="sm"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                  APK
                </div>
              </div>

              {/* App Name & APK Filename */}
              <div className="min-w-0 text-left flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-zinc-100 group-hover:text-amber-200 transition-colors">
                    NAXALBLOUSE
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {activeApk.version}
                  </span>
                </div>

                {/* APK filename shown in smaller text */}
                <p className="text-xs sm:text-sm font-mono text-amber-300/90 tracking-wide mt-1 flex items-center gap-1.5 truncate">
                  <HardDrive className="w-3.5 h-3.5 text-zinc-400 shrink-0" aria-hidden="true" />
                  <span className="font-semibold underline decoration-amber-500/40">{activeApk.filename}</span>
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[11px] text-zinc-300">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span>Official Release</span>
                  </span>
                  <span aria-hidden="true">•</span>
                  <span>Size: {activeApk.fileSize}</span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-amber-400" aria-hidden="true" />
                    <span>Android 8.0–15</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Action Trigger */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
              {/* Direct Download Button */}
              <button
                id="apk-card-direct-download-btn"
                type="button"
                onClick={handleDownload}
                className="w-full sm:w-auto px-5 py-3 rounded-xl gold-button text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
                title="Download NAXALBLOUSE APK from official MediaFire mirror"
              >
                {downloadStarted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950 stroke-[3]" aria-hidden="true" />
                    <span>Opening MediaFire...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-zinc-950" aria-hidden="true" />
                    <span>Download App</span>
                  </>
                )}
              </button>

              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-300 group-hover:bg-amber-400/10 transition-colors">
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Interactive Hint Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 gap-2">
            <span className="flex items-center gap-1.5 text-amber-200/80">
              <Sparkles className="w-3 h-3 text-amber-400" aria-hidden="true" />
              <span>Click anywhere on card for quick choices (Learn about app / Download app)</span>
            </span>
            <span className="text-zinc-400">Official MediaFire Cloud Mirror • Google Chrome Ready</span>
          </div>
        </motion.div>

        {/* Technical Details & Download Safety Summary (Part 2C) */}
        <div className="apple-glass rounded-2xl p-5 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-zinc-400 uppercase font-mono text-[10px]">Official App Name</div>
            <div className="text-zinc-100 font-semibold mt-0.5">NAXALBLOUSE ({activeApk.name})</div>
          </div>
          <div>
            <div className="text-zinc-400 uppercase font-mono text-[10px]">Version &amp; File Size</div>
            <div className="text-amber-300 font-medium mt-0.5">{activeApk.version} • {activeApk.fileSize}</div>
          </div>
          <div>
            <div className="text-zinc-400 uppercase font-mono text-[10px]">Android Compatibility</div>
            <div className="text-zinc-100 font-medium mt-0.5">Android 8.0 Oreo to Android 15</div>
          </div>
          <div>
            <div className="text-zinc-400 uppercase font-mono text-[10px]">Download Safety</div>
            <div className="text-emerald-300 font-medium mt-0.5">Download only via this official link</div>
          </div>
        </div>

        {/* Descriptive Internal Links for Installation & Safety */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-300">
          <a
            href="/install-guide"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/install-guide');
              }
            }}
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            <Info className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Read step-by-step APK installation instructions</span>
          </a>
          <a
            href="/faq"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/faq');
              }
            }}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-amber-200 underline underline-offset-4"
          >
            <span>Check NAXALBLOUSE APK FAQs</span>
          </a>
        </div>

        {/* Preserved Reserved Blank Slot for Future Updates */}
        <div className="pt-2">
          <div className="apple-glass rounded-2xl p-5 sm:p-6 border border-zinc-800 text-center relative overflow-hidden bg-black/30">
            <div className="max-w-md mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-[11px] text-zinc-400">
                <Lock className="w-3 h-3 text-zinc-500" aria-hidden="true" />
                <span>Reserved Future Channel • Stable Branch</span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wide gold-gradient-text">
                NAXAL BLOUSE BETA
              </h3>

              <p className="text-xs font-mono text-zinc-400">
                Package Channel: <span className="text-zinc-300 font-semibold">naxal_blouse_v1.apk</span>
              </p>

              <div className="pt-2">
                <button
                  id="blank-nonfunctional-download-btn"
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full sm:w-72 mx-auto py-3 px-6 rounded-xl border border-zinc-700 bg-zinc-900/60 text-zinc-500 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed select-none opacity-80"
                  title="Blank slot preserved for upcoming future updates"
                >
                  <ArrowDownToLine className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                  <span>Download File (Future Update Channel)</span>
                </button>
                <p className="text-[11px] text-zinc-400 mt-2">
                  This blank slot remains non-functional for upcoming future APK updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
