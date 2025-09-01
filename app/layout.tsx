
import dynamic from "next/dynamic";
import React from "react";
import Script from "next/script";
import "@/styles/globals.css";

const Container = dynamic(() => import("@/components/Container"), { ssr: false });

export const metadata = {
  title: 'Klovy Chat',
  description: 'Nowoczesny komunikator głosowy i tekstowy. Dołącz do społeczności Klovy Chat!',
  openGraph: {
    title: 'Klovy Chat',
    description: 'Nowoczesny komunikator głosowy i tekstowy. Dołącz do społeczności Klovy Chat!',
    url: 'https://klovy.org',
    type: 'website',
    images: [
      {
        url: '/klovy-chat-pc.png',
        width: 1200,
        height: 630,
        alt: 'Klovy Chat',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Nie używaj hooków w layout.tsx (Server Component)
  return (
    <html lang="pl">
      <body>
        {/* Jeśli masz ScrollProgressBar/ScrollingBar, załaduj je dynamicznie lub przenieś do Container jeśli wymagają hooków */}
        <Container>
          {children}
        </Container>
        {/* Webstat.pl scripts */}
        <Script src="https://webstat.pl/jsm.php" strategy="afterInteractive" />
        <Script id="webstat-init" strategy="afterInteractive">
          {`stats(document,screen,6485,7751);`}
        </Script>
        <noscript>
          <a href="https://webstat.pl">
            <img width="1" height="1" src="https://webstat.pl/wsimg.php?w=6485&p=7751" alt="" />
          </a>
        </noscript>
      </body>
    </html>
  );
}
