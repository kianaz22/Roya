import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Company Website",
  description: "A modern company website with multilingual support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
