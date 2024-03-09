import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Channel from "./Components/Channel/Channel";
import Video from "./Components/Video/Video";
import Error from "./Components/Error/Error";

function AuthenticatedApp() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Routes>
        <Route path="" element={<About />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/video/:user_id" element={<Video />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}


export default AuthenticatedApp;