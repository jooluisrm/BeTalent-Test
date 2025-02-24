import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logoImg from "../../public/BeTalent.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} __variable_4d318d __variable_ea5f4b antialiased vsc-initialized`}
        cz-shortcut-listen="true"
      >
        <header className="bg-white min-h-[60px] flex items-center mx-5 lg:container lg:mx-auto">
          <h1>
            <Image alt="logo" src={logoImg} width={71} />
          </h1>
        </header>
        <main className="bg-[#F0F0F0] min-h-[calc(100vh-60px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
