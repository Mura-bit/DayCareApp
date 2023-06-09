import React from "react";
import read from "../images/read.png";
import talking from "../images/talking.png";
import play from "../images/alphabet.png";
import singing from "../images/singing.png";
import loyalty from "../images/loyalty.png";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../../theme";
import "./daycareActiv.style.css";

const DaycareActiv = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <h1>Daycare Activities</h1>
          <div
            className="activities"
            style={{ background: theme.palette.secondary.main }}
          >
            <div className="images">
              <img src={read} alt="read icon"></img>
            </div>
            <div className="text">
              <h3>Read</h3>
              <p>
                Storytime sessions foster a love for reading and language
                development as children listen to engaging tales.
              </p>
            </div>
          </div>

          <div
            className="activities"
            style={{ background: theme.palette.secondary.main }}
          >
            <div className="images">
              <img src={talking} alt="talking icon"></img>
            </div>
            <div className="text">
              <h3>Talk</h3>
              <p>
                In the talking session at daycare, children have the opportunity
                to enhance their communication and language skills.
              </p>
            </div>
          </div>

          <div
            className="activities"
            style={{ background: theme.palette.secondary.main }}
          >
            <div className="images">
              <img src={play} alt="playing icon"></img>
            </div>
            <div className="text">
              <h3>Play</h3>
              <p>
                Outdoor play sessions allow children to enjoy physical activity,
                run, jump, and explore the natural environment.
              </p>
            </div>
          </div>

          <div
            className="activities"
            style={{ background: theme.palette.secondary.main }}
          >
            <div className="images">
              <img src={singing} alt="singing icon"></img>
            </div>
            <div className="text">
              <h3>Music</h3>
              <p>
                Music and movement sessions offer an opportunity for children to
                explore rhythm and coordination through singing, dancing, and
                playing musical instruments.
              </p>
            </div>
          </div>

          <div
            className="activities"
            style={{ background: theme.palette.secondary.main }}
          >
            <div className="images">
              <img src={loyalty} alt="loyalty icon"></img>
            </div>
            <div className="text">
              <h3>Practice</h3>
              <p>
                Creative sessions involve arts and crafts projects, allowing
                children to express their creativity through drawing, painting,
                and crafting.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default DaycareActiv;
