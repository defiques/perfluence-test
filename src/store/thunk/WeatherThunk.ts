import ky from "ky";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Weather } from "../slices/weather";
import { getDates } from "../../utils/get-dates";
import { getWeatherStats } from "../../utils/get-weather-stats";

const MOSCOW_LATITUDE = "55.7522";
const MOSCOW_LONGITUDE = "37.6156";
const DATA_TYPE = "temperature_2m,rain";

const BASE_URL = "https://archive-api.open-meteo.com/v1/archive";

const api = ky.create({
    prefixUrl: BASE_URL,
    searchParams: {
        latitude: MOSCOW_LATITUDE,
        longitude: MOSCOW_LONGITUDE,
        hourly: DATA_TYPE
    }
});

interface WeatherData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: HourlyUnits
    hourly: Hourly
}

interface HourlyUnits {
    time: string
    temperature_2m: string
    rain: string
}

interface Hourly {
    time: string[]
    temperature_2m: number[]
    rain: number[]
}

export const fetchWeather = createAsyncThunk<Weather[], void, { rejectValue: string }>(
    'weather/fetchWeather',
    async (_, thunkAPI) => {
        const { start_date, end_date } = getDates();
        try {
            const data = await api.get("", {
                searchParams: {
                    start_date,
                    end_date
                }
            }).json<WeatherData>();
            return getWeatherStats(data.hourly)
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Произошла ошибка")
        }
    }
)