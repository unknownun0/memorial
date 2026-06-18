import './globals.css';

export const metadata = {
  title: 'Memorial Ready - Honoring Lives, Preserving Memories',
  description: 'Premium memorial land and service plans. We provide compassionate memorial solutions with dignity and respect.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
