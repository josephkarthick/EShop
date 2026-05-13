"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useCart } from "@/context/CartContext";

export default function Header() {

  const [menuData, setMenuData] = useState<any[]>([]);

  /* Global Cart */
  const {
    cartItems,
    setIsCartOpen,
  } = useCart();

  /* Fetch Dynamic Menu */
  useEffect(() => {

    fetch("http://127.0.0.1:8000/menu/categories")

      .then((res) => res.json())

      .then((data) => {

        setMenuData(data.data || []);

      })

      .catch((err) => {

        console.log("Menu API Error:", err);

      });

  }, []);

  return (

    <header className="bb-header">

      {/* Top Header */}
      <div className="top-header">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="inner-top-header">

                <div className="col-left-bar">

                  <Link href="/">
                    VaisKart Your Daily Support Partner
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Header */}
      <div className="bottom-header">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="inner-bottom-header">

                {/* Logo */}
                <div className="cols bb-logo-detail">

                  <div className="header-logo">

                    <Link href="/">

                      <Image
                        src="/assets/img/logo/logo.png"
                        alt="logo"
                        className="light"
                        width={180}
                        height={60}
                      />

                    </Link>

                  </div>

                </div>

                {/* Search */}
                <div className="cols">

                  <div className="header-search">

                    <form className="bb-btn-group-form">

                      <div className="inner-select">

                        <div className="custom-select">

                          <select>
                            <option>Garbage</option>
                          </select>

                        </div>

                      </div>

                      <input
                        className="form-control bb-search-bar"
                        placeholder="Search products..."
                        type="text"
                      />

                      <button
                        className="submit"
                        type="submit"
                      >
                        <i className="ri-search-line" />
                      </button>

                    </form>

                  </div>

                </div>

                {/* Icons */}
                <div className="cols bb-icons">

                  <div className="bb-flex-justify">

                    <div className="bb-header-buttons">

                      {/* Account */}
                      <div className="bb-acc-drop">

                        <a
                          href="#"
                          className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle"
                        >

                          <div className="header-icon">
                            <i className="ri-user-3-line" />
                          </div>

                          <div className="bb-btn-desc">

                            <span className="bb-btn-title">
                              Account
                            </span>

                            <span className="bb-btn-stitle">
                              Login
                            </span>

                          </div>

                        </a>

                        <ul className="bb-dropdown-menu">

                          <li>

                            <Link
                              className="dropdown-item"
                              href="/register"
                            >
                              Register
                            </Link>

                          </li>

                          <li>

                            <Link
                              className="dropdown-item"
                              href="/login"
                            >
                              Login
                            </Link>

                          </li>

                          <li>

                            <Link
                              className="dropdown-item"
                              href="/checkout"
                            >
                              Checkout
                            </Link>

                          </li>

                        </ul>

                      </div>

                      {/* Wishlist */}
                      <Link
                        href="/wishlist"
                        className="bb-header-btn bb-wish-toggle"
                      >

                        <div className="header-icon">
                          <i className="ri-heart-line" />
                        </div>

                        <div className="bb-btn-desc">

                          <span className="bb-btn-title">
                            <b>3</b> items
                          </span>

                          <span className="bb-btn-stitle">
                            Wishlist
                          </span>

                        </div>

                      </Link>

                      {/* Cart */}
                      <button
                        type="button"
                        className="bb-header-btn bb-cart-toggle"
                        onClick={() => setIsCartOpen(true)}
                      >

                        <div className="header-icon">

                          <i className="ri-shopping-cart-2-line" />

                          <span className="main-label-note-new" />

                        </div>

                        <div className="bb-btn-desc">

                          <span className="bb-btn-title">

                            <b className="bb-cart-count">

                              {cartItems.reduce(
                                (total, item) =>
                                  total + item.qty,
                                0
                              )}

                            </b>

                          </span>

                          <span className="bb-btn-stitle">
                            Cart
                          </span>

                        </div>

                      </button>

                      {/* Mobile Menu */}
                      <a
                        href="#"
                        className="bb-toggle-menu"
                      >

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

      {/* Main Menu */}
      <div className="bb-main-menu-desk">

        <div className="container">

          <div className="row">

            <div className="col-12">

              <div className="bb-inner-menu-desk">

                <div
                  className="bb-main-menu"
                  id="navbarSupportedContent"
                >

                  <ul className="navbar-nav">

                    {/* Home */}
                    <li className="nav-item">

                      <Link
                        className="nav-link"
                        href="/"
                      >
                        Home
                      </Link>

                    </li>

                    {/* Dynamic Products */}
                    <li className="nav-item bb-dropdown">

                      <a
                        className="nav-link bb-dropdown-item"
                        href="javascript:void(0)"
                      >
                        Products
                      </a>

                      <ul className="bb-dropdown-menu">

                        {menuData.map((item, index) => (

                          <li
                            className="bb-mega-dropdown"
                            key={index}
                          >

                            <a
                              className="bb-mega-item"
                              href="javascript:void(0)"
                            >
                              {item.category}
                            </a>

                            <ul className="bb-mega-menu">

                              {item.sizes.map(
                                (
                                  size: string,
                                  idx: number
                                ) => (

                                  <li key={idx}>

                                    <Link
                                      className="dropdown-item"
                                      href={`/product/${size.toLowerCase()}-garbage-bags`}
                                    >
                                      {size}
                                    </Link>

                                  </li>

                                )
                              )}

                            </ul>

                          </li>

                        ))}

                      </ul>

                    </li>

                    {/* Pages */}
                    <li className="nav-item bb-dropdown">

                      <a
                        className="nav-link bb-dropdown-item"
                        href="javascript:void(0)"
                      >
                        Pages
                      </a>

                      <ul className="bb-dropdown-menu">

                        <li>

                          <Link
                            className="dropdown-item"
                            href="/about"
                          >
                            About Us
                          </Link>

                        </li>

                        <li>

                          <Link
                            className="dropdown-item"
                            href="/contact"
                          >
                            Contact Us
                          </Link>

                        </li>

                      </ul>

                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>

  );
}