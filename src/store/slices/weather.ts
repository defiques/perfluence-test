import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunk/WeatherThunk";

export interface Weather {
    minTemp: number,
    maxTemp: number,
    rainyDays: number
}

type Tabs = ["Обзор", "Графики"]
type ActiveTab = "Обзор" | "Графики"

interface WeatherState {
    weather: Weather[] | null,
    loading: boolean,
    error: string | undefined,
    activeTab: ActiveTab,
    tabs: Tabs
}

const initialState: WeatherState = {
    weather: null,
    loading: false,
    error: undefined,
    activeTab: "Обзор",
    tabs: ["Обзор", "Графики"]
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        handleTabChange(state, action: PayloadAction<ActiveTab>) {
            state.activeTab = action.payload;
        }
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

export const {
    handleTabChange
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;