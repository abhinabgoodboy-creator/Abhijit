import React from 'react';
import { Home, Download, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { RoutePath } from '../types';

interface NotFoundPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <section aria-labelledby="not-found-heading" className="py-14 sm:py-20 px-4">
      <div className="max-w-2xl mx-auto apple-glass-card rounded-3xl p-8 sm:p-10 border border-amber-500/30 text-center space-y-6">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
          <AlertTriangle className="w-7 h-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Error 404 • Page Not Found
          </p>
          <h1 id="not-found-heading" className="font-cinzel text-3xl sm:text-4xl font-bold gold-gradient-text">
            This Page Could Not Be Found
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed font-light max-w-lg mx-auto">
            The URL you visited does not exist on the official NAXALBLOUSE website. Use one of the verified links below to download the NAXALBLOUSE Android APK or learn about the app.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="gold-button px-5 py-2.5 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>NAXALBLOUSE Home</span>
          </a>

          <a
            href="/download"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/download');
            }}
            className="px-5 py-2.5 rounded-xl border border-amber-400/40 bg-zinc-900/80 hover:bg-zinc-800 text-amber-200 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download NAXALBLOUSE APK</span>
          </a>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/about');
            }}
            className="inline-flex items-center gap-1 hover:text-amber-200 underline underline-offset-4"
          >
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>About NAXALBLOUSE</span>
          </a>
          <a
            href="/faq"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/faq');
            }}
            className="inline-flex items-center gap-1 hover:text-amber-200 underline underline-offset-4"
          >
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
