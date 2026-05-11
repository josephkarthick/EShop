from pydantic import BaseModel
from decimal import Decimal
from typing import Optional


class ProductCreate(BaseModel):

    sku: str

    name: str

    slug: str

    short_description: Optional[str] = None

    description: Optional[str] = None

    category: Optional[str] = None

    brand: Optional[str] = None

    product_type: Optional[str] = None

    tags: Optional[str] = None

    label: Optional[str] = None

    size: Optional[str] = None

    weight: Optional[str] = None

    rating: Optional[int] = 5

    review_count: Optional[int] = 0

    price: Optional[Decimal] = 0

    mrp: Optional[Decimal] = 0

    sale_price: Optional[Decimal] = 0

    tax_percent: Optional[Decimal] = 18

    stock: Optional[int] = 0

    minimum_order_qty: Optional[int] = 1

    maximum_order_qty: Optional[int] = 10

    front_image: Optional[str] = None

    back_image: Optional[str] = None

    gallery_image_1: Optional[str] = None

    gallery_image_2: Optional[str] = None

    gallery_image_3: Optional[str] = None

    video_url: Optional[str] = None

    material: Optional[str] = None

    color: Optional[str] = None

    thickness: Optional[str] = None

    capacity: Optional[str] = None

    dimensions: Optional[str] = None

    meta_title: Optional[str] = None

    meta_description: Optional[str] = None

    meta_keywords: Optional[str] = None

    is_featured: Optional[bool] = False

    is_trending: Optional[bool] = False

    is_new_arrival: Optional[bool] = False

    is_day_of_the_deal: Optional[bool] = False

    status: Optional[str] = "active"


class ProductResponse(ProductCreate):

    id: int

    class Config:

        from_attributes = True