import { SET_COORDS } from '../actions';


export default (state = {}, action) => {
    switch (action.type) {
        case SET_COORDS:
            return action.payload;
        default:
            return state;
    }
};
