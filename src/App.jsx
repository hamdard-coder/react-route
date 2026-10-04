import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar/Navbar";
import Hero from "./assets/components/hero/Hero";
import Home from "./assets/components/home/Home";
import About from "./assets/components/about/About";
import Service from "./assets/components/service/Service";
import Contact from "./assets/components/contact/Contact";

const App = () => {
  return (
    <>
      <Hero />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
