"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  /* Cart Sidebar */
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  /* Add To Cart */
  const addToCart = (product: any) => {
    const existing = cartItems.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);
    }

    /* OPEN SIDEBAR */
    setIsCartOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,

        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}