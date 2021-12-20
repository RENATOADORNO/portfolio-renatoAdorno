import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import Qualification from './components/Qualification';
import './App.css';

function App() {
  return (
    <div className=''>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Header />
    </div>
  );
}

export default App;
