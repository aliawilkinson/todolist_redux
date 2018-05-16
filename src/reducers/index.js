import { combineReducers } from 'redux';
import listReducer from './list_reducer';
import list_reducer from './list_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    list: list_reducer,
    form: formReducer,
});

