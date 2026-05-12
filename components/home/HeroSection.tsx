"use client";

import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    className: "slide-1",
    offer: "Flat 30% Off",
    title: "Explore",
    highlight: "Strong",
    subtitle: "& Hygienic Garbage Bags",
    image: "/assets/img/hero/hero-1.png",
  },
  {
    id: 2,
    className: "slide-2",
    offer: "Flat 20% Off",
    title: "Explore",
    highlight: "Leak Proof",
    subtitle: "& Durable Bags",
    image: "/assets/img/hero/hero-2.png",
  },
  {
    id: 3,
    className: "slide-3",
    offer: "Flat 25% Off",
    title: "Premium",
    highlight: "Heavy Duty",
    subtitle: "& Commercial Bags",
    image: "/assets/img/hero/hero-3.png",
  },
];

export default function HeroSection() {
  return (
    <section className="section-hero margin-b-50 next">

      {/* Social */}
      <div className="bb-social-follow">

        <ul className="inner-links">

          <li>
            <a href="#">Fb</a>
          </li>

          <li>
            <a href="#">Li</a>
          </li>

          <li>
            <a href="#">Dr</a>
          </li>

          <li>
            <a href="#">In</a>
          </li>

        </ul>

      </div>

      {/* Hero Slider */}
      <div className="container">

        <div className="row">

          <div className="col-12">

            <div className="hero-slider swiper-container">

              <div className="swiper-wrapper">

                {heroSlides.map((slide) => (

                  <div
                    key={slide.id}
                    className={`swiper-slide ${slide.className}`}
                  >

                    <div className="row mb-minus-24">

                      {/* Content */}
                      <div className="col-lg-6 col-12 order-lg-1 order-2 mb-24">

                        <div className="hero-contact">

                          <p>{slide.offer}</p>

                          <h1>

                            {slide.title}{" "}

                            <span>
                              {slide.highlight}
                            </span>

                            <br />

                            {slide.subtitle}

                          </h1>

                          <Link
                            href="/products"
                            className="bb-btn-1"
                          >
                            Shop Now
                          </Link>

                        </div>

                      </div>

                      {/* Image */}
                      <div className="col-lg-6 col-12 order-lg-2 order-1 mb-24">

                        <div className="hero-image">

                          <img
                            src={slide.image}
                            alt={slide.highlight}
                            className="img-fluid"
                          />

                          {/* Shape */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 300 300"
                            className="animate-shape"
                          >

                            <linearGradient
                              id={`shape_${slide.id}`}
                              x1="100%"
                              x2="0%"
                              y1="100%"
                              y2="0%"
                            />

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

                ))}

              </div>

              {/* Pagination */}
              <div className="swiper-pagination swiper-pagination-white" />

              {/* Navigation */}
              <div className="swiper-buttons">

                <div className="swiper-button-next" />

                <div className="swiper-button-prev" />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}
      <div className="bb-scroll-Page">

        <span className="scroll-bar">

          <a href="#">
            Scroll Page
          </a>

        </span>

      </div>

    </section>
  );
}