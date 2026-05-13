from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from database import engine, Base

from models.product import Product

from routers.product import router as product_router
from routers.menu import router as menu_router


app = FastAPI()


# CORS
app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# Create Tables
Base.metadata.create_all(bind=engine)


# Static Upload Folder
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)


# Routers
app.include_router(product_router)
app.include_router(menu_router)


# Home Route
@app.get("/")
def home():

    return {

        "message": "Backend Working"

    }