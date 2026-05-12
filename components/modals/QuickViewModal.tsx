"use client";

type QuickViewModalProps = {
  selectedProduct: any;
};

export default function QuickViewModal({
  selectedProduct,
}: QuickViewModalProps) {
  return (
    <div
      className="modal fade quickview-modal"
      id="bry_quickview_modal"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">

        <div className="modal-content">

          <button
            type="button"
            className="qty-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            title="Close"
          />

          <div className="modal-body">

            <div className="row mb-minus-24">

              {/* Product Image */}
              <div className="col-md-5 col-sm-12 col-xs-12 mb-24">

                <div className="single-pro-img single-pro-img-no-sidebar">

                  <div className="single-product-scroll">

                    <div className="single-slide zoom-image-hover">

                      <img
                        className="img-responsive"
                        src={`http://127.0.0.1:8000${selectedProduct?.front_image}`}
                        alt={selectedProduct?.name}
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* Product Details */}
              <div className="col-md-7 col-sm-12 col-xs-12 mb-24">

                <div className="quickview-pro-content">

                  <h5 className="bb-quick-title">

                    <a href={`/product/${selectedProduct?.slug}`}>
                      {selectedProduct?.name}
                    </a>

                  </h5>

                  {/* Rating */}
                  <div className="bb-pro-rating">
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-line" />
                  </div>

                  {/* Description */}
                  <div className="bb-quickview-desc">
                    {selectedProduct?.description}
                  </div>

                  {/* Price */}
                  <div className="bb-quickview-price">

                    <span className="new-price">
                      ₹{selectedProduct?.sale_price}
                    </span>

                    <span className="old-price">
                      ₹{selectedProduct?.mrp}
                    </span>

                  </div>

                  {/* Weight */}
                  <div className="bb-pro-variation">

                    <ul>

                      <li className="active">
                        <a href="#" className="bb-opt-sz">
                          250g
                        </a>
                      </li>

                      <li>
                        <a href="#" className="bb-opt-sz">
                          500g
                        </a>
                      </li>

                      <li>
                        <a href="#" className="bb-opt-sz">
                          1kg
                        </a>
                      </li>

                    </ul>

                  </div>

                  {/* Quantity */}
                  <div className="bb-quickview-qty">

                    <div className="qty-plus-minus">

                      <input
                        className="qty-input"
                        type="text"
                        defaultValue={1}
                      />

                    </div>

                    {/* Cart Button */}
                    <div className="bb-quickview-cart">

                      <button type="button" className="bb-btn-1">

                        <i className="ri-shopping-bag-line" />

                        Add To Cart

                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}