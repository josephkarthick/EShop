"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState<any>(null);

  const { addToCart } = useCart();

  /* Fetch Product */
  useEffect(() => {
    if (!slug) return;

    fetch(`http://127.0.0.1:8000/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Product Page */}
      <section className="section-product padding-tb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bb-single-pro">
                <div className="row">
                  {/* Product Image */}
                  <div className="col-lg-5 col-12 mb-24">
                    <div className="single-pro-slider">
                      <div className="single-product-cover">

                        {/* Front Image */}
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src={`http://127.0.0.1:8000${product.front_image}`}
                            alt={product.name}
                          />
                        </div>

                        {/* Back Image */}
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src={`http://127.0.0.1:8000${product.back_image}`}
                            alt={product.name}
                          />
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="col-lg-7 col-12 mb-24">
                    <div className="bb-single-pro-contact">

                      {/* Product Name */}
                      <div className="bb-sub-title">
                        <h4>{product.name}</h4>
                      </div>

                      {/* Rating */}
                      <div className="bb-single-rating">
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-line"></i>
                        </span>

                        <span className="bb-read-review">
                          | {product.review_count} Ratings
                        </span>
                      </div>

                      {/* Description */}
                      <p>{product.description}</p>

                      {/* Price */}
                      <div className="bb-single-price-wrap">

                        <div className="bb-single-price">
                          <div className="price">
                            <h5>₹{product.sale_price}</h5>
                          </div>

                          <div className="mrp">
                            <p>
                              M.R.P :
                              <span> ₹{product.mrp}</span>
                            </p>
                          </div>
                        </div>

                        {/* SKU + Stock */}
                        <div className="bb-single-price">
                          <div className="sku">
                            <h5>SKU#: {product.sku}</h5>
                          </div>

                          <div className="stock">
                            <span>
                              {product.stock > 0
                                ? "In stock"
                                : "Out of stock"}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Product Information */}
                      <div className="bb-single-list">
                        <ul>
                          <li>
                            <span>Category :</span> {product.category}
                          </li>

                          <li>
                            <span>Size :</span> {product.size}
                          </li>

                          <li>
                            <span>Material :</span> {product.material}
                          </li>

                          <li>
                            <span>Color :</span> {product.color}
                          </li>

                          <li>
                            <span>Thickness :</span> {product.thickness}
                          </li>

                          <li>
                            <span>Capacity :</span> {product.capacity}
                          </li>

                          <li>
                            <span>Dimensions :</span> {product.dimensions}
                          </li>

                          <li>
                            <span>Weight :</span> {product.weight}
                          </li>

                          <li>
                            <span>Brand :</span> {product.brand}
                          </li>
                        </ul>
                      </div>

                      {/* Add To Cart */}
                      <div className="bb-single-qty">
                        <div className="buttons">

                          <button
                            className="bb-btn-2"
                            onClick={() => addToCart(product)}
                          >
                            Add To Cart
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion */}
              <div className="bey-single-accordion">
                <div className="accordion">
                  <div className="accordion-item">

                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                      >
                        Product Detail
                      </button>
                    </h2>

                    <div className="accordion-body">
                      <p>{product.description}</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}