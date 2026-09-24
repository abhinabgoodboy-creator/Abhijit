/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DownloadSection } from './components/DownloadSection';
import { InstallationGuide } from './components/InstallationGuide';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { ChoiceModal } from './components/ChoiceModal';
import { AboutAppModal } from './components/AboutAppModal';
import { UploadApkModal } from './components/UploadApkModal';
import { ApkPackage } from './types';
import { DEFAULT_APK, getActiveApk, triggerApkDownload } from './utils/apkStorage';
import { Download, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeApk, setActiveApk] = useState<ApkPackage>(DEFAULT_APK);
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Load persisted APK (either user uploaded or default)
    getActiveApk().then((apk) => {
      setActiveApk(apk);
    });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownload = () => {
    triggerApkDownload(activeApk);
    if (activeApk.downloadUrl.includes('mediafire')) {
      showToast(`Redirecting to official MediaFire page for ${activeApk.filename}`);
    } else {
      showToast(`Downloading ${activeApk.filename}. Check Chrome Downloads (⋮).`);
    }
  };

  const handleScrollToDownload = () => {
    const el = document.getElementById('apk-download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApkUpdated = (newApk: ApkPackage) => {
    setActiveApk(newApk);
    showToast(`${newApk.filename} is now active for downloads!`);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-amber-400 selection:text-black silk-weave-pattern relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Background Silk Wave Ambient Sheen */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Navigation Header (includes Upload APK at top left as requested) */}
        <Header
          onOpenUpload={() => setIsUploadModalOpen(true)}
          activeApk={activeApk}
          onOpenAbout={() => setIsAboutModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero with Centered App Name and Gold Logo */}
          <Hero onScrollToDownload={handleScrollToDownload} />

          {/* Prominent APK Download Section (Card + Modal Trigger + Non-functional blank slot) */}
          <DownloadSection
            activeApk={activeApk}
            onCardClick={() => setIsChoiceModalOpen(true)}
            onDirectDownload={handleDownload}
          />

          {/* Step-by-Step Installation Guide (Hindi, English, Bengali) */}
          <InstallationGuide />

          {/* App Features & Craftsmanship */}
          <FeaturesSection />
        </main>

        {/* Footer with About Website & Brand Info */}
        <Footer
          activeApk={activeApk}
          onScrollToTop={handleScrollToTop}
          onOpenUpload={() => setIsUploadModalOpen(true)}
        />
      </div>

      {/* Choice Modal: "What will you choose?" -> 1. Learn about app 2. Download app */}
      <ChoiceModal
        isOpen={isChoiceModalOpen}
        onClose={() => setIsChoiceModalOpen(false)}
        onLearnAboutApp={() => setIsAboutModalOpen(true)}
        onDownloadApp={handleDownload}
        activeApk={activeApk}
      />

      {/* About App Detailed Modal */}
      <AboutAppModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onDownload={handleDownload}
        activeApk={activeApk}
      />

      {/* Upload APK Modal (For user to upload naxal_debug_v1.apk or real APKs) */}
      <UploadApkModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        activeApk={activeApk}
        onApkUpdated={handleApkUpdated}
      />

      {/* Quick Download Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm apple-glass rounded-2xl p-4 border border-amber-400/40 shadow-2xl flex items-center gap-3 bg-zinc-950/95"
          >
            <div className="p-2 rounded-xl bg-amber-400 text-zinc-950 shrink-0">
              <Download className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Action Triggered</span>
              </p>
              <p className="text-[11px] text-zinc-400 truncate mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

