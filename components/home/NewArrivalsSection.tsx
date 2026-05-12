"use client";

import ProductCard from "@/components/products/ProductCard";

type NewArrivalsSectionProps = {
  products: any[];
  setSelectedProduct: (product: any) => void;
  addToCart: (product: any) => void;
};

export default function NewArrivalsSection({
  products,
  setSelectedProduct,
  addToCart,
}: NewArrivalsSectionProps) {
  return (
    <section className="section-product-tabs padding-tb-50">

      <div className="container">

        {/* Title */}
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

                <p>
                  Shop online for new arrivals and get free shipping!
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Products */}
        <div className="row mb-minus-24">

          {products.map((product: any, index: number) => (

            <div
              className="col-xl-3 col-md-4 col-6 mb-24 bb-product-box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={(index + 1) * 200}
              key={product.id}
            >

              <ProductCard
                product={product}
                setSelectedProduct={setSelectedProduct}
                addToCart={addToCart}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}