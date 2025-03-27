import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Video from './components/Video';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import EventReports from './components/EventReports';

function App() {
  return (
    <div className='afc_web_app'>
    <Navbar />
    <Home />
    <About/>
    <Projects />
    < Video />
    < Achievements/>
    <EventReports />
    <Team />
    <Gallery />
    <Sponsors/>
    <Contact />

    </div>
  );
}

export default App;