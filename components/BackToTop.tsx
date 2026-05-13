"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                background: "#6c4cf1",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                zIndex: 9999,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? "visible" : "hidden",
                transition: "all 0.3s ease",
            }}
        >
            <i className="ri-arrow-up-line"></i>
        </button>
    );
}