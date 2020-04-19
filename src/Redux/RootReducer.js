import UserReducer from './User/UserReducer';
import ddReducer from './Cart-DropDown/Cart-DropDownreducer';
import {combineReducers} from 'redux';

export default combineReducers({user:UserReducer,toggleDropDown:ddReducer})