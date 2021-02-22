import { combineReducers, createStore } from 'redux';
import activeUser from './Ducks/user';

const reducer = combineReducers({
    user: activeUser
});

const store = createStore(reducer);

export default store;