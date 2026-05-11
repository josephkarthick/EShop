from sqlalchemy import Column, Integer, String, Text, Numeric
from database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(Integer, primary_key=True)

    sku = Column(String(100), unique=True)

    name = Column(String(255))

    slug = Column(String(255), unique=True)

    description = Column(Text)

    category = Column(String(100))

    product_type = Column(String(100))

    label = Column(String(50))  # New / Trend / Sale

    size = Column(String(50))   # 100ml / 17x19 etc

    rating = Column(Integer, default=5)

    price = Column(Numeric(10,2))

    mrp = Column(Numeric(10,2))

    sale_price = Column(Numeric(10,2))

    stock = Column(Integer)

    front_image = Column(String(255))

    back_image = Column(String(255))

    status = Column(String(20), default="active")