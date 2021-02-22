import { combineReducers, createStore } from 'redux';
import userReducer from './Ducks/user';

const reducer = combineReducers({
    user: userReducer
});

const store = createStore(reducer);

export default store;