import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../utils/seo';
import { RoutePath } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: RoutePath) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-6 pb-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="text-amber-300 font-medium">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path);
                  }}
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-200 transition-colors"
                >
                  {idx === 0 && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
