import React, { useState } from "react";
import "./index.css";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {isMobileNavOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <div className={`mobile-sidebar ${isMobileNavOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <a href="#" className="nav-link">
            Support
          </a>
          <a href="#" className="nav-link">
            Export
          </a>
          <a href="#" className="nav-link">
            Recall
          </a>
          <a href="#" className="nav-link">
            Products
          </a>

          <div className="d-flex gap-3 mt-3">
            <button className="btn text-white" aria-label="Support">
              <i className="bi bi-headset fs-5"></i>
            </button>
            <button
              className="btn text-white position-relative"
              aria-label="Cart"
            >
              <i className="bi bi-cart fs-5"></i>
              <span className="cart-count">0</span>
            </button>
          </div>
        </nav>
      </div>

      <header className="header sticky-top">
        <div className="header-inner py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <button
              className="hamburger d-lg-none me-2"
              onClick={() => setMobileNavOpen(!isMobileNavOpen)}
            >
              <i className="bi bi-list fs-4 text-dark"></i>
            </button>
            <div className="d-none d-lg-block">
              <img
                src="/assets/logo/logo.png"
                alt="Lolypoly"
                className="logo-img"
              />
            </div>
          </div>

          <div className="logo-center-mobile d-lg-none position-absolute start-50 translate-middle-x">
            <img
              src="/assets/logo/logo.png"
              alt="Lolypoly"
              className="logo-img"
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <nav className="d-none d-lg-flex nav-links gap-4 nav-center">
              <a href="#" className="nav-link-top">
                Support
              </a>
              <a href="#" className="nav-link-top">
                Export
              </a>
              <a href="#" className="nav-link-top">
                Recall
              </a>
              <a href="#" className="nav-link-top">
                Products
              </a>
            </nav>

            <button className="btn" aria-label="Search">
              <i className="bi bi-search fs-5 text-dark"></i>
            </button>

            <div className="d-none d-sm-flex align-items-center gap-2">
              <button className="btn" aria-label="Support">
                <i className="bi bi-headset fs-5 text-dark"></i>
              </button>
              <button className="btn position-relative" aria-label="Cart">
                <i className="bi bi-cart fs-5 text-dark"></i>
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
