"use client";

type ProductCardProps = {
  product: any;
  setSelectedProduct: (product: any) => void;
  addToCart: (product: any) => void;
};

export default function ProductCard({
  product,
  setSelectedProduct,
  addToCart,
}: ProductCardProps) {
  return (
    <div className="bb-pro-box">

      {/* Image */}
      <div className="bb-pro-img">

        {/* Label */}
        <span className="flags">

          <span>
            {product.label || "New"}
          </span>

        </span>

        {/* Product Link */}
        <a href={`/product/${product.slug}`}>

          <div className="inner-img">

            <img
              className="main-img"
              src={`http://127.0.0.1:8000${product.front_image}`}
              alt={product.name}
            />

            <img
              className="hover-img"
              src={`http://127.0.0.1:8000${product.back_image}`}
              alt={product.name}
            />

          </div>

        </a>

        {/* Actions */}
        <ul className="bb-pro-actions">

          {/* Wishlist */}
          <li className="bb-btn-group">

            <a href="#" title="Wishlist">
              <i className="ri-heart-line" />
            </a>

          </li>

          {/* Quick View */}
          <li className="bb-btn-group">

            <a
              href="#"
              title="Quick View"
              data-bs-toggle="modal"
              data-bs-target="#bry_quickview_modal"
              onClick={() => setSelectedProduct(product)}
            >

              <i className="ri-eye-line" />

            </a>

          </li>

          {/* Compare */}
          <li className="bb-btn-group">

            <a href="#" title="Compare">
              <i className="ri-repeat-line" />
            </a>

          </li>

          {/* Add To Cart */}
          <li className="bb-btn-group">

            <button
              type="button"
              title="Add To Cart"
              className="border-0 bg-transparent"
              onClick={() => addToCart(product)}
            >

              <i className="ri-shopping-bag-4-line" />

            </button>

          </li>

        </ul>

      </div>

      {/* Content */}
      <div className="bb-pro-contact">

        {/* Category */}
        <div className="bb-pro-subtitle">

          <a href="#">
            {product.product_type || "Waste Bag"}
          </a>

          {/* Rating */}
          <span className="bb-pro-rating">

            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-line" />

          </span>

        </div>

        {/* Product Name */}
        <h4 className="bb-pro-title">

          <a href={`/product/${product.slug}`}>
            {product.name}
          </a>

        </h4>

        {/* Price */}
        <div className="bb-price">

          <div className="inner-price">

            <span className="new-price">
              ₹{product.sale_price}
            </span>

            <span className="old-price">
              ₹{product.mrp}
            </span>

          </div>

          {/* Stock */}
          <span className="last-items">

            {product.stock} Items

          </span>

        </div>

      </div>

    </div>
  );
}