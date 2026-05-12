"use client";

const services = [
  {
    id: 1,
    image: "/assets/img/services/1.png",
    title: "Free Shipping",
    description:
      "Free shipping on all orders above ₹999",
  },
  {
    id: 2,
    image: "/assets/img/services/2.png",
    title: "24x7 Support",
    description:
      "Contact us 24 hours a day, 7 days a week",
  },
  {
    id: 3,
    image: "/assets/img/services/3.png",
    title: "Easy Returns",
    description:
      "Simple and hassle-free replacement process",
  },
  {
    id: 4,
    image: "/assets/img/services/4.png",
    title: "Secure Payment",
    description:
      "100% secure payment protection",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-services padding-tb-50">

      <div className="container">

        <div className="row mb-minus-24">

          {services.map((service, index) => (

            <div
              key={service.id}
              className="col-lg-3 col-md-6 col-12 mb-24"
              data-aos="flip-up"
              data-aos-duration={1000}
              data-aos-delay={(index + 1) * 200}
            >

              <div className="bb-services-box">

                {/* Image */}
                <div className="services-img">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </div>

                {/* Content */}
                <div className="services-contact">

                  <h4>
                    {service.title}
                  </h4>

                  <p>
                    {service.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}