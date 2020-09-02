import React, { Component } from 'react';
// import Locations from "./locations"
import LocationsList from './locationsList.component'



import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

import Geocode from 'react-geocode';
import { Descriptions } from 'antd';
import AutoComplete from 'react-google-autocomplete';

Geocode.setApiKey('AIzaSyDgTn8tOhk_R0mnjuG_2HVfPMYpmcVkVKw')


class allLocations extends Component {
    

    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0
        },
        markerPosition: {
            lat: 0,
            lng: 0
        }
    }

    getCity = (addressArray) => {
        let city = '';
        for (let index = 0; index < addressArray.length; index++){
            if(addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]){
                city = addressArray[index].long_name;
                return city;
            }
        }
    }

    getArea = (addressArray) => {
        let area = '';
        for(let index = 0; index < addressArray.length; index++){
            if(addressArray[index].types[0]) {
                for(let j = 0; j < addressArray.length; j++){
                    if('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]){
                        area = addressArray[index].long_name;
                        return area;
                    }
                }
            }
        }
    }

    getState = (addressArray) => {
        let state = '';
        for(let index = 0; index < addressArray.length; index++){
        for(let index = 0; index < addressArray.length; index++){
            if(addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]){
                state = addressArray[index].long_name;
                return state
            }
        }
    }
}


    onMarkerDragEnd = (e) => {
    let newLat = e.latLng.lat();
    let newLng = e.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
        .then(response => {
            console.log('response', response)
            
            const address = response.results[0].formatted_address,
                addressArray = response.results[0].adress_components,
                city = this.getCity(addressArray),
                area = this.getArea(addressArray),
                state = this.getState(addressArray);

                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            })

            console.log('newLat', newLat);
   
    }

    
    render() {


        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: 39.103119, lng: -84.512016 }}
            >
              <Marker
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{ lat: 39.103119, lng: -84.512016 }}
              >
                <InfoWindow>
                    <div>
                        Hello
                    </div>
                </InfoWindow>
                
                </Marker>

            <AutoComplete
                
            
            />

            </GoogleMap>
          ));

           

        return (
                          <div className="layoutPageBody2" style={{ padding:'1rem', margin:'0 auto', maxWidth: 1000 }}>

                <h2>Google Maps</h2>
                <Descriptions bordered>
    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
  </Descriptions>
            



            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgTn8tOhk_R0mnjuG_2HVfPMYpmcVkVKw&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />

<LocationsList/>

        </div>
        )
    }
}

export default allLocations;