"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [cartItems, setCartItems] = useState<any[]>([]);

  const dealProducts = products.filter(
  (product:any) => product.is_day_of_the_deal
);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  }, []);

  const addToCart = (product: any) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
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

  const removeCartItem = (id: number) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );

  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + (item.sale_price * item.qty),
    0
  );

  const vat = subtotal * 0.2;

  const total = subtotal + vat;

  return (
    <>

  {/* Header */}
  <header className="bb-header">
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-top-header">
              <div className="col-left-bar">
                <a href="shop-left-sidebar-col-3.html">
                  VaisKart Your Daily Support Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-bottom-header">
              <div className="cols bb-logo-detail">
                {/* Header Logo Start */}
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="logo"
                      className="light"
                    />
                    <img
                      src="assets/img/logo/logo-dark.png"
                      alt="logo"
                      className="dark"
                    />
                  </a>
                </div>
                {/* Header Logo End */}
                <a
                  href="javascript:void(0)"
                  className="bb-sidebar-toggle bb-category-toggle"
                >
                  <svg
                    className="svg-icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z" />
                  </svg>
                </a>
              </div>
              <div className="cols">
                <div className="header-search">
                  <form className="bb-btn-group-form" action="#">
                    <div className="inner-select">
                      <div className="custom-select">
                        <select>
                          <option value="option1">Garbage </option>
                        </select>
                      </div>
                    </div>
                    <input
                      className="form-control bb-search-bar"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <i className="ri-search-line" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="cols bb-icons">
                <div className="bb-flex-justify">
                  <div className="bb-header-buttons">
                    <div className="bb-acc-drop">
                      <a
                        href="javascript:void(0)"
                        className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle"
                        title="Account"
                      >
                        <div className="header-icon">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M512.476 648.247c-170.169 0-308.118-136.411-308.118-304.681 0-168.271 137.949-304.681 308.118-304.681 170.169 0 308.119 136.411 308.119 304.681C820.594 511.837 682.645 648.247 512.476 648.247L512.476 648.247zM512.476 100.186c-135.713 0-246.12 109.178-246.12 243.381 0 134.202 110.407 243.381 246.12 243.381 135.719 0 246.126-109.179 246.126-243.381C758.602 209.364 648.195 100.186 512.476 100.186L512.476 100.186zM935.867 985.115l-26.164 0c-9.648 0-17.779-6.941-19.384-16.35-2.646-15.426-6.277-30.52-11.142-44.95-24.769-87.686-81.337-164.13-159.104-214.266-63.232 35.203-134.235 53.64-207.597 53.64-73.555 0-144.73-18.537-208.084-53.922-78 50.131-134.75 126.68-159.564 214.549 0 0-4.893 18.172-11.795 46.4-2.136 8.723-10.035 14.9-19.112 14.9L88.133 985.116c-9.415 0-16.693-8.214-15.47-17.452C91.698 824.084 181.099 702.474 305.51 637.615c58.682 40.472 129.996 64.267 206.966 64.267 76.799 0 147.968-23.684 206.584-63.991 124.123 64.932 213.281 186.403 232.277 329.772C952.56 976.901 945.287 985.115 935.867 985.115L935.867 985.115z" />
                          </svg>
                        </div>
                        <div className="bb-btn-desc">
                          <span className="bb-btn-title">Account</span>
                          <span className="bb-btn-stitle">Login</span>
                        </div>
                      </a>
                      <ul className="bb-dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="wishlist.html"
                      className="bb-header-btn bb-wish-toggle"
                      title="Wishlist"
                    >
                      <div className="header-icon">
                        <svg
                          className="svg-icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M512 128l121.571556 250.823111 276.366222 39.111111-199.281778 200.504889L756.622222 896 512 769.536 267.377778 896l45.852444-277.617778-199.111111-200.504889 276.366222-39.111111L512 128m0-56.888889a65.962667 65.962667 0 0 0-59.477333 36.807111l-102.940445 213.703111-236.828444 35.214223a65.422222 65.422222 0 0 0-52.366222 42.979555 62.577778 62.577778 0 0 0 15.274666 64.967111l173.511111 173.340445-40.248889 240.355555a63.374222 63.374222 0 0 0 26.993778 62.577778 67.242667 67.242667 0 0 0 69.632 3.726222L512 837.290667l206.478222 107.605333a67.356444 67.356444 0 0 0 69.688889-3.726222 63.374222 63.374222 0 0 0 26.908445-62.577778l-40.277334-240.355556 173.511111-173.340444a62.577778 62.577778 0 0 0 15.246223-64.967111 65.422222 65.422222 0 0 0-52.366223-42.979556l-236.8-35.214222-102.968889-213.703111A65.848889 65.848889 0 0 0 512 71.111111z"
                            fill="#364C58"
                          />
                        </svg>
                      </div>
                      <div className="bb-btn-desc">
                        <span className="bb-btn-title">
                          <b className="bb-wishlist-count">3</b>
                          items
                        </span>
                        <span className="bb-btn-stitle">Wishlist</span>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="bb-header-btn bb-cart-toggle"
                      title="Cart"
                    >
                      <div className="header-icon">
                        <svg
                          className="svg-icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M351.552 831.424c-35.328 0-63.968 28.64-63.968 63.968 0 35.328 28.64 63.968 63.968 63.968 35.328 0 63.968-28.64 63.968-63.968C415.52 860.064 386.88 831.424 351.552 831.424L351.552 831.424 351.552 831.424zM799.296 831.424c-35.328 0-63.968 28.64-63.968 63.968 0 35.328 28.64 63.968 63.968 63.968 35.328 0 63.968-28.64 63.968-63.968C863.264 860.064 834.624 831.424 799.296 831.424L799.296 831.424 799.296 831.424zM862.752 799.456 343.264 799.456c-46.08 0-86.592-36.448-92.224-83.008L196.8 334.592 165.92 156.128c-1.92-15.584-16.128-28.288-29.984-28.288L95.2 127.84c-17.664 0-32-14.336-32-31.968 0-17.664 14.336-32 32-32l40.736 0c46.656 0 87.616 36.448 93.28 83.008l30.784 177.792 54.464 383.488c1.792 14.848 15.232 27.36 28.768 27.36l519.488 0c17.696 0 32 14.304 32 31.968S880.416 799.456 862.752 799.456L862.752 799.456zM383.232 671.52c-16.608 0-30.624-12.8-31.872-29.632-1.312-17.632 11.936-32.928 29.504-34.208l433.856-31.968c15.936-0.096 29.344-12.608 31.104-26.816l50.368-288.224c1.28-10.752-1.696-22.528-8.128-29.792-4.128-4.672-9.312-7.04-15.36-7.04L319.04 223.84c-17.664 0-32-14.336-32-31.968 0-17.664 14.336-31.968 32-31.968l553.728 0c24.448 0 46.88 10.144 63.232 28.608 18.688 21.088 27.264 50.784 23.52 81.568l-50.4 288.256c-5.44 44.832-45.92 81.28-92 81.28L385.6 671.424C384.8 671.488 384 671.52 383.232 671.52L383.232 671.52zM383.232 671.52" />
                        </svg>
                        <span className="main-label-note-new" />
                      </div>
                      <div className="bb-btn-desc">
                        <span className="bb-btn-title">
                          <b className="bb-cart-count">
  {cartItems.reduce(
    (total, item) => total + item.qty,
    0
  )}
</b>
                        </span>
                        <span className="bb-btn-stitle">Cart</span>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="bb-toggle-menu">
                      <div className="header-icon">
                        <i className="ri-menu-3-fill" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bb-main-menu-desk">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bb-inner-menu-desk">
              <a
                href="javascript:void(0)"
                className="bb-header-btn bb-sidebar-toggle bb-category-toggle"
              >
                <svg
                  className="svg-icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z" />
                </svg>
              </a>
              <button
                className="navbar-toggler shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-2-line" />
              </button>
              <div className="bb-main-menu" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item bb-main-dropdown">
                    <a
                      className="nav-link bb-dropdown-item"
                      href="javascript:void(0)"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item bb-dropdown">
                    <a
                      className="nav-link bb-dropdown-item"
                      href="javascript:void(0)"
                    >
                      Products
                    </a>
                    <ul className="bb-dropdown-menu">
                      <li className="bb-mega-dropdown">
                        <a className="bb-mega-item" href="javascript:void(0)">
                          Garbage Bags
                        </a>
                        <ul className="bb-mega-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-left-sidebar.html"
                            >
                              Product left sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="product-right-sidebar.html"
                            >
                              Product right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      
                      <li>
                        <a href="product-full-width.html">Product full width</a>
                      </li>

                    </ul>
                  </li>
                  <li className="nav-item bb-dropdown">
                    <a
                      className="nav-link bb-dropdown-item"
                      href="javascript:void(0)"
                    >
                      Pages
                    </a>
                    <ul className="bb-dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>


                    </ul>
                  </li>

                </ul>
              </div>
              <div className="bb-dropdown-menu">
                <div className="inner-select">
                  <svg
                    className="svg-icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M511.614214 958.708971c-21.76163 0-41.744753-9.781784-54.865586-26.862811L222.50156 626.526383c-3.540639-4.044106-5.872754-7.978718-7.349385-10.461259-41.72838-58.515718-63.959707-127.685078-63.959707-199.699228 0.87288-193.650465 162.903184-351.075891 361.209691-351.075891 198.726064 0 360.40435 157.49194 360.40435 351.075891-0.839111 72.190159-23.070438 140.856052-64.345494 199.053522-1.962701 3.288906-4.312212 7.189749-7.735171 11.098779L566.479799 931.847184c-13.120832 17.080004-33.103956 26.861788-54.865585 26.861787zM273.525654 580.51956a33.707706 33.707706 0 0 1 2.63399 3.037173L511.278569 890.00931 747.068783 583.556733c0.435928-0.569982 0.889253-1.124614 1.358951-1.669013l2.51631-4.102434c0.285502-0.453325 0.587378-0.89744 0.889253-1.325182 33.507138-46.921659 51.577702-102.416578 52.248991-160.487158 0-155.294902-130.839931-281.95565-291.679105-281.95565-160.571069 0-291.780413 126.72931-292.484448 282.501073 0 57.450457 17.802458 112.811322 51.460022 159.933549l2.90312 4.580318c0.418532 0.73678-0.186242 0.032746-0.756223-0.512676z m476.059439 0.100284v0z m0.066515-0.058329c-0.016373 0.016373-0.033769 0.025583-0.033769 0.041956 0.001023-0.016373 0.017396-0.025583 0.033769-0.041956z m0.051166-0.041955a0.227174 0.227174 0 0 0-0.050142 0.041955c0.016373-0.016373 0.032746-0.033769 0.050142-0.041955z"
                      fill="#444444"
                    />
                    <path
                      d="M512 577.206094c-90.000803 0-163.222455-73.221652-163.222455-163.222455s73.221652-163.222455 163.222455-163.222455S675.222455 323.982836 675.222455 413.983639s-73.222675 163.222455-163.222455 163.222455z m0-240.538355c-42.634006 0-77.3159 34.68087-77.3159 77.3159s34.68087 77.3159 77.3159 77.3159 77.3159-34.681894 77.3159-77.3159-34.681894-77.3159-77.3159-77.3159z"
                      fill="#00D8A0"
                    />
                  </svg>
                  <div className="custom-select">
                    <select>
                      <option value="option1">TamilNadu</option>
                      </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bb-mobile-menu-overlay" />
    <div id="bb-mobile-menu" className="bb-mobile-menu">
      <div className="bb-menu-title">
        <span className="menu_title">My Menu</span>
        <button type="button" className="bb-close-menu">
          ×
        </button>
      </div>
      <div className="bb-menu-inner">
        <div className="bb-menu-content">
          <ul>
            <li>
              <a href="javascript:void(0)">Home</a>

            </li>

            <li>
              <a href="javascript:void(0)">Products</a>
              <ul className="sub-menu">
                <li>
                  <a href="javascript:void(0)">Product page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="product-left-sidebar.html">
                        Product left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-right-sidebar.html">
                        Product right sidebar
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="product-full-width.html">Product full width</a>
                </li>

              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              
              </ul>
            </li>

          </ul>
        </div>
        <div className="header-res-lan-curr">
          {/* Social Start */}
          <div className="header-res-social">
            <div className="header-top-social">
              <ul className="mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-instagram-line" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social End */}
        </div>
      </div>
    </div>
  </header>
  {/* Hero */}
  <section className="section-hero margin-b-50 next">
    <div className="bb-social-follow">
      <ul className="inner-links">
        <li>
          <a href="javascript:void(0)">Fb</a>
        </li>
        <li>
          <a href="javascript:void(0)">Li</a>
        </li>
        <li>
          <a href="javascript:void(0)">Dr</a>
        </li>
        <li>
          <a href="javascript:void(0)">In</a>
        </li>
      </ul>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-1">
                <div className="row mb-minus-24">
                  <div className="col-lg-6 col-12 order-lg-1 order-2 mb-24">
                    <div className="hero-contact">
                      <p>Flat 30% Off</p>
                      <h1>
                        Explore <span>Strong</span>
                        <br /> &amp; Hygienic 
                      </h1>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="bb-btn-1"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 order-lg-2 order-1 mb-24">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-1.png" alt="hero" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        className="animate-shape"
                      >
                        <linearGradient
                          id="shape_1"
                          x1="100%"
                          x2="0%"
                          y1="100%"
                          y2="0%"
                        ></linearGradient>
                        <path d="">
                          <animate
                            repeatCount="indefinite"
                            attributeName="d"
                            dur="15s"
                            values=""
                          />
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slide-2">
                <div className="row mb-minus-24">
                  <div className="col-lg-6 col-12 order-lg-1 order-2 mb-24">
                    <div className="hero-contact">
                      <p>Flat 20% Off</p>
                      <h2>
                        Explore <span>Warm</span>
                        <br /> Fast Food &amp; Snacks
                      </h2>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="bb-btn-1"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 order-lg-2 order-1 mb-24">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-2.png" alt="hero" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        className="animate-shape"
                      >
                        <linearGradient
                          id="shape_2"
                          x1="80%"
                          x2="0%"
                          y1="80%"
                          y2="0%"
                        ></linearGradient>
                        <path d="">
                          <animate
                            repeatCount="indefinite"
                            attributeName="d"
                            dur="15s"
                            values=""
                          />
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide slide-3">
                <div className="row mb-minus-24">
                  <div className="col-lg-6 col-12 order-lg-1 order-2 mb-24">
                    <div className="hero-contact">
                      <p>Flat 30% Off</p>
                      <h2>
                        Explore <span>Organic</span>
                        <br /> &amp; Fresh Vegetables
                      </h2>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="bb-btn-1"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 order-lg-2 order-1 mb-24">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-3.png" alt="hero" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        className="animate-shape"
                      >
                        <linearGradient
                          id="shape_3"
                          x1="80%"
                          x2="0%"
                          y1="80%"
                          y2="0%"
                        ></linearGradient>
                        <path d="">
                          <animate
                            repeatCount="indefinite"
                            attributeName="d"
                            dur="15s"
                            values=""
                          />
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-white" />
            <div className="swiper-buttons">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bb-scroll-Page">
      <span className="scroll-bar">
        <a href="javascript:void(0)">Scroll Page</a>
      </span>
    </div>
  </section>
  {/* Category */}
  <section className="section-category padding-tb-50">
    <div className="container">
      <div className="row mb-minus-24">
        <div className="col-lg-5 col-12 mb-24">
          <div className="bb-category-img">
            <img src="assets/img/category/category.png" alt="category" />
            <div className="bb-offers">
              <span>50% Off</span>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 mb-24">
          <div className="bb-category-contact">
            <div
              className="category-title"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <h2>Explore Variants</h2>
            </div>
            <div className="bb-category-block owl-carousel">
              <div
                className="bb-category-box category-items-1"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className="category-image">
                  <img src="assets/img/category/Lite.png" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Lite</a>
                  </h5>
                  <p>485 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-2"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className="category-image">
                  <img src="assets/img/category/Standard.png" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Standard</a>
                  </h5>
                  <p>291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-3"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className="category-image">
                  <img src="assets/img/category/Plus.png" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Plus</a>
                  </h5>
                  <p>49 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-4"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={800}
              >
                <div className="category-image">
                  <img src="assets/img/category/Maxi.png" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Maxi</a>
                  </h5>
                  <p>08 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-3"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={800}
              >
                <div className="category-image">
                  <img src="assets/img/category/Pro_Max.png" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Pro Max</a>
                  </h5>
                  <p>08 items</p>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Day of the deal */}
  <section className="section-deal padding-tb-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="section-title bb-deal"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            <div className="section-detail">
              <h2 className="bb-title">
                Day of the <span>deal</span>
              </h2>
              <p>Don't wait. The time will never be just right.</p>
            </div>
            <div id="dealend" className="dealend-timer" />
          </div>
        </div>
<div className="col-12">

  <div className="bb-deal-slider">

    <div className="bb-deal-block owl-carousel">

      {products
        .filter(
          (product:any) =>
            product.is_day_of_the_deal
        )
        .map((product:any, index:number) => (

        <div
          className="bb-deal-card"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={(index + 1) * 200}
          key={product.id}
        >

          <div className="bb-pro-box">

            <div className="bb-pro-img">

              <span className="flags">

                <span>
                  {product.label || "New"}
                </span>

              </span>

              <a href={`/product/${product.slug}`}>

                <div
                  className="inner-img"
                  style={{
                    height: "320px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}
                >

                  <img
                    className="main-img"
                    src={`http://127.0.0.1:8000${product.front_image}`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />

                  <img
                    className="hover-img"
                    src={`http://127.0.0.1:8000${product.back_image}`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />

                </div>

              </a>

              <ul className="bb-pro-actions">

                <li className="bb-btn-group">

                  <a
                    href="javascript:void(0)"
                    title="Wishlist"
                  >

                    <i className="ri-heart-line" />

                  </a>

                </li>

                <li className="bb-btn-group">

                  <a
                    href="javascript:void(0)"
                    data-link-action="quickview"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#bry_quickview_modal"
                    onClick={() =>
                      setSelectedProduct(product)
                    }
                  >

                    <i className="ri-eye-line" />

                  </a>

                </li>

                <li className="bb-btn-group">

                  <a
                    href="compare.html"
                    title="Compare"
                  >

                    <i className="ri-repeat-line" />

                  </a>

                </li>

                <li className="bb-btn-group">

                  <button
                    type="button"
                    title="Add To Cart"
                    className="border-0 bg-transparent"
                    onClick={() =>
                      addToCart(product)
                    }
                  >

                    <i className="ri-shopping-bag-4-line" />

                  </button>

                </li>

              </ul>

            </div>

            <div className="bb-pro-contact">

              <div className="bb-pro-subtitle">

                <a href="shop-left-sidebar-col-3.html">

                  {product.product_type || "Roll Bag"}

                </a>

                <span className="bb-pro-rating">

                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-line" />

                </span>

              </div>

              <h4 className="bb-pro-title">

                <a href={`/product/${product.slug}`}>

                  {product.name}

                </a>

              </h4>

              <div className="bb-price">

                <div className="inner-price">

                  <span className="new-price">

                    ₹{product.sale_price}

                  </span>

                  <span className="old-price">

                    ₹{product.mrp}

                  </span>

                </div>

                <span className="last-items">

                  {product.weight ||
                    `${product.stock} Items`}

                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
      </div>
    </div>
  </section>
  {/* Banner-one */}
  <section className="section-banner-one padding-tb-50">
    <div className="container">
      <div className="row mb-minus-24">
        <div
          className="col-lg-6 col-12 mb-24"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={400}
        >
          <div className="banner-box bg-box-color-one">
            <div className="inner-banner-box">
              <div className="side-image">
                <img src="assets/img/banner-one/one.png" alt="one" />
              </div>
              <div className="inner-contact">
                <h5>VaisKart Bags</h5>
                <p>Strong & durable material</p>
                <p>Holds more weight safely</p>
                <p>Better leak protection</p>
                <p>Premium & long-lasting</p>
                <a href="shop-left-sidebar-col-3.html" className="bb-btn-1">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-12 mb-24"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={400}
        >
          <div className="banner-box bg-box-color-two">
            <div className="inner-banner-box">
              <div className="side-image">
                <img src="assets/img/banner-one/two.png" alt="two" />
              </div>
              <div className="inner-contact">
                <h5>Ordinary Bags</h5>
                <p>Thin and easy to tear</p>
                <p>Limited load capacity</p>
                <p>May leak or smell</p>
                <p>Cheap but less reliable</p>
                <a href="shop-left-sidebar-col-3.html" className="bb-btn-1">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner-two */}
  <section className="section-banner-two margin-tb-50">
    <div className="container">
      <div className="row">
        <div className="col-12 banner-justify-box-contact">
          <div className="banner-two-box">
            <span>25% Off</span>
            <h4>Fresh &amp; Organic vegetables</h4>
            <a href="javascript:void(0)" className="bb-btn-1">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* New Product tab Area */}
  <section className="section-product-tabs padding-tb-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="section-title bb-deal"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            <div className="section-detail">
              <h2 className="bb-title">
                New <span>Arrivals</span>
              </h2>
              <p>Shop online for new arrivals and get free shipping!</p>
            </div>
            <div className="bb-pro-tab">
              <ul className="bb-pro-tab-nav nav">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#all">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#snack"
                  >
                    Snack &amp; Spices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#fruit">
                    Fruits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#veg">
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-minus-24">
        <div className="col">
          <div className="tab-content">
            {/* 1st Product tab start */}

            {/* 2nd Product tab start */}
            <div className="tab-pane fade show active" id="snack">
              <div className="row">
<div className="row">

  {products.map((product:any, index:number) => (

    <div
      className="col-xl-3 col-md-4 col-6 mb-24 bb-product-box"
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-delay={200}
      key={product.id}
    >

      <div className="bb-pro-box">

        <div className="bb-pro-img">

          <span className="flags">
            <span>{ product.label }</span>
          </span>

          <a href={`/product/${product.slug}`}>

            <div className="inner-img">

<img
  className="main-img"
  src={`http://127.0.0.1:8000${product.front_image}`}
  alt={product.name}
/>

<img
  className="hover-img"
  src={`http://127.0.0.1:8000${product.back_image}`}
  alt={product.name}
/>

            </div>

          </a>

                      <ul className="bb-pro-actions">
                        <li className="bb-btn-group">
                          <a href="javascript:void(0)" title="Wishlist">
                            <i className="ri-heart-line" />
                          </a>
                        </li>
                        <li className="bb-btn-group">
  <a
    href="javascript:void(0)"
    data-link-action="quickview"
    title="Quick View"
    data-bs-toggle="modal"
    data-bs-target="#bry_quickview_modal"
    onClick={() => setSelectedProduct(product)}
  >

    <i className="ri-eye-line" />

  </a>
                        </li>
                        <li className="bb-btn-group">
                          <a href="compare.html" title="Compare">
                            <i className="ri-repeat-line" />
                          </a>
                        </li>
<li className="bb-btn-group">
  <button
    type="button"
    title="Add To Cart"
    className="border-0 bg-transparent"
    onClick={() => addToCart(product)}
  >
    <i className="ri-shopping-bag-4-line" />
  </button>
</li>
                      </ul>

        </div>

        <div className="bb-pro-contact">

          <div className="bb-pro-subtitle">

            <a href="#">
              {product.product_type || "Waste Bag"}
            </a>

            <span className="bb-pro-rating">

              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-fill" />
              <i className="ri-star-line" />

            </span>

          </div>

          <h4 className="bb-pro-title">

            <a href={`/product/${product.slug}`}>
              {product.name}
            </a>

          </h4>

          <div className="bb-price">

            <div className="inner-price">

              <span className="new-price">
                ₹{product.sale_price}
              </span>

              <span className="old-price">
                ₹{product.mrp}
              </span>

            </div>

            <span className="last-items">
              {product.stock} Items
            </span>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="section-services padding-tb-50">
    <div className="container">
      <div className="row mb-minus-24">
        <div
          className="col-lg-3 col-md-6 col-12 mb-24"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <div className="bb-services-box">
            <div className="services-img">
              <img src="assets/img/services/1.png" alt="services-1" />
            </div>
            <div className="services-contact">
              <h4>Free Shipping</h4>
              <p>Free shipping on all Us order or above $200</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 mb-24"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-delay={400}
        >
          <div className="bb-services-box">
            <div className="services-img">
              <img src="assets/img/services/2.png" alt="services-2" />
            </div>
            <div className="services-contact">
              <h4>24x7 Support</h4>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 mb-24"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-delay={600}
        >
          <div className="bb-services-box">
            <div className="services-img">
              <img src="assets/img/services/3.png" alt="services-3" />
            </div>
            <div className="services-contact">
              <h4>30 Days Return</h4>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 col-12 mb-24"
          data-aos="flip-up"
          data-aos-duration={1000}
          data-aos-delay={800}
        >
          <div className="bb-services-box">
            <div className="services-img">
              <img src="assets/img/services/4.png" alt="services-4" />
            </div>
            <div className="services-contact">
              <h4>Payment Secure</h4>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Vendors */}
  <section className="section-vendors padding-t-50 padding-b-100">
    <div className="container">
      <div className="row mb-minus-24">
        <div className="col-12">
          <div
            className="section-title bb-center"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            <div className="section-detail">
              <h2 className="bb-title">
                Top <span>Vendors</span>
              </h2>
              <p>
                Discover Our Trusted Partners: Excellence &amp; Reliability in
                Every choice
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-12 mb-24"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <div className="bb-vendors-img">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="vendors_tab_one">
                <a href="javascript:void(0)" className="bb-vendor-init">
                  <i className="ri-arrow-right-up-line" />
                </a>
                <img src="assets/img/vendors/img-1.jpg" alt="vendors-img-1" />
                <div className="vendors-local-shape">
                  <div className="inner-shape" />
                  <img src="assets/img/vendors/vendor-1.jpg" alt="vendor" />
                </div>
              </div>
              <div className="tab-pane fade" id="vendors_tab_two">
                <a href="javascript:void(0)" className="bb-vendor-init">
                  <i className="ri-arrow-right-up-line" />
                </a>
                <img src="assets/img/vendors/img-2.jpg" alt="vendors-img-2" />
                <div className="vendors-local-shape">
                  <div className="inner-shape" />
                  <img src="assets/img/vendors/vendor-2.jpg" alt="vendor" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 mb-24">
          <ul className="bb-vendors-tab-nav nav">
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#vendors_tab_one"
              >
                <div className="bb-vendors-box">
                  <div className="inner-heading">
                    <h5>Mira Fashion Pvt. Ltd.</h5>
                    <span>Sales - 587</span>
                  </div>
                  <p>Fruits (5) | Vegetables (30) | Snacks (09) </p>
                </div>
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
            >
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#vendors_tab_two"
              >
                <div className="bb-vendors-box">
                  <div className="inner-heading">
                    <h5>Eelna Fashion Pvt. Ltd.</h5>
                    <span>Sales - 428</span>
                  </div>
                  <p>Fruits (8) | Vegetables (15) | Snacks (04) </p>
                </div>
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#vendors_tab_three"
              >
                <div className="bb-vendors-box">
                  <div className="inner-heading">
                    <h5>Mario Fashion Pvt. Ltd.</h5>
                    <span>Sales - 1024</span>
                  </div>
                  <p>Fruits (16) | Vegetables (42) | Snacks (18) </p>
                </div>
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={800}
            >
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#vendors_tab_four"
              >
                <div className="bb-vendors-box">
                  <div className="inner-heading">
                    <h5>Maria Fashion Pvt. Ltd.</h5>
                    <span>Sales - 210</span>
                  </div>
                  <p>Fruits (2) | Vegetables (10) | Snacks (03) </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="section-testimonials padding-tb-100 p-0-991">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="bb-testimonials"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={400}
          >
            <img
              src="assets/img/testimonials/img-1.png"
              alt="testimonials-1"
              className="testimonials-img-1"
            />
            <img
              src="assets/img/testimonials/img-2.png"
              alt="testimonials-2"
              className="testimonials-img-2"
            />

            <div className="inner-banner">
              <h4>Testimonials</h4>
            </div>
            <div className="owl-carousel testimonials-slider">
              <div className="bb-testimonials-inner">
                <div className="row">
                  <div className="col-md-4 col-12 d-none-767">
                    <div className="testimonials-image">
                      <img
                        src="assets/img/testimonials/1.jpg"
                        alt="testimonials"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-12">
                    <div className="testimonials-contact">
                      <div className="user">
                        <img
                          src="assets/img/testimonials/1.jpg"
                          alt="testimonials"
                        />
                        <div className="detail">
                          <h4>Isabella Oliver</h4>
                          <span>(Manager)</span>
                        </div>
                      </div>
                      <div className="inner-contact">
                        <p>
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto at sint eligendi possimus
                          perspiciatis asperiores reiciendis hic amet alias aut
                          quaerat maiores blanditiis."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bb-testimonials-inner">
                <div className="row">
                  <div className="col-md-4 col-12 d-none-767">
                    <div className="testimonials-image">
                      <img
                        src="assets/img/testimonials/2.jpg"
                        alt="testimonials"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-12">
                    <div className="testimonials-contact">
                      <div className="user">
                        <img
                          src="assets/img/testimonials/2.jpg"
                          alt="testimonials"
                        />
                        <div className="detail">
                          <h4>Nikki Albart</h4>
                          <span>(Team Leader)</span>
                        </div>
                      </div>
                      <div className="inner-contact">
                        <p>
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto at sint eligendi possimus
                          perspiciatis asperiores reiciendis hic amet alias aut
                          quaerat maiores blanditiis."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog */}
  <section className="section-blog padding-b-50 padding-t-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="blog-2-slider owl-carousel">
            <div
              className="blog-2-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <div className="blog-img">
                <img src="assets/img/blog/7.jpg" alt="blog-7" />
              </div>
              <div className="blog-contact">
                <span>June 30,2024 - organic</span>
                <h4>
                  <a href="blog-detail-left-sidebar.html">
                    Marketing Guide: 5 Steps to Success.
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="blog-2-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
            >
              <div className="blog-img">
                <img src="assets/img/blog/8.jpg" alt="blog-8" />
              </div>
              <div className="blog-contact">
                <span>May 10,2025 - organic</span>
                <h4>
                  <a href="blog-detail-left-sidebar.html">
                    Best way to solve business deal issue.
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="blog-2-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <div className="blog-img">
                <img src="assets/img/blog/9.jpg" alt="blog-9" />
              </div>
              <div className="blog-contact">
                <span>Jan 10,2025 - organic</span>
                <h4>
                  <a href="blog-detail-left-sidebar.html">
                    Business ideas to grow your business.
                  </a>
                </h4>
              </div>
            </div>
            <div
              className="blog-2-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={800}
            >
              <div className="blog-img">
                <img src="assets/img/blog/10.jpg" alt="blog-10" />
              </div>
              <div className="blog-contact">
                <span>Feb 12,2025 - organic</span>
                <h4>
                  <a href="blog-detail-left-sidebar.html">
                    31 customer business stats know in 2026.
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram */}
  <section className="section-instagram padding-tb-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bb-title">
            <h3>#Insta</h3>
          </div>
          <div className="bb-instagram-slider owl-carousel">
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/1.jpg" alt="instagram-1" />
                </a>
              </div>
            </div>
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/2.jpg" alt="instagram-2" />
                </a>
              </div>
            </div>
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/3.jpg" alt="instagram-3" />
                </a>
              </div>
            </div>
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/4.jpg" alt="instagram-4" />
                </a>
              </div>
            </div>
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/5.jpg" alt="instagram-5" />
                </a>
              </div>
            </div>
            <div
              className="bb-instagram-card"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={700}
            >
              <div className="instagram-img">
                <a href="javascript:void(0)">
                  <img src="assets/img/instagram/6.jpg" alt="instagram-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bb-footer margin-t-50">
    <div className="footer-directory padding-tb-50">
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            <div className="directory-title">
              <h4>Brands Directory</h4>
            </div>
            <div className="directory-contact">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="inner-contact">
                    <ul>
                      <li>
                        <span>Jewellery :</span>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Necklace</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Earrings</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Couple Rings</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Pendants</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">crystal</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Bangles</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Bracelets</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Nose pin</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Chain</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Earrings</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Couple Rings</a>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-contact">
                    <ul>
                      <li>
                        <span>Footwear :</span>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Sport</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Formal</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Boots</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Casual</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Cowboy Shoes</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Safety Shoes</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">
                          Party Wear Shoes
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Branded</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">First copy</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Long Shoes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="inner-contact">
                    <ul>
                      <li>
                        <span>Fashion :</span>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">T-Shirt</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">
                          Short &amp; Jeans
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Jacket</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">
                          Dress &amp; Frock
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Inner wear</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Hosiery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-contact">
                    <ul>
                      <li>
                        <span>Cosmetics :</span>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Shampoo</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Body wash</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">face wash</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Makeup kit</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Liner</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Lipstick</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Perfume</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Body Shop</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Scrub</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Hair Gel</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Hair colors</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Hair Dye</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Sunscreen</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Skin Lotion</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Liner</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-3.html">Lipstick</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-container">
      <div className="footer-top padding-tb-50">
        <div className="container">
          <div
            className="row m-minus-991"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          >
            <div className="col-sm-12 col-lg-3 bb-footer-cat">
              <div className="bb-footer-widget bb-footer-company">
                <img
                  src="assets/img/logo/logo.png"
                  className="bb-footer-logo"
                  alt="footer logo"
                />
                <img
                  src="assets/img/logo/logo-dark.png"
                  className="bb-footer-dark-logo"
                  alt="footer logo"
                />
                <p className="bb-footer-detail">
                  BlueBerry is the biggest market of grocery products. Get your
                  daily needs from our store.
                </p>
                <div className="bb-app-store">
                  <a href="javascript:void(0)" className="app-img">
                    <img
                      src="assets/img/app/android.png"
                      className="adroid"
                      alt="apple"
                    />
                  </a>
                  <a href="javascript:void(0)" className="app-img">
                    <img
                      src="assets/img/app/apple.png"
                      className="apple"
                      alt="apple"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2 bb-footer-info">
              <div className="bb-footer-widget">
                <h4 className="bb-footer-heading">Category</h4>
                <div className="bb-footer-links bb-footer-dropdown">
                  <ul className="align-items-center">
                    <li className="bb-footer-link">
                      <a href="shop-left-sidebar-col-3.html">
                        Dairy &amp; Milk
                      </a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-banner-left-sidebar-col-3.html">
                        Snack &amp; Spice
                      </a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-full-width-col-5.html">Fast Food</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-list-left-sidebar.html">
                        Juice &amp; Drinks
                      </a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-list-full-col-2.html">Bakery</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-banner-right-sidebar-col-4.html">Seafood</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2 bb-footer-account">
              <div className="bb-footer-widget">
                <h4 className="bb-footer-heading">Company</h4>
                <div className="bb-footer-links bb-footer-dropdown">
                  <ul className="align-items-center">
                    <li className="bb-footer-link">
                      <a href="about-us.html">About us</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="track-order.html">Delivery</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="faq.html">Legal Notice</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="terms.html">Terms &amp; conditions</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="checkout.html">Secure payment</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="contact-us.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2 bb-footer-service">
              <div className="bb-footer-widget">
                <h4 className="bb-footer-heading">Account</h4>
                <div className="bb-footer-links bb-footer-dropdown">
                  <ul className="align-items-center">
                    <li className="bb-footer-link">
                      <a href="login.html">Sign In</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="faq.html">Return Policy</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="shop-left-sidebar-col-3.html">Become a Vendor</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="product-left-sidebar.html">Affiliate Program</a>
                    </li>
                    <li className="bb-footer-link">
                      <a href="checkout.html">Payments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 bb-footer-cont-social">
              <div className="bb-footer-contact">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading">Contact</h4>
                  <div className="bb-footer-links bb-footer-dropdown">
                    <ul className="align-items-center">
                      <li className="bb-footer-link bb-foo-location">
                        <span className="mt-15px">
                          <i className="ri-map-pin-line" />
                        </span>
                        <p>
                          971 Lajamni, Motavarachha, Surat, Gujarat, Bharat
                          394101.
                        </p>
                      </li>
                      <li className="bb-footer-link bb-foo-call">
                        <span>
                          <i className="ri-whatsapp-line" />
                        </span>
                        <a href="tel:+009876543210">+00 9876543210</a>
                      </li>
                      <li className="bb-footer-link bb-foo-mail">
                        <span>
                          <i className="ri-mail-line" />
                        </span>
                        <a href="mailto:example@email.com">example@email.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bb-footer-social">
                <div className="bb-footer-widget">
                  <div className="bb-footer-links bb-footer-dropdown">
                    <ul className="align-items-center">
                      <li className="bb-footer-link">
                        <a href="javascript:void(0)">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li className="bb-footer-link">
                        <a href="javascript:void(0)">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                      <li className="bb-footer-link">
                        <a href="javascript:void(0)">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                      <li className="bb-footer-link">
                        <a href="javascript:void(0)">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="bb-bottom-info">
              <div className="footer-copy">
                <div className="footer-bottom-copy ">
                  <div className="bb-copy">
                    Copyright © <span id="copyright_year" />
                    <a className="site-name" href="index.html">
                      BlueBerry
                    </a>{" "}
                    all rights reserved.
                  </div>
                </div>
              </div>
              <div className="footer-bottom-right">
                <div className="footer-bottom-payment d-flex justify-content-center">
                  <div className="payment-link">
                    <img src="assets/img/payment/payment.png" alt="payment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Cart sidebar */}
  <div className="bb-side-cart-overlay" />
  <div className="bb-side-cart">
    <div className="row h-full">
      <div className="col-md-5 col-12 d-none-767">
        <div className="bb-top-contact">
          <div className="bb-cart-title">
            <h4>Related Items</h4>
          </div>
        </div>
        <div className="bb-cart-box mb-minus-24 cart-related bb-border-right">
          <div className="bb-deal-card mb-24">
            <div className="bb-pro-box">
              <div className="bb-pro-img">
                <span className="flags">
                  <span>Hot</span>
                </span>
                <a href="javascript:void(0)">
                  <div className="inner-img">
                    <img
                      className="main-img"
                      src="assets/img/product/2.jpg"
                      alt="product-2"
                    />
                    <img
                      className="hover-img"
                      src="assets/img/product/back-2.jpg"
                      alt="product-2"
                    />
                  </div>
                </a>
                <ul className="bb-pro-actions">
                  <li className="bb-btn-group">
                    <a href="javascript:void(0)" title="Wishlist">
                      <i className="ri-heart-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a
                      href="javascript:void(0)"
                      data-link-action="quickview"
                      title="Quick View"
                      data-bs-toggle="modal"
                      data-bs-target="#bry_quickview_modal"
                    >
                      <i className="ri-eye-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a href="compare.html" title="Compare">
                      <i className="ri-repeat-line" />
                    </a>
                  </li>
                  <li className="bb-btn-group">
                    <a href="javascript:void(0)" title="Add To Cart">
                      <i className="ri-shopping-bag-4-line" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bb-pro-contact">
                <div className="bb-pro-subtitle">
                  <a href="shop-left-sidebar-col-3.html">Juice</a>
                  <span className="bb-pro-rating">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-line" />
                  </span>
                </div>
                <h4 className="bb-pro-title">
                  <a href="product-left-sidebar.html">
                    Organic Apple Juice Pack
                  </a>
                </h4>
                <div className="bb-price">
                  <div className="inner-price">
                    <span className="new-price">$15</span>
                    <span className="item-left">3 Left</span>
                  </div>
                  <span className="last-items">100 ml</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-cart-banner mb-24">
            <div className="banner">
              <img
                src="assets/img/category/cart-banner.jpg"
                alt="cart-banner"
              />
              <div className="detail">
                <h4>Organic &amp; Fresh</h4>
                <h3>Vegetables</h3>
                <a href="shop-left-sidebar-col-3.html">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="col-md-7 col-12">

  <div className="bb-inner-cart">

    <div className="bb-top-contact">

      <div className="bb-cart-title">

        <h4> My cart</h4>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="bb-cart-close"
          title="Close Cart"
        />

      </div>

    </div>

    <div className="bb-cart-box item">

      <ul className="bb-cart-items">

        {cartItems.length === 0 ? (

          <li className="cart-sidebar-list text-center p-4">
            Cart is empty
          </li>

        ) : (

          cartItems.map((item:any) => (

            <li
              className="cart-sidebar-list"
              key={item.id}
            >

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

              <a
                href={`/product/${item.slug}`}
                className="bb-cart-pro-img"
              >

                <img
                  src={`http://127.0.0.1:8000${item.front_image}`}
                  alt={item.name}
                />

              </a>

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
                    name="bb-qtybtn"
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

  {/* Quick view Modal */}
  <div
    className="modal fade quickview-modal"
    id="bry_quickview_modal"
    tabIndex={-1}
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button
          type="button"
          className="qty-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          title="Close"
        />
        <div className="modal-body">
          <div className="row mb-minus-24">
            <div className="col-md-5 col-sm-12 col-xs-12 mb-24">
              <div className="single-pro-img single-pro-img-no-sidebar">
                <div className="single-product-scroll">
                  <div className="single-slide zoom-image-hover">
                    <img
                      className="img-responsive"
                        src={`http://127.0.0.1:8000${selectedProduct?.front_image}`}
                      alt="product-img-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 mb-24">
              <div className="quickview-pro-content">
<h5 className="bb-quick-title">

  <a href={`/product/${selectedProduct?.slug}`}>

    {selectedProduct?.name}

  </a>

</h5>
                <div className="bb-pro-rating">
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-fill" />
                  <i className="ri-star-line" />
                </div>
                <div className="bb-quickview-desc">
  {selectedProduct?.description}

                </div>
                <div className="bb-quickview-price">
                  <span className="new-price">₹{selectedProduct?.sale_price}</span>
                  <span className="old-price">₹{selectedProduct?.mrp}</span>
                </div>
                <div className="bb-pro-variation">
                  <ul>
                    <li className="active">
                      <a
                        href="javascript:void(0)"
                        className="bb-opt-sz"
                        data-tooltip="Small"
                      >
                        250g
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="bb-opt-sz"
                        data-tooltip="Medium"
                      >
                        500g
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="bb-opt-sz"
                        data-tooltip="Large"
                      >
                        1kg
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="bb-opt-sz"
                        data-tooltip="Extra Large"
                      >
                        2kg
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bb-quickview-qty">
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="bb-qtybtn"
                      defaultValue={1}
                    />
                  </div>
                  <div className="bb-quickview-cart">
                    <button type="button" className="bb-btn-1">
                      <i className="ri-shopping-bag-line" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter Modal */}
  <div className="bb-popnews-bg" />
  <div className="bb-popnews-box">
    <div className="bb-popnews-close" title="Close" />
    <div className="row">
      <div className="col-md-6 col-12">
        <img src="assets/img/newsletter/newsletter.png" alt="newsletter" />
      </div>
      <div className="col-md-6 col-12">
        <div className="bb-popnews-box-content">
          <h2>VaisKart</h2>
          <p>
            Subscribe the VaisKart to get in touch and get the future update.
          </p>
          <form className="bb-popnews-form" action="#" method="post">
            <input
              type="email"
              name="newsemail"
              placeholder="Email Address"
              required=""
            />
            <button type="button" className="bb-btn-2" name="subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Tools Sidebar */}


</>

  );
}
