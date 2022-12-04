// IMPORTING STYLES

import "./style/general.css"
import 'aos/dist/aos.css';
import 'nprogress/nprogress.css'

// IMPORT PACKAGES

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from 'aos';

// IMPORT COMPONENTS

import NavigationBar from "./components/navbar.jsx"
import ScrollToTop from "./components/scrolltop";
import Footer from "./components/footer.jsx"
import MagicCursor from "./components/cursor";

// IMPORT DATA

import { MainContext as userContext } from "./context/userData.js"
import userData from "./data/user.js"

// IMPORT PAGES

import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/about"
import Contact from "./pages/contact"

export default function App() {

  Aos.init()

  let user = userData()

  return (
    <Router>
      <userContext.Provider value={user}>
      <div className="shadowed"/>
      <div className="wrap">
        <div className="wrapper">
          <NavigationBar/>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <MagicCursor/>
        </div>
        <Footer/>
      </div>
      </userContext.Provider>
    </Router>
  )

}