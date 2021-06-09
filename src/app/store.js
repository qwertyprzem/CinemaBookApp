import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { chooseSeatsReducer } from '../features/chooseSeats/chooseSeatsSlice.js'
import { cinemaHallReducer } from '../features/cinemaHall/cinemaHallSlice.js';

export const store = createStore(combineReducers({
    chooseSeats: chooseSeatsReducer,
    cinemaHall: cinemaHallReducer
}), applyMiddleware(thunk));
