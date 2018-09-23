import React, { Component } from 'react';
import Header from 'components/lib/Header';
import Hero from 'components/lib/Hero';
import Benefits from 'components/lib/Benefits';
import BookingWidget from 'components/lib/BookingWidget';
import Panorama from 'components/lib/Panorama';
import Footer from 'components/lib/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Benefits />
        <BookingWidget />
        <Panorama />
        <Footer />
      </div>
    );
  }
}

export default App;
