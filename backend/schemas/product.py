from pydantic import BaseModel
from decimal import Decimal


class ProductCreate(BaseModel):

    sku: str

    name: str

    slug: str

    description: str

    category: str

    product_type: str

    label: str

    size: str

    rating: int

    price: Decimal

    mrp: Decimal

    sale_price: Decimal

    stock: int

    front_image: str

    back_image: str


class ProductResponse(ProductCreate):

    id: int

    class Config:

        from_attributes = True