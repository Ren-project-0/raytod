
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/AuthContext';
import { ClerkProvider } from '@clerk/nextjs';



const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ren Project Studio - Jasa Ilustrasi Custom Profesional',
  description: 'Ren Project Studio menyediakan jasa ilustrasi custom berbagai gaya: digital art, chibi, anime-style, desain merchandise, dan lainnya. Wujudkan imajinasimu!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  publishableKey={'pk_test_b25lLXJhcHRvci01OC5jbGVyay5hY2NvdW50cy5kZXYk'}>
      <html lang="id">
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
          <AuthProvider>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
