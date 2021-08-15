
import { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import carGps from 'assets/car-gps.png'
import { Container } from './style'
import { VehicleInfo } from 'components';

const googleApiKey = process.env.REACT_APP_GOOGLE_APIKEY;
const googleMapUrl = process.env.REACT_APP_GOOGLE_MAP_URL;

const Map = ({type, items}) => {

    const RenderItem = () => {
        const [selectedVehicle, setSelectedVehicle] = useState(null);
        
        return(
            <GoogleMap 
                defaultZoom={13} 
                defaultCenter={{lat: 53.5499644, lng:9.9930346}}
            >
                {items.map((item) => (
                    <Marker 
                        key={item.id}
                        position={{
                            lat: item.coordinate.latitude?item.coordinate.latitude:item.coordinate[1], 
                            lng:item.coordinate.longitude?item.coordinate.longitude:item.coordinate[0]
                        }}
                        onClick={() => setSelectedVehicle(item)}
                        icon={{
                            url:carGps,
                            scaledSize: new window.google.maps.Size(25,25)
                        }}
                    />
                ))}
                {selectedVehicle &&(
                    <InfoWindow 
                        position={{
                            lat: selectedVehicle.coordinate.latitude?selectedVehicle.coordinate.latitude:selectedVehicle.coordinate[1], 
                            lng:selectedVehicle.coordinate.longitude?selectedVehicle.coordinate.longitude:selectedVehicle.coordinate[0]
                        }}
                    >
                      <VehicleInfo type={type} vehicle={selectedVehicle}/>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(RenderItem))

    return (
        <Container>
            <WrappedMap 
                googleMapURL={`${googleMapUrl}&key=${googleApiKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Container>
    )
}

export { Map }