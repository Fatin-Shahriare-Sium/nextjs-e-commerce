import {createStore,applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import navBarReducer from './reducer/navBarReducer.js';
import productReducer from './reducer/productReducer.js';
let store=createStore(combineReducers({data:productReducer,controller:navBarReducer}),composeWithDevTools(applyMiddleware(thunk)))

export default store;