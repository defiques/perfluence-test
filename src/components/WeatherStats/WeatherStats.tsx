import { useAppSelector } from "../../store/hooks";
import MeanTempList from "../MeanTempList/MeanTempList";
import GraphStats from "../GraphStats/GraphStats";
import { useFetchWeatherData } from "../../hooks/useFetchWeatherData";
import Loader from "../Loader/Loader";
import { useState } from "react";
import Tabs from "../Tabs/Tabs";

export type TabType = 'Обзор' | 'Графики'
export type TabsLabelsType = ['Обзор', 'Графики'];

const WeatherStats = () => {

    useFetchWeatherData();

    const loading = useAppSelector(s => s.weather.loading);
    const weather = useAppSelector(s => s.weather.weather);
    const [activeTab, setActiveTab] = useState<TabType>("Обзор");

    const tabsLabels: TabsLabelsType = ['Обзор', 'Графики']


    const content = activeTab === "Обзор" ? <MeanTempList weather={weather} /> : <GraphStats weather={weather} />;

    return (
        <>
            <Tabs
                tabs={tabsLabels}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {loading ? <Loader /> : content}
        </>
    );
};

export default WeatherStats;