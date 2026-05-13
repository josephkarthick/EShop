"use client";

import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="bb-side-cart-overlay"
          onClick={() =>
            setIsCartOpen(false)
          }
        />
      )}

      {/* Sidebar */}
      <div
        className={`bb-side-cart ${
          isCartOpen ? "show" : ""
        }`}
      >
        <div className="cart-header">
          <h4>Shopping Cart</h4>

          <button
            onClick={() =>
              setIsCartOpen(false)
            }
          >
            X
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map((item: any) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={`http://127.0.0.1:8000${item.front_image}`}
                  width={60}
                />

                <div>
                  <h5>{item.name}</h5>

                  <p>
                    Qty: {item.qty}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}