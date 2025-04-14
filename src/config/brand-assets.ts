export const BrandAssets = {
  // App name variations
  names: {
    full: 'Doggo Hotel',
    short: 'Doggo',
    legal: 'Doggo Hotel Inc.',
  },

  // Colors (matching your theme)
  colors: {
    primary: '#000000',
    background: '#ffffff',
    text: '#000000',
  },

  // Icons and logos
  icons: {
    // PWA icons
    pwa: {
      small: '/icons/icon-192x192.png',
      large: '/icons/icon-512x512.png',
    },
    
    // Favicons
    favicon: '/favicon.ico',
    
    // App logos
    logos: {
      default: '/logos/default.svg',
      light: '/logos/light.svg',
      dark: '/logos/dark.svg',
      small: '/logos/small.svg',
    },
  },

  // Meta information
  meta: {
    description: 'A luxury hotel for your furry friends',
    keywords: ['pet boarding', 'dog hotel', 'pet care', 'kennel'],
    themeColor: '#000000',
  },

  // Social media
  social: {
    ogImage: '/social/og-image.png',
    twitter: {
      handle: '@doggohotel',
      cardType: 'summary_large_image',
    },
  },
} as const;

// Type-safe way to get asset paths
export const getAssetPath = (path: keyof typeof BrandAssets.icons.logos) => 
  BrandAssets.icons.logos[path];

// Type-safe way to get PWA icons
export const getPWAIcon = (size: keyof typeof BrandAssets.icons.pwa) =>
  BrandAssets.icons.pwa[size];

// Helper to get all PWA icons in manifest format
export const getPWAIconsForManifest = () => [
  {
    src: BrandAssets.icons.pwa.small,
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: BrandAssets.icons.pwa.large,
    sizes: '512x512',
    type: 'image/png',
  },
]; 