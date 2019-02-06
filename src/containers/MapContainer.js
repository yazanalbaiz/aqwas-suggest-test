import React, { Component } from 'react'
import { connect } from 'react-redux';

import MapComponent from '../components/MapComponent';
import * as actions from '../actions';


const mapStateToProps = state =>
    ({
        coords: state.coords,
        suggestion: state.suggestion
    })
    ;

const mapDispatchToProps = dispatch => ({
    setCoords: () => dispatch(actions.setCoords()),
    getSuggestion: (coords) => dispatch(actions.getSuggestion(coords))
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
                    <MapComponent coords={this.props.coords} suggestion={this.props.suggestion} getSuggestion={this.props.getSuggestion} />
                </div>
            )
        }
    }
);
