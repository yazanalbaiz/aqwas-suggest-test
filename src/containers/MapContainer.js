import React, { Component } from 'react'
import { connect } from 'react-redux';

import MapComponent from '../components/MapComponent';
import * as actions from '../actions';

(async () => {
    await actions.setCoords();
})();

const mapStateToProps = state =>
    ({
        coords: state.coords,
        suggestion: state.suggestion,
        modalState: state.modalState
    })
    ;

const mapDispatchToProps = dispatch => ({
    setCoords: () => dispatch(actions.setCoords()),
    getSuggestion: (coords) => dispatch(actions.getSuggestion(coords)),
    openModal: () => dispatch(actions.openModal()),
    closeModal: () => dispatch(actions.closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class MapContainer extends Component {
        componentWillMount = async () => {
            await this.props.setCoords();

        }


        render() {
            return (
                <div>
                    <MapComponent
                        openModal={this.props.openModal}
                        closeModal={this.props.closeModal}
                        modalState={this.props.modalState}
                        coords={this.props.coords}
                        suggestion={this.props.suggestion}
                        getSuggestion={this.props.getSuggestion}
                    />
                </div>
            )
        }
    }
);
