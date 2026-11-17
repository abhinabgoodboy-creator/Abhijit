import React from 'react';
import { ShieldCheck, Smartphone, Sparkles, FileCode2, MapPin } from 'lucide-react';
import { ApkPackage, RoutePath } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  activeApk: ApkPackage;
  onScrollToTop: () => void;
  onOpenUpload: () => void;
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({
  activeApk,
  onScrollToTop,
  onOpenUpload,
  onNavigate,
}) => {
  const internalLinks: { label: string; path: RoutePath }[] = [
    { label: 'NAXALBLOUSE Official Home', path: '/' },
    { label: 'Download NAXALBLOUSE APK', path: '/download' },
    { label: 'About NAXALBLOUSE', path: '/about' },
    { label: 'Clothing Categories & Features', path: '/categories' },
    { label: 'Android APK Installation Guide', path: '/install-guide' },
    { label: 'Frequently Asked Questions', path: '/faq' },
    { label: 'Contact & Naxalbari Location', path: '/contact' },
  ];

  return (
    <footer id="about-website-footer" className="mt-14 border-t border-amber-500/20 apple-glass pt-12 pb-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 bg-black shrink-0">
                <BrandLogo alt="NAXALBLOUSE Official Logo" size="sm" />
              </div>
              <div>
                <h2 className="font-cinzel text-lg font-bold gold-gradient-text leading-tight">
                  NAXALBLOUSE
                </h2>
                <span className="text-[10px] tracking-widest text-amber-400/90 font-mono uppercase">
                  Official APK Website
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              NAXALBLOUSE is a clothing-related Android application focused on blouse designs, custom blouse stitching, sarees, kurtis, kurtas, shirts, jeans, and WhatsApp-based delivery services in Naxalbari, West Bengal.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Naxalbari, West Bengal, India • PIN 734429</span>
            </div>
          </div>

          {/* Descriptive Internal Links */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-zinc-100 uppercase tracking-wider">
              Explore NAXALBLOUSE
            </h3>
            <ul className="space-y-2 text-xs">
              {internalLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.path);
                    }}
                    className="text-zinc-300 hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About This Portal & Download Integrity */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-zinc-100 uppercase tracking-wider">
              About This Portal
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This official website introduces the NAXALBLOUSE app and provides verified access to its Android APK package hosted on our official MediaFire link.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Official MediaFire download source</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>Optimized for Chrome on Android</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>
                  Active File: <span className="font-mono text-amber-200">{activeApk.filename}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* System Compatibility */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-zinc-100 uppercase tracking-wider">
              APK Compatibility
            </h3>
            <div className="apple-glass-card rounded-xl p-4 border border-white/10 space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between gap-2">
                <span className="text-zinc-500">App Name:</span>
                <span className="text-zinc-200 font-medium">NAXALBLOUSE</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-zinc-500">Android Target:</span>
                <span className="text-zinc-200 font-medium">8.0 to Android 15</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-zinc-500">File Size:</span>
                <span className="text-zinc-200 font-mono">{activeApk.fileSize}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-zinc-500">Distribution:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  Official APK
                </span>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenUpload}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Upload custom or debug APK build →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} NAXALBLOUSE. Official APK Download Website • Naxalbari, West Bengal 734429.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/download"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/download');
              }}
              className="text-zinc-300 hover:text-amber-300 transition-colors"
            >
              Download APK
            </a>
            <a
              href="/install-guide"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/install-guide');
              }}
              className="text-zinc-300 hover:text-amber-300 transition-colors"
            >
              Install Guide
            </a>
            <button
              type="button"
              onClick={onScrollToTop}
              className="text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
