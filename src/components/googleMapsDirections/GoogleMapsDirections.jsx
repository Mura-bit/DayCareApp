import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import car from "./../../images/4966-onboarding-car.json";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../../theme";
import "./googleMapsDirections.style.css";

const GoogleMapsDirections = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="google-directions-bg"
        style={{ background: theme.palette.primary.main }}
      >
        <div
          className="google-directions-container"
          style={{ background: theme.palette.secondary.main }}
        >
          <h1>Your neighbourhood's best daycare</h1>
          <div className="google-directions-box">
            <div>
              <Player src={car} className="google-maps-player" loop autoplay />
              <h3>Located close to the highway</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2965.607973026248!2d-87.7918279!3d41.987226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc95b3afd064f%3A0xa40bfcc70b23822e!2sHelen%20Lucy%20Child%20Care%20Center!5e0!3m2!1spl!2sus!4v1686007611507!5m2!1sen!2sus"
              width="700"
              height="550"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="google-map-directions"
              title="google maps directions"
            ></iframe>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default GoogleMapsDirections;
