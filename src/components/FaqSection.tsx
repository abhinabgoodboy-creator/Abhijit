import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { NAXALBLOUSE_FAQS } from '../utils/seo';
import { RoutePath } from '../types';

interface FaqSectionProps {
  onNavigate: (path: RoutePath) => void;
  showMainHeadingAsH1?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onNavigate,
  showMainHeadingAsH1 = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const HeadingTag = showMainHeadingAsH1 ? 'h1' : 'h2';

  return (
    <section id="faq-section" aria-labelledby="faq-section-heading" className="py-8 sm:py-12 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-300">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Answers About NAXALBLOUSE</span>
          </div>
          <HeadingTag
            id="faq-section-heading"
            className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text"
          >
            Frequently Asked Questions
          </HeadingTag>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Clear, accurate information about downloading the NAXALBLOUSE Android APK, clothing categories, WhatsApp ordering, and delivery in Naxalbari, West Bengal.
          </p>
        </div>

        <div className="space-y-3">
          {NAXALBLOUSE_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;
            return (
              <div
                key={item.question}
                className="apple-glass rounded-2xl border border-white/10 hover:border-amber-500/30 transition-colors overflow-hidden"
              >
                <h3 className="text-sm sm:text-base font-medium">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-zinc-100 hover:text-amber-200 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-white/5 pt-3"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
          <a
            href="/download"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/download');
            }}
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium underline underline-offset-4"
          >
            <span>Go to Download NAXALBLOUSE APK</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href="/install-guide"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/install-guide');
            }}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-amber-200 font-medium underline underline-offset-4"
          >
            <span>Read APK Installation Guide</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
