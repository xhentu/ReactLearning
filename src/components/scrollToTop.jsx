import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

useEffect(() => {
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        // Show button when scrolled down more than 200px
        setShow(scrollTop > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!show) return null;

return (
    <button
        style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            padding: "10px 20px",
            fontSize: "16px",
            zIndex: 1000,
            borderRadius: "24px",
            border: "2px solid #00bfff",
            background: "rgba(0, 191, 255, 0.10)",
            color: "#00bfff",
            cursor: "pointer",
            boxShadow: "0 0 8px 1px #00bfff, 0 2px 8px rgba(0,191,255,0.10)",
            backdropFilter: "blur(2px)",
            fontWeight: "bold",
            transition: "background 0.2s, color 0.2s, box-shadow 0.3s, transform 0.3s, opacity 0.4s",
            opacity: 1,
            animation: "scrollToTopFadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(0, 191, 255, 0.18)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow = "0 0 16px 3px #00bfff, 0 2px 8px rgba(0,191,255,0.18)";
            e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(0, 191, 255, 0.10)";
            e.currentTarget.style.color = "#00bfff";
            e.currentTarget.style.boxShadow = "0 0 8px 1px #00bfff, 0 2px 8px rgba(0,191,255,0.10)";
            e.currentTarget.style.transform = "scale(1)";
        }}
    >
        ↑
        <style>
            {`
            @keyframes scrollToTopFadeIn {
                0% {
                    opacity: 0;
                    transform: translateY(40px) scale(0.8);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            `}
        </style>
    </button>
);
}

export default ScrollToTopButton;