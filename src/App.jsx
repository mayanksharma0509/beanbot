import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/pages/Header";
import MyGames from "./assets/pages/MyGamePage/MyGames";
import "./assets/pages/styles/app.css"; 
import Footer from "./assets/pages/Footer";
import Aboutus from "./assets/pages/AboutPage/AboutUs";
import FrontPage from "./assets/pages/Frontpage/FrontPage";
import Contact from "./assets/pages/Contactus/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/My-Games" element={<MyGames />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
