import React, { Component } from 'react';

class PlaceDetail extends Component {
  componentDidMount() {
    this.initMap()
  }

  initMap () {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.866, lng: 151.196},
      zoom: 15
    });

    const service = new window.google.maps.places.PlacesService(map)

    let request = {
      // placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
      query: 'Siam paragon',
      fields: ['name', 'formatted_address', 'place_id', 'geometry', 'opening_hours', 'rating'],
      locationBias: {lat: 37.402105, lng: -122.081974}
    };

    service.findPlaceFromQuery(request, function(place, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log('place', place)
        console.log('opening_hours', place[0].opening_hours)
        console.log('place.rating', place[0].rating)
      }
    });
    // service.getDetails(request, function(place, status) {
    //   if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //     console.log('opening_hours', place.opening_hours)
    //     console.log('place.rating', place.rating)
    //   }
    // });
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id="map" />
    );
  }
}

export default PlaceDetail;