import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunk/WeatherThunk";

export interface Weather {
    minTemp: number,
    maxTemp: number,
    rainyDays: number
}

interface WeatherState {
    weather: Weather[] | null,
    loading: boolean,
    error: string | undefined,
}

const initialState: WeatherState = {
    weather: null,
    loading: false,
    error: undefined,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.weather = action.payload;
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.weather = null;
            state.error = action.payload;
        })
    }
});

export const weatherReducer = weatherSlice.reducer;