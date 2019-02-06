import { combineReducers } from 'redux';
import SuggestReducer from './SuggestReducer';
import CoordsReducer from './CoordsReducer';
import ModalReducer from './ModalReducer'

const rootReducer = combineReducers({
	coords: CoordsReducer,
	suggestion: SuggestReducer,
	modalState: ModalReducer
});

export default rootReducer;
