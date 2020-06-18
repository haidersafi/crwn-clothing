import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from './RootReducer';
import {persistStore} from 'redux-persist';
const store= createStore(RootReducer,applyMiddleware(logger))
const persistor=persistStore(store);
export {store,persistor};
