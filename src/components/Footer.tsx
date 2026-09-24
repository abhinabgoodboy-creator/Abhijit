import React from 'react';
import { ShieldCheck, Download, Smartphone, Sparkles, Heart, FileCode2 } from 'lucide-react';
import { ApkPackage } from '../types';

interface FooterProps {
  activeApk: ApkPackage;
  onScrollToTop: () => void;
  onOpenUpload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activeApk, onScrollToTop, onOpenUpload }) => {
  return (
    <footer id="about-website-footer" className="mt-14 border-t border-amber-500/20 apple-glass pt-12 pb-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* About the Website & About NAXAL BLOUSE (Mandated in prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 bg-black shrink-0">
                <img
                  src="/naxal_beta_logo.jpg"
                  alt="NAXAL BLOUSE Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-cinzel text-lg font-bold gold-gradient-text leading-tight">
                  NAXAL BLOUSE
                </h4>
                <span className="text-[10px] tracking-widest text-amber-400/90 font-mono uppercase">
                  Official APK Distribution
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              NAXAL BLOUSE is an haute couture digital tailoring sanctuary designed specifically for bespoke ethnic blouses, bridal wear, and designer saree pairings. We bridge centuries of Indian artisan tailoring with modern anatomical fitting precision.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Beta Release Portal</span>
            </div>
          </div>

          {/* About The Portal & Download Integrity */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-sm font-bold text-zinc-100 uppercase tracking-wider">
              About This Portal
            </h5>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This official portal provides direct, verified access to the NAXAL BLOUSE Android APK package hosted securely on our official MediaFire cloud mirror. No unverified third-party app stores, no bundled adware, and zero tracker bloat.
            </p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Original cryptographic signature preserved</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Optimized for Google Chrome on Android</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Active Target: <span className="font-mono text-amber-200">{activeApk.filename}</span></span>
              </li>
            </ul>
          </div>

          {/* Quick Technical Specs & Upload Access */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-sm font-bold text-zinc-100 uppercase tracking-wider">
              System Compatibility
            </h5>
            <div className="apple-glass-card rounded-xl p-4 border border-white/10 space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Android Target:</span>
                <span className="text-zinc-200 font-medium">8.0 Oreo to Android 15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Architecture:</span>
                <span className="text-zinc-200 font-mono">arm64-v8a / armeabi-v7a</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Package Status:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Verified Authentic
                </span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenUpload}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Upload custom or debug APK build →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} NAXAL BLOUSE BETA. All rights reserved. Official Couture Android Studio.</p>
          <div className="flex items-center gap-4">
            <a href="#apk-download-section" className="text-zinc-400 hover:text-amber-300 transition-colors">
              Download APK
            </a>
            <a href="#installation-guide" className="text-zinc-400 hover:text-amber-300 transition-colors">
              Installation Guide
            </a>
            <button
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
