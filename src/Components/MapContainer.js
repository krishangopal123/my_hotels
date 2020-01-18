
import React, { useState, useEffect, Component } from "react";
import OyoContainer from './OyoContainer'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


export  class Map extends Component{
    constructor(props){
        super(props)
        this.state={s3:null,s4:null}
        this.getCoordinates=this.getCoordinates.bind(this)
        this.myfun=this.myfun.bind(this)
    }
     
    getCoordinates=(position)=>{
        this.setState({s3:position.coords.latitude,s4:position.coords.longitude})
       
        
    }
    myfun(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates)
        }

    }
    
render(){
  return (
      <dev>
          
    
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: parseFloat(46), lng: parseFloat(-76.693) }}
      
    >
     
     <button onClick={this.myfun}>Click Me</button>

        {console.log(this.props.name)}
        <Marker position={{lat:parseFloat(this.props.name.lat),lng:parseFloat(this.props.name.lng)}} />
        <Marker position={{lat:46,lng:-76.693}} />
        
     </GoogleMap>
     </dev>)

}
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default class  MapContainer extends Component {

    constructor(props){
        super(props)
    }
    
   
    
    render(){
  return (
    <div style={{width:"100vw",height:"100vh"}}>
       
        
        
    <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp &libraries=geometry,drawing,places&key=AIzaSyB3sF_hKR7V7BjtZcrqXH_lMNBE2IYSToA` }
    
    loadingElement={<div style={{ height: `50%` }} />}
    containerElement={<div style={{ height: `50%` }} />}
    mapElement={<div style={{ height: `50%` }} />}
    name={this.props.name}
    />

    </div>
  );
}
}