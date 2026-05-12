"use client";

import Link from "next/link";

const compareItems = [
  {
    id: 1,
    title: "VaisKart Bags",
    image: "/assets/img/banner-one/one.png",
    bgClass: "bg-box-color-one",
    points: [
      "Strong & durable material",
      "Holds more weight safely",
      "Better leak protection",
      "Premium & long-lasting",
    ],
  },
  {
    id: 2,
    title: "Ordinary Bags",
    image: "/assets/img/banner-one/two.png",
    bgClass: "bg-box-color-two",
    points: [
      "Thin and easy to tear",
      "Limited load capacity",
      "May leak or smell",
      "Cheap but less reliable",
    ],
  },
];

export default function CompareSection() {
  return (
    <>
      {/* Compare Banner */}
      <section className="section-banner-one padding-tb-50">

        <div className="container">

          <div className="row mb-minus-24">

            {compareItems.map((item) => (

              <div
                key={item.id}
                className="col-lg-6 col-12 mb-24"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={400}
              >

                <div className={`banner-box ${item.bgClass}`}>

                  <div className="inner-banner-box">

                    {/* Image */}
                    <div className="side-image">

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                    </div>

                    {/* Content */}
                    <div className="inner-contact">

                      <h5>
                        {item.title}
                      </h5>

                      {item.points.map((point, index) => (

                        <p key={index}>
                          {point}
                        </p>

                      ))}

                      <Link
                        href="/products"
                        className="bb-btn-1"
                      >
                        Shop Now
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Bottom Banner */}
      <section className="section-banner-two margin-tb-50">

        <div className="container">

          <div className="row">

            <div className="col-12 banner-justify-box-contact">

              <div className="banner-two-box">

                <span>
                  25% Off
                </span>

                <h4>
                  Premium Garbage Bags Collection
                </h4>

                <Link
                  href="/products"
                  className="bb-btn-1"
                >
                  Shop Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}