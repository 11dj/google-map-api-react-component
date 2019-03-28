import React, { Component } from 'react';
import './App.css';
import Map from './map'
// import PlaceDetail from './placeDetail'
import { getDetail } from './placeDetail2'

class App extends Component {


  componentDidMount () {
    getDetail('Central ladprao').then( async res => {
      await console.log(res)
    })
  }

  render() {
    return (
      <div className="App">
        Hello
        <Map />
        {/* <PlaceDetail /> */}
      </div>
      
    );
  }
}

export default App;
