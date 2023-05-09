import React from "react";
import img_card_desktop from "../assets/images/image-header-desktop.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="summary">
        <div className="container-text">
          <h2 className="title">
            Get <span className="insights">insights</span> that help your
            business grow.
          </h2>
          <p className="description">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="container-stats">
            <div className="stats">
              <h2 className="number">10k+</h2>
              <p className="category">companies</p>
            </div>
            <div className="stats">
              <h2 className="number">314</h2>
              <p className="category">templates</p>
            </div>
            <div className="stats">
              <h2 className="number">12m+</h2>
              <p className="category">queries</p>
            </div>
          </div>
        </div>
      </div>
      <div className="picture">
        <img src={img_card_desktop} alt="" />
      </div>
    </div>
  );
};

export default Card;
