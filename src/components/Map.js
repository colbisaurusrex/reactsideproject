import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {


  render() {

    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    return (
        <GoogleMapLoader
            containerElement = { mapContainer }
            googleMapElement = {
              <GoogleMap
                  defaultZoom = {6}
                  defaultCenter={this.props.location}
                  options = {{streetViewControl: false, mapTypeControl: true}}>
                  </GoogleMap>
            } />
      );

  }
};

export default Map;