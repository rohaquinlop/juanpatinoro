//import logo from '../img/logo.svg';
import '../css/App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Qualification from './Qualification.js';
import Services from './Services.js';

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

      </main>
    </div>
  );
}

export default App;
