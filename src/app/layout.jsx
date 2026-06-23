import './globals.css';
import ImageProtection from '@/components/ImageProtection';

export const metadata = {
  title: 'Memorial Ready - Premier Memorial Plans & Lots in Taguig',
  description: 'Premium memorial lots, pre-need plans, cremation & interment services in Taguig. Flexible payment terms, perpetual care, and compassionate service. Schedule a visit today.',
  keywords: 'memorial lots, memorial plans, cremation, interment, columbary, Taguig, heritage park, pre-need plan, funeral services',
  openGraph: {
    title: 'Memorial Ready - Honoring Lives, Preserving Memories',
    description: 'Premium memorial lands and compassionate service plans with dignity and respect.',
    type: 'website',
    locale: 'en_PH',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Memorial Ready',
              description: 'Premium memorial lots, plans, cremation, and interment services.',
              url: 'https://memorialready.com',
              telephone: '+63-2-1234-5678',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bayani Road, Fort Bonifacio',
                addressLocality: 'Taguig City',
                addressRegion: 'Metro Manila',
                addressCountry: 'PH',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '14.5321',
                longitude: '121.0456',
              },
              openingHours: 'Mo-Sa 08:00-18:00',
              priceRange: '₱80,000 - ₱800,000',
              areaServed: 'Metro Manila, Philippines',
              sameAs: [
                'https://www.facebook.com/',
                'https://www.instagram.com/',
              ],
            }),
          }}
        />
      </head>
      <body><ImageProtection>{children}</ImageProtection></body>
    </html>
  );
}
