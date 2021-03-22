import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const location = {
  lat: 24.847850,
  lng: 89.372951
};

function Map() {
    const onLoad = marker => {
        console.log('marker: ', marker)
      }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD8zm5uiwVSn8EVFZzyW68PvNcqZzsuprY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={13}
      >
        <Marker
            onLoad={onLoad}
            position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)