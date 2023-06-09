import React from "react";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "../reviews";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideCarousel = () => {
  return (
    <Slide autoPlay={false}>
      {reviews.map((el, index) => {
        return (
          <div className="each-slide-effect" key={index}>
            <img className="quote-img-top" src={el.image}></img>
            <TestimonialCard
              className="card-container"
              review={el.review}
              name={el.name}
              style={{ backgroundColor: el.style }}
              img={el.image}
            ></TestimonialCard>
            <img className="quote-img-bottom" src={el.image}></img>
          </div>
        );
      })}
    </Slide>
  );
};

export default SlideCarousel;
