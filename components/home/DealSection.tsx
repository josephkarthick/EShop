"use client";

import ProductCard from "@/components/products/ProductCard";

type DealSectionProps = {
  products: any[];
  setSelectedProduct: (product: any) => void;
};

export default function DealSection({
  products,
  setSelectedProduct,
}: DealSectionProps) {

  const dealProducts = products.filter(
    (product: any) => product.is_day_of_the_deal
  );

  return (
    <section className="section-deal padding-tb-50">

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

                  Day of the <span>Deal</span>

                </h2>

                <p>
                  Don&apos;t wait. The time will never be just right.
                </p>

              </div>

              {/* Timer */}
              <div
                id="dealend"
                className="dealend-timer"
              />

            </div>

          </div>

        </div>

        {/* Products */}
        <div className="row mb-minus-24">

          {dealProducts.map(
            (product: any, index: number) => (

              <div
                key={product.id}
                className="col-xl-3 col-md-4 col-6 mb-24"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={(index + 1) * 200}
              >

                <ProductCard
                  product={product}
                  setSelectedProduct={setSelectedProduct}
                />

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}