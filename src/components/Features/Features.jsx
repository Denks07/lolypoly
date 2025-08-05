import React from "react";
import "./index.css";

const featuresData = [
  {
    icon: (
      <img
        src="assets/icons/fast-shipping.png"
        alt="Fast Shipping"
        className="feature-icon-img"
      />
    ),
    title: "FAST SHIPPING",
    description:
      "3-8 business days for your package to be delivered and 7-days hassle-free returns.",
  },
  {
    icon: (
      <img
        src="assets/icons/support-center.png"
        alt="Support Center"
        className="feature-icon-img"
      />
    ),
    title: "SUPPORT CENTER",
    description:
      "Get dedicated customer support you deserve.Find the answers to multiple frequently asked questions.",
  },
  {
    icon: (
      <img
        src="assets/icons/email-us.png"
        alt="Email Us"
        className="feature-icon-img"
      />
    ),
    title: "EMAIL US",
    description: (
      <>
        If you have any concerns or questions, we will be glad to solve them.
        Contact us via email at{" "}
        <a href="mailto:lolypoly.com" className="email-link">
          lolypoly.com.
        </a>
      </>
    ),
  },
];

const Features = () => {
  return (
    <section className="features-section">
      {featuresData.map(({ icon, title, description }, idx) => (
        <div key={idx} className="feature-card">
          <div className="feature-icon">{icon}</div>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
