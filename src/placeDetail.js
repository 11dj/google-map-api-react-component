import React, { Component } from 'react';

class PlaceDetail extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.initMap('siam paragon')
  }

  initMap (placeName) {
    let map = new window.google.maps.Map('', {});
    const service = new window.google.maps.places.PlacesService(map)
    let request = {
      query: placeName,
      fields: ['place_id']
    };

    service.findPlaceFromQuery(request, function(place, status) {
      console.log('placeId', place[0].place_id)
      service.getDetails({
        placeId: place[0].place_id,
        fields: ['name', 'rating', 'opening_hours']
      }, function callback(placeD, statusD) {
        console.log('Detail rating', placeD.rating)
        console.log('Detail opening_now', placeD.opening_hours.open_now)
        console.log('Detail opening_hours', placeD.opening_hours)
      })
    });
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id="map" />
    );
  }
}

export default PlaceDetail;