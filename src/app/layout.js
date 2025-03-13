import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "شركة EasyLock",
  description:
    "شركة easylock متخصصة في إنتاج إكسسوارات غرف التبريد والصناديق المبردة، تابعة لشركة العالمية لغرف التبريد.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        {/* أيقونة الـ Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
