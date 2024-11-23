// import localFont from "next/font/local";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/sonner";
// import Header from "./dashboard/_components/Header";
// import Footer from "./dashboard/_components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Ai-interview",
//   description: "Ai generated interview mocker",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         >
//           <Header />
//           <Toaster />
//           {children}
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Header from "./dashboard/_components/Header";
import Footer from "./dashboard/_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ai-interview",
  description: "Ai generated interview mocker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-gray-100 min-h-screen`}
        >
          <SpeedInsights />
          <Header />
          <main className="flex-col">{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
