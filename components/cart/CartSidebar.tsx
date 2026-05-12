"use client";

type CartSidebarProps = {
  cartItems: any[];
  subtotal: number;
  vat: number;
  total: number;
  removeCartItem: (id: number) => void;
};

export default function CartSidebar({
  cartItems,
  subtotal,
  vat,
  total,
  removeCartItem,
}: CartSidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div className="bb-side-cart-overlay" />

      {/* Sidebar */}
      <div className="bb-side-cart">

        <div className="row h-full">

          {/* Left Side */}
          <div className="col-md-5 col-12 d-none-767">

            <div className="bb-top-contact">

              <div className="bb-cart-title">
                <h4>Related Items</h4>
              </div>

            </div>

            <div className="bb-cart-box mb-minus-24 cart-related bb-border-right">

              <div className="bb-cart-banner mb-24">

                <div className="banner">

                  <img
                    src="/assets/img/category/cart-banner.jpg"
                    alt="cart-banner"
                  />

                  <div className="detail">

                    <h4>Organic & Fresh</h4>

                    <h3>Vegetables</h3>

                    <a href="#">Buy Now</a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-md-7 col-12">

            <div className="bb-inner-cart">

              {/* Header */}
              <div className="bb-top-contact">

                <div className="bb-cart-title">

                  <h4>My Cart</h4>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bb-cart-close"
                    title="Close Cart"
                  />

                </div>

              </div>

              {/* Cart Items */}
              <div className="bb-cart-box item">

                <ul className="bb-cart-items">

                  {cartItems.length === 0 ? (

                    <li className="cart-sidebar-list text-center p-4">
                      Cart is empty
                    </li>

                  ) : (

                    cartItems.map((item: any) => (

                      <li
                        className="cart-sidebar-list"
                        key={item.id}
                      >

                        {/* Remove */}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            removeCartItem(item.id);
                          }}
                          className="cart-remove-item"
                        >
                          <i className="ri-close-line" />
                        </a>

                        {/* Image */}
                        <a
                          href={`/product/${item.slug}`}
                          className="bb-cart-pro-img"
                        >

                          <img
                            src={`http://127.0.0.1:8000${item.front_image}`}
                            alt={item.name}
                          />

                        </a>

                        {/* Content */}
                        <div className="bb-cart-contact">

                          <a
                            href={`/product/${item.slug}`}
                            className="bb-cart-sub-title"
                          >
                            {item.name}
                          </a>

                          <span className="cart-price">

                            <span className="new-price">
                              ₹{item.sale_price}
                            </span>

                            {" "}x {item.qty}

                          </span>

                          <div className="qty-plus-minus">

                            <input
                              className="qty-input"
                              type="text"
                              value={item.qty}
                              readOnly
                            />

                          </div>

                        </div>

                      </li>

                    ))

                  )}

                </ul>

              </div>

              {/* Footer */}
              <div className="bb-bottom-cart">

                <div className="cart-sub-total">

                  <table className="table cart-table">

                    <tbody>

                      <tr>

                        <td className="title">
                          Sub-Total :
                        </td>

                        <td className="price">
                          ₹{subtotal.toFixed(2)}
                        </td>

                      </tr>

                      <tr>

                        <td className="title">
                          VAT (20%) :
                        </td>

                        <td className="price">
                          ₹{vat.toFixed(2)}
                        </td>

                      </tr>

                      <tr>

                        <td className="title">
                          Total :
                        </td>

                        <td className="price">
                          ₹{total.toFixed(2)}
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

                {/* Buttons */}
                <div className="cart-btn">

                  <a href="/cart" className="bb-btn-1">
                    View Cart
                  </a>

                  <a href="/checkout" className="bb-btn-2">
                    Checkout
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}