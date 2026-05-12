"use client";

import Image from "next/image";

const vendors = [
  {
    id: "vendors_tab_one",
    name: "Mira Fashion Pvt. Ltd.",
    sales: "587",
    categories: "Fruits (5) | Vegetables (30) | Snacks (09)",
    mainImage: "/assets/img/vendors/img-1.jpg",
    vendorImage: "/assets/img/vendors/vendor-1.jpg",
    active: true,
  },
  {
    id: "vendors_tab_two",
    name: "Eelna Fashion Pvt. Ltd.",
    sales: "428",
    categories: "Fruits (8) | Vegetables (15) | Snacks (04)",
    mainImage: "/assets/img/vendors/img-2.jpg",
    vendorImage: "/assets/img/vendors/vendor-2.jpg",
  },
];

export default function VendorsSection() {
  return (
    <section className="section-vendors padding-t-50 padding-b-100">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-12">
            <div
              className="section-title bb-center"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="section-detail">
                <h2 className="bb-title">
                  Top <span>Vendors</span>
                </h2>

                <p>
                  Discover Our Trusted Partners: Excellence & Reliability in
                  Every choice
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mb-24">
            <div className="bb-vendors-img">
              <div className="tab-content">
                {vendors.map((vendor, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      vendor.active ? "show active" : ""
                    }`}
                    id={vendor.id}
                  >
                    <a href="#" className="bb-vendor-init">
                      <i className="ri-arrow-right-up-line" />
                    </a>

                    <Image
                      src={vendor.mainImage}
                      alt={vendor.name}
                      width={600}
                      height={500}
                    />

                    <div className="vendors-local-shape">
                      <div className="inner-shape" />

                      <Image
                        src={vendor.vendorImage}
                        alt={vendor.name}
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12 mb-24">
            <ul className="bb-vendors-tab-nav nav">
              {vendors.map((vendor, index) => (
                <li
                  key={index}
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={(index + 1) * 200}
                >
                  <a
                    className={`nav-link ${vendor.active ? "active" : ""}`}
                    data-bs-toggle="tab"
                    href={`#${vendor.id}`}
                  >
                    <div className="bb-vendors-box">
                      <div className="inner-heading">
                        <h5>{vendor.name}</h5>

                        <span>Sales - {vendor.sales}</span>
                      </div>

                      <p>{vendor.categories}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}