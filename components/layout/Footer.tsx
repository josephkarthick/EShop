"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bb-footer margin-t-50">

      {/* Footer Top */}
      <div className="footer-container">
        <div className="footer-top padding-tb-50">
          <div className="container">

            <div className="row m-minus-991">

              {/* Company */}
              <div className="col-sm-12 col-lg-3 bb-footer-cat">
                <div className="bb-footer-widget bb-footer-company">

                  <Image
                    src="/assets/img/logo/logo.png"
                    className="bb-footer-logo"
                    alt="footer logo"
                    width={180}
                    height={60}
                  />

                  <p className="bb-footer-detail">
                    VaisKart provides strong, leak-proof garbage bags
                    designed for daily home and commercial use.
                  </p>

                </div>
              </div>

              {/* Category */}
              <div className="col-sm-12 col-lg-2 bb-footer-info">
                <div className="bb-footer-widget">

                  <h4 className="bb-footer-heading">
                    Categories
                  </h4>

                  <div className="bb-footer-links">
                    <ul>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Garbage Bags
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Kitchen Bags
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Office Use
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Industrial Bags
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>

              {/* Company */}
              <div className="col-sm-12 col-lg-2 bb-footer-account">
                <div className="bb-footer-widget">

                  <h4 className="bb-footer-heading">
                    Company
                  </h4>

                  <div className="bb-footer-links">
                    <ul>

                      <li className="bb-footer-link">
                        <Link href="#">
                          About Us
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Contact Us
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Terms & Conditions
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>

              {/* Account */}
              <div className="col-sm-12 col-lg-2 bb-footer-service">
                <div className="bb-footer-widget">

                  <h4 className="bb-footer-heading">
                    Account
                  </h4>

                  <div className="bb-footer-links">
                    <ul>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Login
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Register
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Cart
                        </Link>
                      </li>

                      <li className="bb-footer-link">
                        <Link href="#">
                          Checkout
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>

              {/* Contact */}
              <div className="col-sm-12 col-lg-3 bb-footer-cont-social">

                <div className="bb-footer-widget">

                  <h4 className="bb-footer-heading">
                    Contact
                  </h4>

                  <div className="bb-footer-links">

                    <ul>

                      <li className="bb-footer-link bb-foo-location">
                        <span>
                          <i className="ri-map-pin-line" />
                        </span>

                        <p>
                          Ambattur, Chennai, Tamil Nadu, India
                        </p>
                      </li>

                      <li className="bb-footer-link bb-foo-call">
                        <span>
                          <i className="ri-phone-line" />
                        </span>

                        <a href="tel:+919999999999">
                          +91 99999 99999
                        </a>
                      </li>

                      <li className="bb-footer-link bb-foo-mail">
                        <span>
                          <i className="ri-mail-line" />
                        </span>

                        <a href="mailto:info@vaiskart.com">
                          info@vaiskart.com
                        </a>
                      </li>

                    </ul>

                  </div>

                  {/* Social */}
                  <div className="bb-footer-social mt-4">

                    <ul className="d-flex gap-3">

                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="container">

            <div className="bb-bottom-info d-flex justify-content-between align-items-center flex-wrap">

              <div className="footer-copy">
                <div className="bb-copy">

                  Copyright © {new Date().getFullYear()}{" "}

                  <span className="site-name">
                    VaisKart
                  </span>

                  . All rights reserved.

                </div>
              </div>

              <div className="footer-bottom-payment">

                <Image
                  src="/assets/img/payment/payment.png"
                  alt="payment"
                  width={250}
                  height={40}
                />

              </div>

            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}