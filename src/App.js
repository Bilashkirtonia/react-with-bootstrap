import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import AppNavbar from './components/Appnavbar.js'
import Hero from './components/hero'
import About from './components/About'
import Service from './components/Service.js'
import Work from './components/Work.js'
import Team from './components/Team.js'
import Testimonial from './components/Testimonial.js'
import Pricing from './components/Pricing.js'
import Blog from './components/Blog.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="Container">
      <header id='header'>
        <AppNavbar />
      </header>
      <main>
       <Hero/>
       <About/>
       <Service/>
       <Work/>
       <Team/>
       <Testimonial/>
       <Pricing/>
       <Blog/>
       <Contact/>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
      
    
    </div>
  );
}

export default App;
