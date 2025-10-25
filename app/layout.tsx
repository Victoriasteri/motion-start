import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motion Start - Изучайте 2D моушн-дизайн",
  description:
    "Изучайте 2D моушн-дизайн и Adobe After Effects с нуля. Профессиональные уроки и практические проекты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Box sx={{ flex: 1 }}>{children}</Box>
            <Footer />
            <ScrollToTop />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
