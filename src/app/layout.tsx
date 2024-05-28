import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Gill Barber Shop",
  description: "Gill Barber Shop is the best barber shop in town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${merriweather.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
