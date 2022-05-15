import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/About/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonils from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonils />
      <Contact />
      <Footer />
    </>
  )
}

export default App