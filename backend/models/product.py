from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Numeric,
    Boolean
)

from database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(Integer, primary_key=True)

    # Basic Info
    sku = Column(String(100), unique=True)

    name = Column(String(255))

    slug = Column(String(255), unique=True)

    short_description = Column(Text)

    description = Column(Text)

    category = Column(String(100))

    brand = Column(String(100))

    product_type = Column(String(100))

    tags = Column(String(255))

    # Product Labels
    label = Column(String(50))  # New / Trend / Sale

    # Pricing
    price = Column(Numeric(10, 2))

    mrp = Column(Numeric(10, 2))

    sale_price = Column(Numeric(10, 2))

    tax_percent = Column(Numeric(5, 2), default=18)

    # Inventory
    stock = Column(Integer, default=0)

    minimum_order_qty = Column(Integer, default=1)

    maximum_order_qty = Column(Integer, default=10)

    # Ratings
    rating = Column(Integer, default=5)

    review_count = Column(Integer, default=0)

    # Product Size / Variant
    size = Column(String(50))   # 100ml / 17x19 etc

    weight = Column(String(50)) # 250g / 500g / 1kg

    # Product Media
    front_image = Column(String(255))

    back_image = Column(String(255))

    gallery_image_1 = Column(String(255))

    gallery_image_2 = Column(String(255))

    gallery_image_3 = Column(String(255))

    video_url = Column(String(255))

    # Product Details
    material = Column(String(255))

    color = Column(String(100))

    thickness = Column(String(100))

    capacity = Column(String(100))

    dimensions = Column(String(100))

    # SEO
    meta_title = Column(String(255))

    meta_description = Column(Text)

    meta_keywords = Column(Text)

    # Status
    is_featured = Column(Boolean, default=False)

    is_trending = Column(Boolean, default=False)

    is_new_arrival = Column(Boolean, default=False)
    
    is_day_of_the_deal = Column(Boolean, default=False)

    status = Column(String(20), default="active")
    