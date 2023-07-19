import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchWeather } from "../store/thunk/WeatherThunk";

export const useFetchWeatherData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWeather())
    }, [dispatch]);

}