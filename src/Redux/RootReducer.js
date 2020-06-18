import UserReducer from './User/UserReducer';
import ddReducer from './Cart-DropDown/Cart-DropDownreducer';
import directoryReducer from './Directory/DirectoryReducer';
import shopDataReducer  from './ShopData/ShopDataReducer';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist';
const persistConfig={key:'root',storage,whitelist:['toggleDropDown']}
const rootReducer=combineReducers({user:UserReducer,toggleDropDown:ddReducer,directory:directoryReducer,collection:shopDataReducer})
export default persistReducer(persistConfig,rootReducer)