import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Scissors, ShoppingBag, MessageCircle, MapPin, Download, CheckCircle2 } from 'lucide-react';
import { ApkPackage } from '../types';
import { BrandLogo } from './BrandLogo';

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
        >
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
            <div className="absolute top-0 right-1/4 w-72 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close about NAXALBLOUSE popup"
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Header with App Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-amber-400/40 bg-black shrink-0 p-0.5 shadow-xl">
                <BrandLogo
                  alt="NAXALBLOUSE Official Android App Logo"
                  size="sm"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 id="about-modal-title" className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                    NAXALBLOUSE
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {activeApk.version}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-0.5">
                  Clothing Designs, Custom Blouse Stitching &amp; Delivery App • Naxalbari, West Bengal
                </p>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 mt-1.5">
                  <span className="text-amber-300 font-mono">{activeApk.filename}</span>
                  <span>•</span>
                  <span>{activeApk.fileSize}</span>
                </div>
              </div>
            </div>

            {/* App Overview */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300 space-y-2.5 leading-relaxed font-light mb-6">
              <p>
                <strong className="text-amber-200 font-medium">NAXALBLOUSE</strong> is an official Android clothing application built for shoppers and tailoring customers in{' '}
                <strong className="text-zinc-100 font-medium">Naxalbari, West Bengal, India (PIN 734429)</strong>.
              </p>
              <p>
                Inside the app, you can browse clothing designs across Blouse designs, Sarees, Kurtis, Kurtas, Shirts, and Jeans, review product details, share customer order information, and place orders directly via WhatsApp with local delivery support.
              </p>
            </div>

            {/* Real Implemented Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <Scissors className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">Blouse Designs &amp; Stitching</h4>
                  <p className="text-[11px] text-zinc-400">Browse front blouse designs, back blouse designs, Bengali styles, and custom blouse stitching options.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">6 Clothing Categories</h4>
                  <p className="text-[11px] text-zinc-400">Browse Blouse designs, Sarees, Kurtis, Kurtas, Shirts, and Jeans with clear product details.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">WhatsApp-Based Ordering</h4>
                  <p className="text-[11px] text-zinc-400">Send customer order information and selected clothing designs directly through WhatsApp.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 mb-0.5">Naxalbari Delivery Service</h4>
                  <p className="text-[11px] text-zinc-400">Delivery-related information and service tailored for Naxalbari, West Bengal (PIN 734429).</p>
                </div>
              </div>
            </div>

            {/* Verification checklist */}
            <div className="mb-6 py-3 px-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Official APK Release • Compatible with Chrome on Android (8.0–15)</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-300 hidden sm:inline">MediaFire Verified</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                id="about-modal-start-download-btn"
                type="button"
                onClick={() => {
                  onDownload();
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl gold-button text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 text-zinc-950" aria-hidden="true" />
                <span>Download {activeApk.filename}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
