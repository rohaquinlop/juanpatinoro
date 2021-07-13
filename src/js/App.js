//import logo from '../img/logo.svg';
import '../css/App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Qualification from './Qualification.js';
import Services from './Services.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      {/*
      <img src={profilePicture}></img>
      */}
      <Header />

      <main className="main">
        <Home />

        <About />

        <Skills />

        <Qualification />

        <Services />

        <Portfolio />

        <Contact />

      </main>

      <Footer />

      <a href="#home" className="scrollup" id="scrollup">
        <i className="uil uil-arrow-up scrollupIcon"></i>
      </a>

    </div>
  );
}

export default App;
