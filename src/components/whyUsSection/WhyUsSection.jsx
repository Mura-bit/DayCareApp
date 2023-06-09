import React from "react";
import "./whyUsSection.style.css";
import tiger from "./assets/tigerMama.svg";
import jellyfish from "./assets/jellyFish.svg";
import penguin from "./assets/penguinBabe.svg";
import elephant from "./assets/elephantPapa.svg";
import steps from "./img/lf20_ZiW5Nz.json";
import { Player } from "@lottiefiles/react-lottie-player";
import food from "./assets/diet.svg";
const WhyUsSection = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Why you should choose US?</h1>
        <h4>
          {/* <Player
            src={steps}
            loop
            autoplay
            style={{ width: "40px", height: "40px" }}
          /> */}
          From the moment children take their first steps in any of our centers.
        </h4>
      </div>
      <div className="info-container">
        <div className="item item1">
          <img src={penguin} alt="" width="50px" height="50px" />
          <h3 className="items-text-main"> State-of-The-Art-Facilities</h3>
          <p className="items-text1">
            Helen Lusys classrooms feature the best amenities. From the
            materials we use to construct our centers to childrens furniture
            toys and supplies our centers cut zero corners
          </p>
        </div>
        <div className="item item2">
          <img src={jellyfish} alt="" width="50px" height="50px" />
          <h3 className="items-text-main"> Community-Based Care </h3>
          <p className="items-text2">
            As a family-owned business, Helen Lusy believes that every Helen’s
            Lusy Center is an extension of family.
          </p>
        </div>
        <div className="item item3">
          <img src={elephant} alt="" width="50px" height="50px" />
          <h3 className="items-text">Our Team</h3>
          <p className="items-text3">
            From our directors and teachers, to teachers aides, we employ staff
            that are specialized in early childhood education, with a passion
            for education.
          </p>
        </div>
        <div className="item item4">
          {/* <img src={} alt="" width="30px" height="30px" /> */}
          <img src={food} alt="" width="50px" height="50px" />
          <h3 className="items-text">Children’s Land Difference</h3>
          <p className="items-text4">
            Fresh, organic foods,catered daily State of the art facilities Fine
            arts classes led by specialists Them atic Units with increasing
            exposure to STEAM activities
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
