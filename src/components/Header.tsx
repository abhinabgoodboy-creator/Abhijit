import React from 'react';
import { motion } from 'motion/react';
import { Upload, ShieldCheck, Info, Download } from 'lucide-react';
import { ApkPackage, RoutePath } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenUpload: () => void;
  activeApk: ApkPackage;
  onOpenAbout: () => void;
  currentRoute: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenUpload,
  activeApk,
  onOpenAbout,
  currentRoute,
  onNavigate,
}) => {
  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Categories', path: '/categories' },
    { label: 'Install Guide', path: '/install-guide' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full apple-glass border-b border-amber-500/20 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Top Left: Upload APK Button (Preserved) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <motion.button
            id="header-upload-apk-btn"
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-700/30 hover:from-amber-500/30 hover:to-amber-600/40 text-amber-200 border border-amber-500/40 shadow-sm transition-all cursor-pointer"
            title="Upload custom APK file (e.g. naxal_debug_v1.apk) with name & description"
          >
            <Upload className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
            <span className="hidden sm:inline font-medium">Upload APK</span>
            <span className="sm:hidden">Upload</span>
            {activeApk.isCustomUpload && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Custom APK Active" />
            )}
          </motion.button>

          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-zinc-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" aria-hidden="true" />
            <span>Naxalbari 734429</span>
          </div>
        </div>

        {/* Center: Official NAXALBLOUSE Brand Identity */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="NAXALBLOUSE Official Home"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-amber-500/30 shadow-md bg-black shrink-0">
            <BrandLogo alt="NAXALBLOUSE Official App Logo" size="sm" priority />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider gold-gradient-text leading-tight">
              NAXALBLOUSE
            </span>
            <span className="text-[10px] tracking-widest text-amber-400/90 font-mono uppercase">
              NAXAL BLOUSE BETA
            </span>
          </div>
        </a>

        {/* Desktop Primary Navigation */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-200 border border-amber-400/30'
                    : 'text-zinc-300 hover:text-amber-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Top Right: Quick Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="nav-about-app-btn"
            type="button"
            onClick={onOpenAbout}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-zinc-300 hover:text-amber-200 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>App Info</span>
          </button>

          <a
            href="/download"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/download');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-400/40 hover:bg-amber-400/30 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download APK</span>
          </a>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Strip */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden mt-2 pt-2 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar"
      >
        {navLinks.map((item) => {
          const isActive = currentRoute === item.path;
          return (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.path);
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-amber-400/20 text-amber-200 border border-amber-400/30'
                  : 'text-zinc-300 bg-white/5 hover:text-amber-200'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
