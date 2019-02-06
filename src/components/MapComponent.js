import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Header from '../components/Header';
import InfoTab from '../components/InfoTab';



const style = {
    width: '100%',
    height: '62%',
    zIndex: '1'
}

const gifStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '150px'
}

export class MapComponent extends Component {

    componentWillMount = async () => {
        await this.props.getSuggestion(this.props.coords);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.suggestion.data ? (
                    <InfoTab
                        name={this.props.suggestion.data.name}
                        rate={this.props.suggestion.data.rating}
                        cat={this.props.suggestion.data.cat}
                        link={this.props.suggestion.data.link}
                    />
                ) : (<span></span>)}

                {this.props.suggestion.data ? (
                    <Map
                        className="map-component"
                        style={style}
                        initialCenter={{
                            lat: this.props.suggestion.data.lat,
                            lng: this.props.suggestion.data.lon
                        }}
                        center={{
                            lat: this.props.suggestion.data.lat,
                            lng: this.props.suggestion.data.lon
                        }}
                        google={this.props.google} zoom={14}>
                        <Marker
                            title={this.props.suggestion.data.name}
                            name={'SOMA'}
                            position={{ lat: this.props.suggestion.data.lat, lng: this.props.suggestion.data.lon }} />
                    </Map>
                ) : (
                        <img style={gifStyle} src="http://backgroundcheckall.com/wp-content/uploads/2017/12/ajax-loading-gif-transparent-background-2.gif" alt="Loading Animation" />
                    )}


            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDLX20hiAwtHZ60qd92XrTZE_Kz8TqRJ40')
})(MapComponent);