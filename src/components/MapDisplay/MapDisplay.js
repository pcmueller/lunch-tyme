import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  zIndex: '0',
  width: '100%',
  height: '30%',
  position: 'none',
  marginTop: '20px'
};

export class MapDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.selected.location.lat,
      lng: this.props.selected.location.lng
    };
  }

  render() {
    return (
      <div className='map-container'>
        <Map
          className='map'
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={
            {
              lat: this.state.lat,
              lng: this.state.lng
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