import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
