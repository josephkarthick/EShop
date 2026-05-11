from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import SessionLocal
from models.product import Product
from schemas.product import ProductCreate, ProductResponse

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/", response_model=ProductResponse)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    db_product = Product(

        sku=product.sku,

        name=product.name,

        slug=product.slug,

        description=product.description,

        category=product.category,

        product_type=product.product_type,

        label=product.label,

        size=product.size,

        rating=product.rating,

        price=product.price,

        mrp=product.mrp,

        sale_price=product.sale_price,

        stock=product.stock,

        front_image=product.front_image,

        back_image=product.back_image
    )

    db.add(db_product)

    db.commit()

    db.refresh(db_product)

    return db_product


@router.get("/", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):

    return db.query(Product).all()