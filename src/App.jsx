import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import HomePage from "./pages/home/HomePage";
// import TeamTCP from "./pages/teamTcp/TeamTcp"
// import Error404 from "./pages/Error404/Error404"
// import ContactUs from "./pages/contactUs/ContactUs"
// import FAQs from "./pages/faqs/FAQs"
// import Events from "./pages/events/Events"
// import Speakers from "./pages/speakers/Speakers"
// import Merchandise from "./pages/merchandise/Merchandise";
// import CountDown from "./pages/countDown/CountDown";
// import Games from "./pages/games/Games";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Route path="*" element={<Error404 />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/team" element={<TeamTCP />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/games" element={<Games />} />
            <Route path="/countdown" element={<CountDown />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
