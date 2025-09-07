import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelica M. Hernandez - Professional Resume",
  description: "Professional resume presentation for General Admin Virtual Assistant position",
  authors: [{ name: "Angelica M. Hernandez" }],
  keywords: ["resume", "virtual assistant", "admin", "professional", "CV"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              body {
                font-size: 12pt !important;
                line-height: 1.4 !important;
              }
              .no-print {
                display: none !important;
              }
              .print-break {
                page-break-before: always;
              }
            }
          `
        }} />
      </head>
      <body className="font-inter antialiased bg-slate-50 text-slate-800">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}