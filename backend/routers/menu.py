from fastapi import APIRouter
from sqlalchemy.orm import Session
from sqlalchemy import text

from database import SessionLocal

router = APIRouter()


# DB Session
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.get("/menu/categories")
def get_menu_categories():

    db: Session = SessionLocal()

    try:

        # Get unique categories
        categories_query = text("""
            SELECT DISTINCT category
            FROM products
            WHERE status = 'active'
            AND category IS NOT NULL
            ORDER BY category
        """)

        categories_result = db.execute(
            categories_query
        ).fetchall()

        menu = []

        # Loop categories
        for row in categories_result:

            category = row[0]

            # Get sizes for category
            sizes_query = text("""
                SELECT DISTINCT size
                FROM products
                WHERE category = :category
                AND status = 'active'
                AND size IS NOT NULL
                ORDER BY size
            """)

            sizes_result = db.execute(
                sizes_query,
                {
                    "category": category
                }
            ).fetchall()

            sizes = [s[0] for s in sizes_result]

            menu.append({
                "category": category,
                "sizes": sizes
            })

        return {
            "status": True,
            "data": menu
        }

    finally:

        db.close()