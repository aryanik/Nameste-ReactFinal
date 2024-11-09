import React from "react";
import './shimmer.css';
const ShimmerCard = () => {
    return (
      <div className="shimmer-card" style={{ background: "#f0f0f0" }}>
        <div className="shimmer-image shimmer"></div>
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line shimmer"></div>
      </div>
    );
  };

  export default ShimmerCard;