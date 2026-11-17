import { RoutePath } from '../types';
import { OFFICIAL_MEDIAFIRE_URL } from './apkStorage';

export const PRODUCTION_BASE_URL = 'https://ais-pre-hwlv2ovcqdvgzq45uhq2ux-712805070486.asia-east1.run.app';

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAXALBLOUSE_FAQS: FaqItem[] = [
  {
    question: 'What is NAXALBLOUSE?',
    answer:
      'NAXALBLOUSE is an Android clothing and tailoring application focused on clothing designs, custom blouse stitching, and clothing delivery services for customers in Naxalbari, West Bengal, India (PIN 734429).',
  },
  {
    question: 'Where is NAXALBLOUSE available?',
    answer:
      'NAXALBLOUSE serves customers in Naxalbari, West Bengal, India (PIN code 734429) and nearby surrounding areas in the Darjeeling district for clothing browsing, blouse stitching orders, and delivery.',
  },
  {
    question: 'How can I download the NAXALBLOUSE Android app?',
    answer:
      'You can download the official NAXALBLOUSE Android APK (NAXAL_BLOUSE_1.00_BETA_.apk, 18.4 MB) directly from the "Download NAXALBLOUSE APK" section on this official website, which links to our verified MediaFire cloud mirror.',
  },
  {
    question: 'Is NAXALBLOUSE available for Android?',
    answer:
      'Yes. NAXALBLOUSE is built for Android devices (Android 8.0 Oreo through Android 15) and can be installed using the official APK package provided on this website.',
  },
  {
    question: 'How do I install the NAXALBLOUSE APK?',
    answer:
      'Tap "Download App" on this website, then tap the blue DOWNLOAD button on the MediaFire page. If Chrome asks for confirmation ("Download anyway"), allow it. Once downloaded, open Chrome menu (⋮) → Downloads, tap NAXAL_BLOUSE_1.00_BETA_.apk, permit Chrome to install apps if prompted, and tap Install.',
  },
  {
    question: 'What clothing categories are available?',
    answer:
      'Inside the NAXALBLOUSE Android application, users can browse Blouse designs (including front blouse designs, back blouse designs, and Bengali or custom blouse styles), Sarees, Kurtis, Kurtas, Shirts, and Jeans.',
  },
  {
    question: 'How can I place an order?',
    answer:
      'Open the NAXALBLOUSE app, browse clothing designs or garments, review the product details, and tap the WhatsApp-based ordering option to send your selected item and customer order information directly.',
  },
  {
    question: 'How does WhatsApp ordering work?',
    answer:
      'When you choose an item or blouse design inside the NAXALBLOUSE app, the app helps prepare your product details, customer order information, and delivery details so you can confirm your order conveniently via WhatsApp.',
  },
  {
    question: 'How can I contact NAXALBLOUSE?',
    answer:
      'Customers in Naxalbari, West Bengal (PIN 734429) can reach NAXALBLOUSE through the WhatsApp-based ordering and order support flow built into the Android application. Please visit the Contact & Location section on this official website for service area details.',
  },
  {
    question: 'Is the NAXALBLOUSE APK available on Google Play?',
    answer:
      'No. Currently, NAXALBLOUSE is not published on the Google Play Store. The official NAXALBLOUSE Android app (NAXAL_BLOUSE_1.00_BETA_.apk) is distributed exclusively through this official website and its linked MediaFire download page.',
  },
];

export interface BreadcrumbItem {
  label: string;
  path: RoutePath;
}

export interface RouteSeoConfig {
  path: RoutePath;
  title: string;
  description: string;
  robots: string;
  breadcrumbs: BreadcrumbItem[];
  heading: string;
}

export const ROUTE_SEO: Record<RoutePath, RouteSeoConfig> = {
  '/': {
    path: '/',
    title: 'NAXALBLOUSE Official APK Download | Clothing & Blouse App',
    description:
      'Download the official NAXALBLOUSE Android APK (NAXAL_BLOUSE_1.00_BETA_.apk). Browse blouse designs, sarees, kurtis, kurtas, shirts & jeans with WhatsApp ordering in Naxalbari, West Bengal 734429.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [{ label: 'Home', path: '/' }],
    heading: 'NAXALBLOUSE',
  },
  '/download': {
    path: '/download',
    title: 'Download NAXALBLOUSE APK for Android | Official Release',
    description:
      'Get the official NAXALBLOUSE APK (NAXAL_BLOUSE_1.00_BETA_.apk, 18.4 MB) for Android 8.0 to 15. Safe MediaFire download link, version info, and Android Chrome install steps.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Download NAXALBLOUSE APK', path: '/download' },
    ],
    heading: 'Download NAXALBLOUSE APK',
  },
  '/about': {
    path: '/about',
    title: 'About NAXALBLOUSE | Clothing, Stitching & Delivery App',
    description:
      'Learn what NAXALBLOUSE offers: custom blouse designs, stitching services, sarees, kurtis, kurtas, shirts, jeans, and local clothing delivery in Naxalbari, West Bengal 734429.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'About NAXALBLOUSE', path: '/about' },
    ],
    heading: 'About NAXALBLOUSE',
  },
  '/categories': {
    path: '/categories',
    title: 'NAXALBLOUSE App Categories: Blouse, Saree, Kurti & More',
    description:
      'Explore all clothing categories inside the NAXALBLOUSE Android app: back & front blouse designs, sarees, kurtis, kurtas, shirts, jeans, product details & WhatsApp ordering.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Clothing Categories & Features', path: '/categories' },
    ],
    heading: 'NAXALBLOUSE Clothing Categories & App Features',
  },
  '/install-guide': {
    path: '/install-guide',
    title: 'How to Download & Install NAXALBLOUSE APK on Android',
    description:
      'Step-by-step guide in Hindi, English, and Bengali to safely download NAXAL_BLOUSE_1.00_BETA_.apk from MediaFire and install the NAXALBLOUSE app in Chrome on Android.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'APK Installation Guide', path: '/install-guide' },
    ],
    heading: 'How to Download & Install NAXALBLOUSE APK',
  },
  '/faq': {
    path: '/faq',
    title: 'NAXALBLOUSE FAQ | App, APK Download & Naxalbari Delivery',
    description:
      'Frequently asked questions about NAXALBLOUSE: how to download the Android APK, WhatsApp ordering, blouse stitching, clothing categories, and availability in Naxalbari 734429.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Frequently Asked Questions', path: '/faq' },
    ],
    heading: 'NAXALBLOUSE Frequently Asked Questions',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact NAXALBLOUSE | Naxalbari, West Bengal 734429',
    description:
      'Official location and service details for NAXALBLOUSE in Naxalbari, West Bengal, India (PIN 734429). Learn how WhatsApp ordering and customer order support work inside the app.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Contact & Location', path: '/contact' },
    ],
    heading: 'Contact & Location — Naxalbari, West Bengal',
  },
  '/404': {
    path: '/404',
    title: 'Page Not Found (404) | NAXALBLOUSE Official Website',
    description:
      'The requested page could not be found on the official NAXALBLOUSE APK download website. Return home to learn about the app or download NAXAL_BLOUSE_1.00_BETA_.apk.',
    robots: 'noindex, follow',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: '404 Not Found', path: '/404' },
    ],
    heading: 'Page Not Found',
  },
};

export function normalizePathname(rawPath: string): RoutePath {
  let clean = rawPath.split('?')[0].split('#')[0];
  if (clean === '/index.html' || clean === '') {
    return '/';
  }
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  const validRoutes: RoutePath[] = [
    '/',
    '/download',
    '/about',
    '/categories',
    '/install-guide',
    '/faq',
    '/contact',
  ];
  return validRoutes.includes(clean as RoutePath) ? (clean as RoutePath) : '/404';
}

export function getCanonicalBaseUrl(): string {
  if (typeof window === 'undefined') {
    return PRODUCTION_BASE_URL;
  }
  const { hostname, port, protocol } = window.location;
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
  if (isLocal) {
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  }
  // Enforce HTTPS canonicalization for all non-local environments
  return `https://${hostname}${port ? `:${port}` : ''}`;
}

function upsertMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let meta = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function buildStructuredData(route: RoutePath, baseUrl: string, canonicalUrl: string) {
  const config = ROUTE_SEO[route];
  const logoUrl = `${baseUrl}/naxal_beta_logo.jpg`;

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'NAXALBLOUSE',
    alternateName: ['NAXAL BLOUSE', 'NAXAL BLOUSE BETA'],
    url: `${baseUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 1024,
      height: 1024,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Naxalbari, West Bengal, India',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Naxalbari',
        addressRegion: 'West Bengal',
        postalCode: '734429',
        addressCountry: 'IN',
      },
    },
  };

  const localBusinessSchema = {
    '@type': 'ClothingStore',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'NAXALBLOUSE',
    description:
      'Clothing designs, custom blouse stitching, and clothing delivery services in Naxalbari, West Bengal, India (PIN 734429) accessible via the NAXALBLOUSE Android app.',
    url: `${baseUrl}/`,
    image: logoUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Naxalbari',
      addressRegion: 'West Bengal',
      postalCode: '734429',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Naxalbari, West Bengal 734429',
    },
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'NAXALBLOUSE',
    alternateName: 'NAXALBLOUSE Official APK Website',
    url: `${baseUrl}/`,
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: ['en-IN', 'hi-IN', 'bn-IN'],
  };

  const softwareAppSchema = {
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/#app`,
    name: 'NAXALBLOUSE',
    alternateName: 'NAXAL BLOUSE BETA',
    operatingSystem: 'Android 8.0 to Android 15',
    applicationCategory: 'ShoppingApplication',
    softwareVersion: 'v1.00 Beta',
    fileSize: '18.4 MB',
    downloadUrl: OFFICIAL_MEDIAFIRE_URL,
    installUrl: `${baseUrl}/download`,
    image: logoUrl,
    publisher: { '@id': `${baseUrl}/#organization` },
    description:
      'NAXALBLOUSE is an Android clothing and blouse tailoring application for browsing blouse designs, sarees, kurtis, kurtas, shirts, and jeans with WhatsApp-based ordering and delivery in Naxalbari, West Bengal (734429).',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: config.breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: NAXALBLOUSE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    '@type': 'HowTo',
    name: 'How to Download and Install NAXALBLOUSE APK on Android',
    description:
      'Follow these four steps to safely download NAXAL_BLOUSE_1.00_BETA_.apk from the official MediaFire mirror and install NAXALBLOUSE in Google Chrome on Android.',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Click Download App',
        text: 'Click the Download App button on the official NAXALBLOUSE website to open the verified MediaFire download page.',
        url: `${baseUrl}/download`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Tap the Blue DOWNLOAD Button on MediaFire',
        text: 'On the MediaFire page for NAXAL_BLOUSE_1.00_BETA_.apk (18.4 MB), tap the blue DOWNLOAD button to start downloading.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Confirm Download in Chrome',
        text: 'If Android Chrome displays a standard APK notice ("File might be harmful"), tap "Download anyway" to save the official package.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Open Chrome Downloads and Install',
        text: 'Open Chrome menu (⋮) → Downloads, tap NAXAL_BLOUSE_1.00_BETA_.apk, grant Chrome install permission if requested, and tap Install.',
      },
    ],
  };

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: config.title,
    description: config.description,
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': `${baseUrl}/#app` },
  };

  const graph: Record<string, unknown>[] = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    softwareAppSchema,
    webPageSchema,
    breadcrumbSchema,
  ];

  if (route === '/' || route === '/faq') {
    graph.push(faqSchema);
  }
  if (route === '/' || route === '/install-guide' || route === '/download') {
    graph.push(howToSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function applyPageSeo(route: RoutePath) {
  if (typeof document === 'undefined') return;

  const config = ROUTE_SEO[route];
  const baseUrl = getCanonicalBaseUrl();
  const canonicalPath = route === '/404' ? '/' : route === '/' ? '/' : route;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const ogImageUrl = `${baseUrl}/naxal_beta_logo.jpg`;

  document.title = config.title;
  upsertMeta('name', 'description', config.description);
  upsertMeta('name', 'robots', config.robots);

  if (route !== '/404') {
    upsertCanonical(canonicalUrl);
  }

  // Open Graph
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', 'NAXALBLOUSE');
  upsertMeta('property', 'og:title', config.title);
  upsertMeta('property', 'og:description', config.description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:image', ogImageUrl);
  upsertMeta('property', 'og:image:alt', 'NAXALBLOUSE Official Android App Logo');

  // Twitter Card
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', config.title);
  upsertMeta('name', 'twitter:description', config.description);
  upsertMeta('name', 'twitter:image', ogImageUrl);

  // Structured Data JSON-LD
  let script = document.getElementById('naxalblouse-structured-data') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'naxalblouse-structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(buildStructuredData(route, baseUrl, canonicalUrl));
}
