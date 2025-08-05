import React from "react";
import "./index.css";

const About = () => {
  return (
    <section className="about-section custom-about my-5 d-flex flex-column flex-md-row align-items-start">
      <div className="about-image-wrapper">
        <img
          src="/assets/about/people.png"
          alt="About Lolypoly"
          className="about-image"
        />
      </div>
      <div className="about-text ms-md-2 mt-4 mt-md-0 text-md-start text-center">
        <h2 className="about-title">About Lolypoly</h2>
        <p className="about-description">
          We are a fashion brand that is dedicated to bringing you the latest
          and most fashionable clothing and accessories. Our brand is all about
          helping you express your unique style and personality through your
          wardrobe. We believe that fashion should be fun, bold, and empowering,
          and that’s exactly what you’ll find when you shop with us.
        </p>
      </div>
    </section>
  );
};

export default About;
