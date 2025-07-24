import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Footer from '@/components/Footer';
import AOSProvider from '@/components/AOSprovider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blackpantherkan Academy',
  description: 'Karate, Yoga, Rifle Shooting, and More',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative`}
      >
        {/* ✅ Background Texture */}
        <div
          className="absolute inset-0 bg-repeat bg-fixed z-[-1]"
          style={{
            backgroundImage: "url('/textures/t2.webp')",
            backgroundSize: "400px 400px", // Adjust for texture size
          }}
        ></div>

        {/* ✅ Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/1 z-0"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <AOSProvider>
            <main className="flex-grow">
              <ClientLayout>{children}</ClientLayout>
            </main>
            <Footer />
          </AOSProvider>
        </div>
      </body>
    </html>
  );
}
