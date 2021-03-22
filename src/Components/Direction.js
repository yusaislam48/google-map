import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const location = {
    lat: 24.847850,
    lng: 89.372951
};

function Direction() {

    const [directionRes, setDirectionRes] = useState(null);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD8zm5uiwVSn8EVFZzyW68PvNcqZzsuprY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={8}
            >

                <DirectionsService
                    options={{ 
                        destination: 'Dhaka',
                        origin: 'Bogra',
                        travelMode: 'DRIVING'
                    }}
                    callback={res => {
                        if(res !== null){
                            setDirectionRes(res);
                        }
                    }}
                />

                {
                    directionRes &&  <DirectionsRenderer
                  // required
                  options={{ 
                    directions: directionRes
                  }}
                />
                }

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)