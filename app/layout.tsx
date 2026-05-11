import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import Script from "next/script";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

/* Vendor CSS */
import "../public/assets/css/vendor/bootstrap.min.css";
import "../public/assets/css/vendor/remixicon.css";
import "../public/assets/css/vendor/aos.css";
import "../public/assets/css/vendor/swiper-bundle.min.css";
import "../public/assets/css/vendor/owl.carousel.min.css";
import "../public/assets/css/vendor/slick.min.css";
import "../public/assets/css/vendor/animate.min.css";
import "../public/assets/css/vendor/jquery-range-ui.css";

/* Main Template CSS */
import "../public/assets/css/style.css";


const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets: ["latin"],

});


const geistMono = Geist_Mono({

  variable: "--font-geist-mono",

  subsets: ["latin"],

});


export const metadata: Metadata = {

  title: "VaisKart - Garbage Bags",

  description: "VaisKart - Strong & Leak Proof Garbage Bags.",

  icons: {

    icon: "/assets/img/favicon/favicon.png",

  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

        {/* Toast Notification */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />

        {/* jQuery First */}
        <Script
          src="/assets/js/vendor/jquery.min.js"
          strategy="beforeInteractive"
        />

        {/* Vendor JS */}
        <Script
          src="/assets/js/vendor/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/jquery.zoom.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/aos.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/smoothscroll.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/countdownTimer.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/owl.carousel.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/slick.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/jquery-range-ui.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/vendor/tilt.jquery.min.js"
          strategy="afterInteractive"
        />

        {/* Main JS */}
        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />

      </body>

    </html>

  );

}