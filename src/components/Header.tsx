import React from 'react';
import { motion } from 'motion/react';
import { Upload, Sparkles, ShieldCheck, Info } from 'lucide-react';
import { ApkPackage } from '../types';

interface HeaderProps {
  onOpenUpload: () => void;
  activeApk: ApkPackage;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenUpload, activeApk, onOpenAbout }) => {
  return (
    <header className="sticky top-0 z-40 w-full apple-glass border-b border-amber-500/20 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Top Left: Upload APK Button as specifically requested */}
        <div className="flex items-center gap-3">
          <motion.button
            id="header-upload-apk-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-700/30 hover:from-amber-500/30 hover:to-amber-600/40 text-amber-200 border border-amber-500/40 shadow-sm transition-all cursor-pointer"
            title="Upload custom APK file (e.g. naxal_debug_v1.apk) with name & description"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden xs:inline font-medium">Upload APK</span>
            <span className="xs:hidden">Upload</span>
            {activeApk.isCustomUpload && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Custom APK Active" />
            )}
          </motion.button>

          {/* Quick status pill */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-zinc-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Official Portal</span>
          </div>
        </div>

        {/* Center: Brand identity */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-amber-500/30 shadow-md bg-black shrink-0">
            <img
              src="/naxal_beta_logo.jpg"
              alt="NAXAL BLOUSE BETA Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to text if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider gold-gradient-text leading-tight">
              NAXAL BLOUSE
            </span>
            <span className="text-[10px] tracking-widest text-amber-400/90 font-mono uppercase">
              BETA SUITE
            </span>
          </div>
        </div>

        {/* Top Right: Actions & About Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-about-app-btn"
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-zinc-300 hover:text-amber-200 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">About App</span>
          </button>
          
          <a
            href="#installation-guide"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-zinc-300 hover:text-amber-200 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Install Guide</span>
          </a>

          <a
            href="#apk-download-section"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-400/40 hover:bg-amber-400/30 transition-all cursor-pointer"
          >
            Get APK
          </a>
        </div>
      </div>
    </header>
  );
};
