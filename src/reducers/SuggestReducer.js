import { GET_SUGGESTION } from '../actions';


export default (state = {}, action) => {
    switch (action.type) {
        case GET_SUGGESTION:
            return action.payload

        default:
            return state;
    }
};


