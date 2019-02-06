import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../static/img/WainNakelLogoHeader.png';


const style = {
    zIndex: '3',
    backgroundColor: '#2f6063',
    width: '100%',
    height: '20%',
    opacity: '0.9',
    padding: '10px',

};

const img = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default class Header extends Component {
    render() {
        return (
            <div style={style}>
                <Container>
                    <Row>
                        <Col>
                            <Link to="/">
                                <img src={Logo} style={img} alt="Wain Nakel Logo" />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
