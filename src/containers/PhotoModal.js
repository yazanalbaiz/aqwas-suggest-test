import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import * as actions from '../actions';


const mapStateToProps = state =>
    ({
        modalState: state.modalState
    })
    ;

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(actions.openModal()),
    closeModal: () => dispatch(actions.closeModal())
});

const modalStyle = {
    height: '100%',
    width: '100%'
}

const imgStyle = {
    display: 'block',
    margin: 'auto',
    height: '250px',
    width: '250px'
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class Home extends Component {
        render() {
            console.log(this.props)
            return (
                <Modal style={modalStyle} show={this.props.modalState} onHide={this.props.closeModal}>
                    <img
                        src={this.props.src}
                        alt={`${this.props.name} Photo`}
                        style={imgStyle}
                    />
                </Modal>
            )
        }
    }
);
