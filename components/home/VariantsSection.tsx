"use client";

import Link from "next/link";

const variants = [
  {
    id: 1,
    name: "Lite",
    image: "/assets/img/category/Lite.png",
    items: "485 items",
    className: "category-items-1",
  },
  {
    id: 2,
    name: "Standard",
    image: "/assets/img/category/Standard.png",
    items: "291 items",
    className: "category-items-2",
  },
  {
    id: 3,
    name: "Plus",
    image: "/assets/img/category/Plus.png",
    items: "49 items",
    className: "category-items-3",
  },
  {
    id: 4,
    name: "Maxi",
    image: "/assets/img/category/Maxi.png",
    items: "08 items",
    className: "category-items-4",
  },
  {
    id: 5,
    name: "Pro Max",
    image: "/assets/img/category/Pro_Max.png",
    items: "08 items",
    className: "category-items-3",
  },
];

export default function VariantsSection() {
  return (
    <section className="section-category padding-tb-50">

      <div className="container">

        <div className="row mb-minus-24">

          {/* Left Banner */}
          <div className="col-lg-5 col-12 mb-24">

            <div className="bb-category-img">

              <img
                src="/assets/img/category/category.png"
                alt="category"
              />

              <div className="bb-offers">

                <span>
                  50% Off
                </span>

              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-12 mb-24">

            <div className="bb-category-contact">

              {/* Title */}
              <div
                className="category-title"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={600}
              >

                <h2>
                  Explore Variants
                </h2>

              </div>

              {/* Slider */}
              <div className="bb-category-block owl-carousel">

                {variants.map((variant, index) => (

                  <div
                    key={variant.id}
                    className={`bb-category-box ${variant.className}`}
                    data-aos="flip-left"
                    data-aos-duration={1000}
                    data-aos-delay={(index + 1) * 200}
                  >

                    {/* Image */}
                    <div className="category-image">

                      <img
                        src={variant.image}
                        alt={variant.name}
                      />

                    </div>

                    {/* Content */}
                    <div className="category-sub-contact">

                      <h5>

                        <Link href="/products">
                          {variant.name}
                        </Link>

                      </h5>

                      <p>
                        {variant.items}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}