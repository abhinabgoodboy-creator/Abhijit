import React from 'react';
import { MapPin, MessageCircle, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';

interface ContactSectionProps {
  onNavigate: (path: RoutePath) => void;
  showMainHeadingAsH1?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigate,
  showMainHeadingAsH1 = false,
}) => {
  const HeadingTag = showMainHeadingAsH1 ? 'h1' : 'h2';

  return (
    <section id="contact-location" aria-labelledby="contact-location-heading" className="py-8 sm:py-12 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="apple-glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/25 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
                Official Service Area &amp; Support
              </span>
              <HeadingTag
                id="contact-location-heading"
                className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text"
              >
                Contact &amp; Location
              </HeadingTag>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Official NAXALBLOUSE Portal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Approved Location */}
            <div className="apple-glass rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-300">
                <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100">
                  Service Location
                </h3>
              </div>
              <dl className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <div className="flex justify-between gap-4 py-1.5 border-b border-white/5">
                  <dt className="text-zinc-400">Brand / App:</dt>
                  <dd className="font-semibold text-amber-200">NAXALBLOUSE</dd>
                </div>
                <div className="flex justify-between gap-4 py-1.5 border-b border-white/5">
                  <dt className="text-zinc-400">Town / Region:</dt>
                  <dd className="font-medium text-zinc-100">Naxalbari, West Bengal, India</dd>
                </div>
                <div className="flex justify-between gap-4 py-1.5">
                  <dt className="text-zinc-400">PIN Code:</dt>
                  <dd className="font-mono font-semibold text-amber-300">734429</dd>
                </div>
              </dl>
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                NAXALBLOUSE serves clothing design browsing, custom blouse stitching, and clothing delivery requests in Naxalbari, West Bengal (734429).
              </p>
            </div>

            {/* In-App WhatsApp Ordering & Contact */}
            <div className="apple-glass rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-300">
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100">
                  How to Reach NAXALBLOUSE
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Orders, stitching inquiries, and delivery coordination are handled directly through the{' '}
                <strong className="text-amber-200 font-medium">WhatsApp-based ordering</strong> feature built inside the
                official NAXALBLOUSE Android application.
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-400 flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Always verify that you download the NAXALBLOUSE APK only from this official website and its verified MediaFire download page.
                </span>
              </div>
              <div className="pt-1 flex flex-wrap gap-4 text-xs">
                <a
                  href="/download"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/download');
                  }}
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4"
                >
                  <span>Download NAXALBLOUSE APK</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="/faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/faq');
                  }}
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-amber-200 font-medium underline underline-offset-4"
                >
                  <span>Read Order &amp; Delivery FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
