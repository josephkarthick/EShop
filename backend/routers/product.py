from fastapi import (
    APIRouter,
    Depends,
    UploadFile,
    File,
    HTTPException
)

from sqlalchemy.orm import Session

from database import SessionLocal

from models.product import Product

from schemas.product import (
    ProductCreate,
    ProductResponse
)

import shutil
import os


router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


# Database Session
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# Upload Product Image
@router.post("/upload")
def upload_product_image(
    file: UploadFile = File(...)
):

    upload_dir = "uploads/products"

    os.makedirs(upload_dir, exist_ok=True)

    file_path = f"{upload_dir}/{file.filename}"

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {

        "filename": file.filename,

        "path": f"/{file_path}"

    }


# Create Product
@router.post("/", response_model=ProductResponse)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    # Check SKU already exists
    existing_sku = db.query(Product).filter(
        Product.sku == product.sku
    ).first()

    if existing_sku:

        raise HTTPException(
            status_code=400,
            detail="SKU already exists"
        )

    # Check slug already exists
    existing_slug = db.query(Product).filter(
        Product.slug == product.slug
    ).first()

    if existing_slug:

        raise HTTPException(
            status_code=400,
            detail="Slug already exists"
        )

    # Create Product
    db_product = Product(
        **product.dict()
    )

    db.add(db_product)

    db.commit()

    db.refresh(db_product)

    return db_product


# Get All Products
@router.get(
    "/",
    response_model=list[ProductResponse]
)
def get_products(
    db: Session = Depends(get_db)
):

    return db.query(Product).all()


# Get Single Product by Slug
@router.get(
    "/{slug}",
    response_model=ProductResponse
)
def get_product(
    slug: str,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.slug == slug
    ).first()

    if not product:

        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product