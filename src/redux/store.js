import {combineReducers, createStore } from 'redux';
import productsReducer from './products-reducer';
import editorReducer from './editor-reducer';

let reducers = combineReducers({
    products: productsReducer, 
    editor: editorReducer
})

let store = createStore(reducers);

export default store;