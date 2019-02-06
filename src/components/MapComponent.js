import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Button } from 'react-bootstrap';

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

const suggestButton = {
    position: 'absolute',
    bottom: '70px',
    zIndex: 3,
    width: '100%',
    textAlign: 'center'
}

export class MapComponent extends Component {
    getSuggestion = async () => {
        await this.props.getSuggestion(this.props.coords);

    }
    componentWillMount = () => {
        this.getSuggestion();
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
                        modalState={this.props.modalState}
                        openModal={this.props.openModal}
                        closeModal={this.props.closeModal}
                        src={this.props.suggestion.data.image[0]}
                        lat={this.props.suggestion.data.lat}
                        lon={this.props.suggestion.data.lon}
                    />
                ) : (<span></span>)
                }
                {this.props.suggestion.data ? (
                    <div style={suggestButton}>
                        <Button onClick={this.getSuggestion} variant="info">اقتراح آخر</Button>
                    </div>
                ) : ''}

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