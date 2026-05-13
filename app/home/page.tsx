"use client";

import { useEffect, useState } from "react";

/* Home Sections */
import HeroSection from "@/components/home/HeroSection";
import VariantsSection from "@/components/home/VariantsSection";
import DealSection from "@/components/home/DealSection";
import CompareSection from "@/components/home/CompareSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import ServicesSection from "@/components/home/ServicesSection";
import VendorsSection from "@/components/home/VendorsSection";
import InstaSection from "@/components/home/InstaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* Modals */
import QuickViewModal from "@/components/modals/QuickViewModal";
import NewsletterModal from "@/components/modals/NewsletterModal";

/* Cart Sidebar */
import CartSidebar from "@/components/cart/CartSidebar";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  /* Fetch Products */
  useEffect(() => {

    fetch("http://127.0.0.1:8000/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(data);

      });

  }, []);

  return (

    <>

      {/* Hero Section */}
      <HeroSection />

      {/* Product Variants */}
      <VariantsSection />

      {/* Deal Products */}
      <DealSection
        products={products}
        setSelectedProduct={setSelectedProduct}
      />

      {/* Compare Banner */}
      <CompareSection />

      {/* New Arrivals */}
      <NewArrivalsSection
        products={products}
        setSelectedProduct={setSelectedProduct}
      />

      {/* Services */}
      <ServicesSection />

      {/* Vendors */}
      <VendorsSection />

      {/* Instagram */}
      <InstaSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Quick View Modal */}
      <QuickViewModal
        selectedProduct={selectedProduct}
      />

      {/* Newsletter Popup */}
      <NewsletterModal />

    </>

  );

}