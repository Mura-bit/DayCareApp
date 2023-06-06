import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Zoom from "react-medium-image-zoom";
import backgroundOne from "./../../images/daycare.jpg";
import backgroundTwo from "./../../images/daycare2.jpg";
import backgroundThree from "./../../images/daycare3.jpg";
import chicken from "./../../images/79634-cute-dancing-chicken.json";
import "react-medium-image-zoom/dist/styles.css";
import "./imageGallery.style.css";

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <Player
        src={chicken}
        loop
        autoplay
        style={{ height: "300px", width: "300px" }}
        className="lottie-gallery-top"
      />
      <ImageList
        className="img-gallery"
        sx={{ width: 500, height: 500 }}
        cols={3}
        rowHeight={164}
      >
        <Zoom>
          <ImageListItem>
            <img src={backgroundOne} alt="daycare" loading="lazy" />
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundTwo} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundThree} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundOne} alt="daycare" loading="lazy" />
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundTwo} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundThree} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundOne} alt="daycare" loading="lazy" />
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundTwo} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
        <Zoom>
          <ImageListItem>
            <img src={backgroundThree} alt="daycare" loading="lazy" />{" "}
          </ImageListItem>
        </Zoom>
      </ImageList>
    </div>
  );
};

export default ImageGallery;
