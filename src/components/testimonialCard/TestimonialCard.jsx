import React from "react";
import Rating from "@mui/material/Rating";
import "./style.css";

const TestimonialCard = ({ className, review, name, style, img }) => {
  return (
    <div className={className} style={style}>
      <div className="review-box">
        <div className="rating-starts">
          <Rating
            className="review-star"
            name="read-only"
            value={5}
            readOnly
            sx={{ fontSize: 33 }}
          />
        </div>
        <p>{review}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
