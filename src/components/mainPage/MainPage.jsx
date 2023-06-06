import Button from "@mui/material/Button";
import backgroundOne from "./../../images/daycare.jpg";
import backgroundTwo from "./../../images/daycare2.jpg";
import backgroundThree from "./../../images/daycare3.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
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
          delay: 5000,
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
      </Swiper>
      <div className="main-page">
        <h1 className="title">Helen Lucy Daycare</h1>
        <ul className="main-page-list">
          <li className="main-list-item">
            Nurturing <span>Hearts</span>,
          </li>
          <li className="main-list-item">
            Growing <span>Minds</span>,
          </li>
          <li className="main-list-item">
            Where <span>Children</span> Shine!
          </li>
        </ul>
        <Button
          variant="contained"
          className="main-page-btn"
          style={{
            width: "200px",
            height: "3rem",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
