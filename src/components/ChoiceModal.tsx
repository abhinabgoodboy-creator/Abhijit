import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Download, ShieldCheck } from 'lucide-react';
import { ApkPackage } from '../types';
import { BrandLogo } from './BrandLogo';

interface ChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLearnAboutApp: () => void;
  onDownloadApp: () => void;
  activeApk: ApkPackage;
}

export const ChoiceModal: React.FC<ChoiceModalProps> = ({
  isOpen,
  onClose,
  onLearnAboutApp,
  onDownloadApp,
  activeApk,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="choice-modal-title"
        >
          {/* Backdrop blur with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Centered Choice Modal Card */}
          <motion.div
            id="choice-modal-card"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm sm:max-w-md apple-glass-modal rounded-2xl p-6 sm:p-8 text-center border border-amber-500/35 z-10 overflow-hidden"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              id="close-choice-modal-btn"
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close choice popup"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* App Emblem Mini */}
            <div className="mx-auto mb-4 w-14 h-14 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg bg-black/60 p-0.5">
              <BrandLogo
                alt="NAXALBLOUSE App Logo"
                size="sm"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3
              id="choice-modal-title"
              className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide gold-gradient-text mb-2"
            >
              What will you choose?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300/90 mb-6 font-light">
              Package: <span className="font-mono text-amber-300 font-semibold">{activeApk.filename}</span>
              <span className="block text-[11px] text-zinc-400 mt-0.5">
                Official NAXALBLOUSE MediaFire Package ({activeApk.fileSize})
              </span>
            </p>

            {/* Exactly two buttons */}
            <div className="space-y-3">
              <motion.button
                id="modal-learn-about-app-btn"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onLearnAboutApp();
                }}
                className="w-full py-3.5 px-5 rounded-xl border border-amber-400/40 bg-zinc-900/80 hover:bg-zinc-800/90 text-amber-200 font-medium text-sm flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Learn about app</span>
              </motion.button>

              <motion.button
                id="modal-download-app-btn"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onDownloadApp();
                  onClose();
                }}
                className="w-full py-3.5 px-5 rounded-xl gold-button text-sm font-semibold flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 text-zinc-950" aria-hidden="true" />
                <span>Download app</span>
              </motion.button>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Official MediaFire Cloud Mirror • Android 8.0–15</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
