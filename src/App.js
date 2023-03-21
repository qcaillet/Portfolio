import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Games from "./components/Games/Games";
import Reacteroids from "./components/GameAsteroid/Reacteroids";

import { BrowserRouter , Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const [load, upadateLoad] = useState(true);
  const atGame = window.location.pathname.includes("gameAsteroids");
  // fonction qui recupere ? pour proteger la route return un boolean
  Games();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {!atGame && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/resume" Component={Resume} />
          <Route path="/game" Component={Games} />
          {/* protection de la route  */}
          {/* {Games ( */}
          {/* <Route path="/gameAsteroids" element={Reacteroids} /> */}
          {/* )} */}
        </Routes>
        {!atGame && <Footer />}
      </div>
    </BrowserRouter>
  );
};

export default App;
