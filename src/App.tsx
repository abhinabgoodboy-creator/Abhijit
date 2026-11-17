/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DownloadSection } from './components/DownloadSection';
import { AboutSection } from './components/AboutSection';
import { InstallationGuide } from './components/InstallationGuide';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { NotFoundPage } from './components/NotFoundPage';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { ChoiceModal } from './components/ChoiceModal';
import { AboutAppModal } from './components/AboutAppModal';
import { UploadApkModal } from './components/UploadApkModal';
import { ApkPackage, RoutePath } from './types';
import { DEFAULT_APK, getActiveApk, triggerApkDownload } from './utils/apkStorage';
import { ROUTE_SEO, applyPageSeo, normalizePathname } from './utils/seo';
import { Download, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeApk, setActiveApk] = useState<ApkPackage>(DEFAULT_APK);
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() =>
    normalizePathname(typeof window !== 'undefined' ? window.location.pathname : '/')
  );
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    getActiveApk().then((apk) => {
      setActiveApk(apk);
    });
  }, []);

  useEffect(() => {
    applyPageSeo(currentRoute);
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path: RoutePath) => {
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleDownloadToastOnly = () => {
    if (activeApk.downloadUrl.includes('mediafire')) {
      showToast(`Redirecting to official MediaFire page for ${activeApk.filename}`);
    } else {
      showToast(`Downloading ${activeApk.filename}. Check Chrome Downloads (⋮).`);
    }
  };

  const handleScrollToDownload = () => {
    if (currentRoute !== '/' && currentRoute !== '/download') {
      navigateTo('/download');
      return;
    }
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

  const renderMainContent = () => {
    switch (currentRoute) {
      case '/download':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/download'].breadcrumbs} onNavigate={navigateTo} />
            <DownloadSection
              activeApk={activeApk}
              onCardClick={() => setIsChoiceModalOpen(true)}
              onDirectDownload={handleDownloadToastOnly}
              onNavigate={navigateTo}
              showMainHeadingAsH1
            />
            <InstallationGuide />
          </>
        );

      case '/about':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/about'].breadcrumbs} onNavigate={navigateTo} />
            <AboutSection onNavigate={navigateTo} showMainHeadingAsH1 />
            <DownloadSection
              activeApk={activeApk}
              onCardClick={() => setIsChoiceModalOpen(true)}
              onDirectDownload={handleDownloadToastOnly}
              onNavigate={navigateTo}
            />
          </>
        );

      case '/categories':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/categories'].breadcrumbs} onNavigate={navigateTo} />
            <section className="pt-4 pb-2 px-4 text-center max-w-4xl mx-auto space-y-2">
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text">
                NAXALBLOUSE Clothing Categories &amp; Features
              </h1>
              <p className="text-xs sm:text-sm text-zinc-300 font-light">
                Explore blouse designs, sarees, kurtis, kurtas, shirts, jeans, product details, and WhatsApp-based ordering available in the NAXALBLOUSE Android app.
              </p>
            </section>
            <FeaturesSection />
            <AboutSection onNavigate={navigateTo} />
          </>
        );

      case '/install-guide':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/install-guide'].breadcrumbs} onNavigate={navigateTo} />
            <InstallationGuide showMainHeadingAsH1 />
            <DownloadSection
              activeApk={activeApk}
              onCardClick={() => setIsChoiceModalOpen(true)}
              onDirectDownload={handleDownloadToastOnly}
              onNavigate={navigateTo}
            />
          </>
        );

      case '/faq':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/faq'].breadcrumbs} onNavigate={navigateTo} />
            <FaqSection onNavigate={navigateTo} showMainHeadingAsH1 />
            <ContactSection onNavigate={navigateTo} />
          </>
        );

      case '/contact':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/contact'].breadcrumbs} onNavigate={navigateTo} />
            <ContactSection onNavigate={navigateTo} showMainHeadingAsH1 />
            <FaqSection onNavigate={navigateTo} />
          </>
        );

      case '/404':
        return (
          <>
            <Breadcrumbs items={ROUTE_SEO['/404'].breadcrumbs} onNavigate={navigateTo} />
            <NotFoundPage onNavigate={navigateTo} />
          </>
        );

      case '/':
      default:
        return (
          <>
            <Hero onScrollToDownload={handleScrollToDownload} onNavigate={navigateTo} />
            <DownloadSection
              activeApk={activeApk}
              onCardClick={() => setIsChoiceModalOpen(true)}
              onDirectDownload={handleDownloadToastOnly}
              onNavigate={navigateTo}
            />
            <AboutSection onNavigate={navigateTo} />
            <FeaturesSection />
            <InstallationGuide />
            <FaqSection onNavigate={navigateTo} />
            <ContactSection onNavigate={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-amber-400 selection:text-black silk-weave-pattern relative overflow-x-hidden flex flex-col justify-between">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-400 focus:text-black focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Background Silk Wave Ambient Sheen */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <Header
          onOpenUpload={() => setIsUploadModalOpen(true)}
          activeApk={activeApk}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          currentRoute={currentRoute}
          onNavigate={navigateTo}
        />

        <main id="main-content" className="flex-1">
          {renderMainContent()}
        </main>

        <Footer
          activeApk={activeApk}
          onScrollToTop={handleScrollToTop}
          onOpenUpload={() => setIsUploadModalOpen(true)}
          onNavigate={navigateTo}
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

      {/* Upload APK Modal */}
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
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 max-w-sm apple-glass rounded-2xl p-4 border border-amber-400/40 shadow-2xl flex items-center gap-3 bg-zinc-950/95"
          >
            <div className="p-2 rounded-xl bg-amber-400 text-zinc-950 shrink-0">
              <Download className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Download Initiated</span>
              </p>
              <p className="text-[11px] text-zinc-400 truncate mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
