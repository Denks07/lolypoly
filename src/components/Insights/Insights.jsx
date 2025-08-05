import React from "react";
import "./index.css";

const insights = [
  {
    title: "Design Your Own Case",
    description:
      "With this innovative tool, you can create a custom phone or tablet case that perfectly reflects your personal style. So why settle for a generic case when you can design your own? Start exploring our “Design Your Own Case” feature today and unleash your creativity!",
    linkText: "View More",
    bgImage: "assets/background/image-1.png",
  },
  {
    title: "Find Our Store",
    description:
      "Your perfect products are just around the corner. Click here to find our store and start shopping today!",
    linkText: "Check Store",
    bgImage: "assets/background/image-2.png",
  },
];

const Insights = () => {
  return (
    <section className="insights-section my-5">
      <h2 className="insights-heading">Explore Our Latest Insights</h2>
      <div className="insight-cards-wrapper">
        {insights.map(({ title, description, linkText, bgImage }, index) => (
          <div className="insight-card" key={index}>
            <div className="image-container">
              <img src={bgImage} alt={title} className="img-fluid" />
              <div className="overlay">
                <div className="overlay-title">{title}</div>
                <p className="overlay-description">{description}</p>
                <button className="overlay-button">{linkText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
