"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/* Home Sections */
import Header from "@/components/layout/Header";
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

/* Cart */
import CartSidebar from "@/components/cart/CartSidebar";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [cartItems, setCartItems] = useState<any[]>([]);

  /* Fetch Products */
  useEffect(() => {

    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  }, []);

  /* Add To Cart */
  const addToCart = (product: any) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );

      }

      return [
        ...prevItems,
        {
          ...product,
          qty: 1,
        },
      ];

    });

    toast.success("Product added to cart");

  };

  /* Remove Cart Item */
  const removeCartItem = (id: number) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  /* Totals */
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + (item.sale_price * item.qty),
    0
  );

  const vat = subtotal * 0.2;

  const total = subtotal + vat;

  return (
    <>

<Header cartItems={cartItems} />

      {/* Hero */}
      <HeroSection />

      {/* Variants */}
      <VariantsSection />

      {/* Deal Section */}
      <DealSection
        products={products}
        setSelectedProduct={setSelectedProduct}
		addToCart={addToCart}
      />

      {/* Compare Banner */}
      <CompareSection />

      {/* New Arrivals */}
	<NewArrivalsSection
	products={products}
	setSelectedProduct={setSelectedProduct}
	addToCart={addToCart}
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
      <CartSidebar
        cartItems={cartItems}
        subtotal={subtotal}
        vat={vat}
        total={total}
        removeCartItem={removeCartItem}
      />

      {/* Quick View */}
      <QuickViewModal
        selectedProduct={selectedProduct}
      />

      {/* Newsletter */}
      <NewsletterModal />

    </>
  );
}