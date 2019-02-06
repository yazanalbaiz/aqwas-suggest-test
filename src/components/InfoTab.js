import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PhotoModal from '../containers/PhotoModal';


const style = {
    backgroundColor: 'white',
    zIndex: '3',
    width: '100%',
    height: '20%',
    opacity: '0.9',
    padding: '10px',

}

const centering = {
    margin: 'auto',
    display: 'block'
}

const row = {
    width: '100%'
}

export default class InfoTab extends Component {
    render() {
        const { lat, lon } = this.props;
        return (
            <div style={style}>
                <Row style={row}>
                    <Container>
                        <Row style={centering}>
                            <Col style={{ textAlign: 'center' }} lg={{ offset: 0 }}>
                                <h1>{this.props.name}</h1>
                            </Col>
                        </Row>
                        <Row style={centering}>
                            <Col style={{ textAlign: 'center' }} lg={{ span: 8, offset: 2 }}>
                                <p>{this.props.rate}/10 - {this.props.cat}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a
                                    href={`http://www.google.com/maps/place/${lat},${lon}`}
                                    target="_blank" rel="noopener noreferrer"
                                    title={`Show ${this.props.name} on Google Maps`}
                                >
                                    <img
                                        width="20"
                                        height="20"
                                        src={require('../static/img/GoogleMapsIcon.png')}
                                        alt="Photos Icon"
                                        style={centering}
                                    />
                                </a>
                            </Col>
                            <Col>
                                <img
                                    width="20"
                                    height="20"
                                    src={require('../static/img/PhotoIcon.png')}
                                    alt="Photos Icon"
                                    style={centering}
                                    onClick={this.props.openModal}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <PhotoModal src={this.props.src} name={this.props.name} />
            </div>

        )
    }
}
