"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Isabella Oliver",
    role: "Manager",
    image: "/assets/img/testimonials/1.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores.",
  },
  {
    name: "Nikki Albart",
    role: "Team Leader",
    image: "/assets/img/testimonials/2.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-testimonials padding-tb-100 p-0-991">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="bb-testimonials"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <Image
                src="/assets/img/testimonials/img-1.png"
                alt="testimonials"
                width={120}
                height={120}
                className="testimonials-img-1"
              />

              <Image
                src="/assets/img/testimonials/img-2.png"
                alt="testimonials"
                width={120}
                height={120}
                className="testimonials-img-2"
              />

              <div className="inner-banner">
                <h4>Testimonials</h4>
              </div>

              <div className="owl-carousel testimonials-slider">
                {testimonials.map((item, index) => (
                  <div className="bb-testimonials-inner" key={index}>
                    <div className="row">
                      <div className="col-md-4 col-12 d-none-767">
                        <div className="testimonials-image">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>

                      <div className="col-md-8 col-12">
                        <div className="testimonials-contact">
                          <div className="user">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={70}
                              height={70}
                            />

                            <div className="detail">
                              <h4>{item.name}</h4>

                              <span>({item.role})</span>
                            </div>
                          </div>

                          <div className="inner-contact">
                            <p>"{item.review}"</p>
                          </div>
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
  );
}