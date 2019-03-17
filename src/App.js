import React, { Component } from 'react';
import './App.css';
import Map from './map'
import PlaceDetail from './placeDetail'

class App extends Component {


  render() {
    return (
      <div className="App">
        Hello
        {/* <Map /> */}
        <PlaceDetail />
      </div>
      
    );
  }
}

export default App;
