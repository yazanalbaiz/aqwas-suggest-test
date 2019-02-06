import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Logo from '../static/img/WainNakelLogoMain.png';
import * as actions from '../actions';


(async () => {
    await actions.setCoords();
})();

const mapStateToProps = state =>
    ({
        coords: state.coords,
        suggestion: state.suggestion
    })
    ;

const mapDispatchToProps = dispatch => ({
    setCoords: () => dispatch(actions.setCoords()),
    getSuggestion: () => dispatch(actions.getSuggestion())
});


const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const buttonStyle = {
    fontFamily: 'Cocon',
    color: '#249397',
    width: '150px',
    margin: 'auto',
    display: 'block'
}

const homeStyle = {
    paddingTop: '130px',
    marginBottom: '70px',
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class Home extends Component {
        componentWillMount = async () => {
            await this.props.setCoords();

        }

        render() {
            return (
                <div>
                    <Container>
                        <Row style={homeStyle}>
                            <Col>
                                <img src={Logo} style={imgStyle} alt="Wain Nakel Logo" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/suggest">
                                    <Button style={buttonStyle} variant="light">اقترح</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
);
