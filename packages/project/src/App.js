import React, { Component } from 'react';
import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';
import Header from 'components/lib/Header';
import Footer from 'components/lib/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Another />
        <Hello />
        <Footer />
      </div>
    );
  }
}

export default App;
