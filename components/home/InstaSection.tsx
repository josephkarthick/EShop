"use client";

import Image from "next/image";

const instagramPosts = [
  {
    image: "/assets/img/instagram/1.jpg",
    alt: "instagram-1",
  },
  {
    image: "/assets/img/instagram/2.jpg",
    alt: "instagram-2",
  },
  {
    image: "/assets/img/instagram/3.jpg",
    alt: "instagram-3",
  },
  {
    image: "/assets/img/instagram/4.jpg",
    alt: "instagram-4",
  },
  {
    image: "/assets/img/instagram/5.jpg",
    alt: "instagram-5",
  },
  {
    image: "/assets/img/instagram/6.jpg",
    alt: "instagram-6",
  },
];

export default function InstaSection() {
  return (
    <section className="section-instagram padding-tb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bb-title">
              <h3>#Insta</h3>
            </div>

            <div className="bb-instagram-slider owl-carousel">
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className="bb-instagram-card"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={(index + 2) * 100}
                >
                  <div className="instagram-img">
                    <a href="#">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        width={300}
                        height={300}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}