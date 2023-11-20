import { Registry as StyledComponentRegistry } from '@/styles/registry';
import type { Metadata } from 'next';
import { getMetadata } from '@/constants/metadata/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Open-Set-Go',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
