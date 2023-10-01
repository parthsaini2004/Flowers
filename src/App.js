import './App.css';
import React from "react";
import Catalog from "./components/Catalog";
import WhyChoose from "./components/WhyChoose;
import Reviews from './components/Reviews';
import Order from './components/Order';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { FlCarousal } from './components/FlCarousal';
import { Address } from './components/address';
import { Footer } from './components/footer';
import { AboutUs } from './components/aboutUs';

function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    <WhyChoose/>
    <Catalog/>
    <AboutUs />
    <Reviews />
    <Order />
    <FlCarousal/>
    <Address/>
    <Footer/>
    </>
  );
}

export default App;

