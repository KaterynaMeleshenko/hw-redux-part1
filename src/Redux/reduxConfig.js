import { createStore } from 'redux';
import infoReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({ reducer: infoReducer })

export default store;