import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const bestProductItems = [
  {
    title: "BEST SELLER",
    subtitle: "Experience the Difference\nDiscover the Best",
    img: "/assets/products/bestproducts/bestone.png",
  },
  {
    title: "NEW IN",
    subtitle: "Crafted for Excellence",
    img: "/assets/products/bestproducts/besttwo.png",
  },
  {
    title: "DEALS",
    subtitle: "Unbeatable Value",
    img: "/assets/products/bestproducts/bestthree.png",
  },
];

const BestProducts = () => {
  return (
    <section className="best-products-section">
      <div className="d-flex justify-content-center flex-wrap gap-4 best-product-wrapper">
        {bestProductItems.map((item, idx) => (
          <div className="best-product-card" key={idx}>
            <div className="image-container">
              <img src={item.img} alt={item.title} className="img-fluid" />
              <div className="overlay">
                <div className="overlay-title">{item.subtitle}</div>
                <button className="overlay-button">{item.title}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
