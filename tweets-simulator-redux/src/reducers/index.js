import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';
import validationReducers from './validationReducers';
import tweetReducer from './tweetReducers';

export default combineReducers({
    modals: modalsReducer,
    validation: validationReducers,
    tweets: tweetReducer,
});