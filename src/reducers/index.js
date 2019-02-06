import { combineReducers } from 'redux';
import SuggestReducer from './SuggestReducer';
import CoordsReducer from './CoordsReducer';

const rootReducer = combineReducers({
	coords: CoordsReducer,
	suggestion: SuggestReducer
});

export default rootReducer;
