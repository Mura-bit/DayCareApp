import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ThemeProvider } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Zoom from "react-medium-image-zoom";
import backgroundOne from "./../../images/daycare.jpg";
import backgroundTwo from "./../../images/daycare2.jpg";
import backgroundThree from "./../../images/daycare3.jpg";
import cat from "./../../images/93682-cat-happy.json";
import theme from "./../../theme";
import "react-medium-image-zoom/dist/styles.css";

import "./imageGallery.style.css";

const ImageGallery = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="gallery-container"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <Player
          src={cat}
          loop
          autoplay
          style={{ height: "200px", width: "200px" }}
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
    </ThemeProvider>
  );
};

export default ImageGallery;
