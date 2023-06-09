import React from "react";
import NanniesCard from "./components/nanniesCard/NanniesCard";
import MainPage from "./components/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
// import Footer from "./components/footer/Footer";
import ImageGallery from "./components/imageGallery/ImageGallery";
import DaycareActiv from "./components/daycare-activ/DaycareActiv";
import GoogleMapsDirections from "./components/googleMapsDirections/GoogleMapsDirections";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./App.css";
import AgeGroup from "./components/ageGroup/AgeGroup";
import FaqsFunction from "./components/faqs/FaqsFunction.jsx";

import CallRequest from "./components/callRequest/CallRequest";
import SecondFooter from "./components/secondFooter/SecondFooter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <MainPage />
      <DaycareActiv />
      <Navigation />
      <ImageGallery />
      <AgeGroup />
      <NanniesCard />
      <GoogleMapsDirections />
      <FaqsFunction />
      <CallRequest />
      {/* <Footer /> */}
      <SecondFooter />
    </ThemeProvider>
  );
}

export default App;
