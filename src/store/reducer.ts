import { weatherReducer } from './slices/weather';
import { combineReducers } from "@reduxjs/toolkit";

const reducers = {
    weather: weatherReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;