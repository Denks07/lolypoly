import React, { useRef, useState, useEffect } from "react";
import "./index.css";

const categories = [
  { name: "SoundEdge", img: "/assets/products/earphone.png" },
  { name: "Powerbank", img: "/assets/products/powerbank.png" },
  { name: "Tampered Glass", img: "/assets/products/tamperedglass.png" },
  { name: "Audio", img: "/assets/products/earphoneloly.png" },
  { name: "Phone Case", img: "/assets/products/phonecase.png" },
  {
    name: "Magnetic Wireless Powerbank",
    img: "/assets/products/powebankloly.png",
  },
  // Tambahan untuk scroll panjang
  { name: "SoundEdge", img: "/assets/products/earphone.png" },
  { name: "Powerbank", img: "/assets/products/powerbank.png" },
  { name: "Tampered Glass", img: "/assets/products/tamperedglass.png" },
  { name: "Audio", img: "/assets/products/earphoneloly.png" },
  { name: "Phone Case", img: "/assets/products/phonecase.png" },
  {
    name: "Magnetic Wireless Powerbank",
    img: "/assets/products/powebankloly.png",
  },
];

const ProductCategory = () => {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const smoothScrollBy = (element, distance, duration) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      element.scrollLeft = start + distance * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    requestAnimationFrame(animateScroll);
  };

  const scrollLeft = () => {
    smoothScrollBy(scrollRef.current, -250, 600);
  };

  const scrollRight = () => {
    smoothScrollBy(scrollRef.current, 250, 600);
  };

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      setAtStart(el.scrollLeft === 0);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScrollPosition);

    window.addEventListener("resize", checkScrollPosition);

    return () => {
      if (el) el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <section className="category-wrapper">
      <h2 className="category-title">We Categorize - You Choose</h2>

      <div className="category-scroll-container">
        {!atStart && (
          <button className="scroll-btn left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left" />
          </button>
        )}

        <div className="scroll-blur left-blur" />
        <div className="category-scroll" ref={scrollRef}>
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
        <div className="scroll-blur right-blur" />

        {!atEnd && (
          <button className="scroll-btn right" onClick={scrollRight}>
            <i className="fas fa-chevron-right" />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCategory;
