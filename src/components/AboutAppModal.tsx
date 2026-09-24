import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Scissors, ShieldCheck, Download, CheckCircle2, Ruler } from 'lucide-react';
import { ApkPackage } from '../types';

interface AboutAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  activeApk: ApkPackage;
}

export const AboutAppModal: React.FC<AboutAppModalProps> = ({
  isOpen,
  onClose,
  onDownload,
  activeApk,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
          />

          {/* Modal Container */}
          <motion.div
            id="about-app-modal-container"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl apple-glass-modal rounded-3xl p-6 sm:p-8 border border-amber-500/35 z-10 my-auto shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-72 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with App Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-amber-400/40 bg-black shrink-0 p-0.5 shadow-xl">
                <img
                  src="/naxal_beta_logo.jpg"
                  alt="NAXAL BLOUSE"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                    NAXAL BLOUSE BETA
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {activeApk.version}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-0.5">
                  Bespoke Haute Couture Blouse Atelier & Master Tailoring Companion
                </p>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 mt-1.5">
                  <span className="text-amber-300 font-mono">{activeApk.filename}</span>
                  <span>•</span>
                  <span>{activeApk.fileSize}</span>
                </div>
              </div>
            </div>

            {/* App Overview Paragraph */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed font-light mb-6">
              <p>
                <strong className="text-amber-200 font-medium">NAXAL BLOUSE</strong> is handcrafted for fashion-conscious women, boutique owners, bridal stylists, and master tailors across India and worldwide. It solves the perennial challenge of blouse fitting by unifying precise anatomical body metrics with live silhouette simulation.
              </p>
              <p>
                Whether crafting an ornate wedding blouse with heavy zardosi handwork or an elegant handloom piece with a contemporary boat neck, NAXAL calculates seam allowances, shoulder drops, and cup fullness to eliminate shoulder slipping and underarm puckering.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <Scissors className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">120+ Neckline Patterns</h4>
                  <p className="text-[11px] text-zinc-400">Princess cut, high neck, deep V, halter, sweetheart, square back, and asymmetrical cuts.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <Ruler className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">14 Precision Checkpoints</h4>
                  <p className="text-[11px] text-zinc-400">Guaranteed fit from bust circumference to apex-to-apex distance and armhole depth.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">Bridal Maggam Studio</h4>
                  <p className="text-[11px] text-zinc-400">Virtual placement of bullion threads, stones, pearls, and custom couple monograms.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">Offline-First Privacy</h4>
                  <p className="text-[11px] text-zinc-400">Client body measurements stay strictly on your device without unsolicited sync.</p>
                </div>
              </div>
            </div>

            {/* Verification checklist */}
            <div className="mb-6 py-3 px-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Clean Package • Compatible with Chrome on Android</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-300 hidden sm:inline">SHA-256 OK</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                id="about-modal-start-download-btn"
                onClick={() => {
                  onDownload();
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl gold-button text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 text-zinc-950" />
                <span>Download {activeApk.filename} Now</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
