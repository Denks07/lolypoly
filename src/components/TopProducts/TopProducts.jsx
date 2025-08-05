import React from "react";
import "./index.css";

const products = [
  {
    id: 1,
    img: "assets/products/earphoneloly1.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
  {
    id: 2,
    img: "assets/products/phonecase1.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
  {
    id: 3,
    img: "assets/products/phonecase2.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
  {
    id: 4,
    img: "assets/products/phonecase3.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
  {
    id: 5,
    img: "assets/products/phonecase4.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
  {
    id: 6,
    img: "assets/products/phonecase5.png",
    name: "Product Name",
    price: "Rp.100.000",
  },
];

const TopProducts = () => {
  return (
    <section className="top-products my-5">
      <h2 className="section-title text-center">Lolypoly Top Products</h2>
      <div className="product-grid">
        {products.map(({ id, img, name, price }) => (
          <div key={id} className="product-card">
            <img src={img} alt={name} className="product-image" />
            <div className="product-details">
              <h6 className="product-name">{name}</h6>
              <p className="product-price">{price}</p>
              <button className="btn btn-primary btn-sm fw-bold">
                Show Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
