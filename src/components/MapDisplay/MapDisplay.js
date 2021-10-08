import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '40%'
};

export class MapDisplay extends Component {
  render() {
    return (
      <div className='map-container'>
        <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={
              {
                lat: 39.747620,
                lng: -104.955661
              }
            }
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDy-Ilf-6XPDU_7SOjU4R9x8iVRAeM-MaM'
})(MapDisplay);