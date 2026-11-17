import React from 'react';

interface BrandLogoProps {
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  alt,
  size = 'md',
  className = 'w-full h-full object-cover',
  priority = false,
}) => {
  const webpSrc = size === 'lg' ? '/naxal_beta_logo.webp' : '/naxal_beta_logo_192.webp';
  const dim = size === 'lg' ? 512 : 192;

  return (
    <picture className="w-full h-full block">
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src="/naxal_beta_logo.jpg"
        alt={alt}
        width={dim}
        height={dim}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
        referrerPolicy="no-referrer"
      />
    </picture>
  );
};
