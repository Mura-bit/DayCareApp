import Button from "@mui/material/Button";
import backgroundOne from "./../../images/daycare.jpg";
import backgroundTwo from "./../../images/daycare2.jpg";
import backgroundThree from "./../../images/daycare3.jpg";
import backgroundFour from "./../../images/cdc-8LITuYkZRIo-unsplash.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import theme from "../../theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./mainPage.style.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Swiper
        loop={true}
        speed={2000}
        spaceBetween={0}
        centeredSlides={true}
        allowTouchMove={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={backgroundOne} className="main-background" alt="children" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={backgroundTwo} className="main-background" alt="children" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={backgroundThree}
            className="main-background"
            alt="children"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={backgroundFour}
            className="main-background"
            alt="children"
          />
        </SwiperSlide>
      </Swiper>
      <div className="main-page">
        <h1 className="title">Helen Lucy Daycare</h1>
        <ul className="main-page-list">
          <li className="main-list-item-one">
            Nurturing{" "}
            <span style={{ color: theme.palette.secondary.main }}>Hearts</span>,
          </li>
          <li className="main-list-item-two">
            Growing{" "}
            <span style={{ color: theme.palette.secondary.main }}>Minds</span>,
          </li>
          <li className="main-list-item-three">
            Where{" "}
            <span style={{ color: theme.palette.secondary.main }}>
              Children
            </span>{" "}
            Shine!
          </li>
        </ul>
        <Button
          variant="contained"
          className="main-page-btn"
          style={{
            width: "300px",
            height: "4rem",
            textShadow: "1px 2px 2px rgba(0, 0, 0, 0.6)",
            fontSize: "1.5rem",
            color: "white",
            backgroundColor: theme.palette.accent.main,
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
