import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchWeather } from "../../store/thunk/WeatherThunk";
import MeanTempList from "../MeanTempList/MeanTempList";
import GraphStats from "../GraphStats/GraphStats";
import { Discuss } from "react-loader-spinner";
import styled from "@emotion/styled";

const WeatherStats = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWeather())
    }, [dispatch]);

    const activeTab = useAppSelector(s => s.weather.activeTab);
    const loading = useAppSelector(s => s.weather.loading);

    const content = activeTab === "Обзор" ? <MeanTempList /> : <GraphStats />;
    const loader = (
        <LoaderWrapper>
            <Discuss visible height="80" width="80" colors={["lightblue", "white"]}/>
        </LoaderWrapper>
    )

    return (
        <>
            {loading ? loader : content}
        </>
    );
};

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default WeatherStats;