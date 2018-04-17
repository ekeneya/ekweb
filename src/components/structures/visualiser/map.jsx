import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const KEY = "AIzaSyBtEFE-Iol3jic8H5hyvGrEBCV3RHe_p1g";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  {   
    return (
      <GoogleMap
        defaultZoom={16}
        center={props.position}
        onClick={(item)=>{props.setPosition(item.latLng.lat(), item.latLng.lng())}}
      >
        <Marker
          position={props.position}
        />
      </GoogleMap>
    )
  }
));

export default class Map extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <MapWithAMarker
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+KEY+"&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: '100%' }} >  </div>}
        containerElement={<div style={{ height: '500px' }} > </div>}
        mapElement={<div style={{ height: '100%' }} > </div>}
        position={this.props.position}
        setPosition={this.props.setPosition.bind(this)}
      />
    )

  }
}


