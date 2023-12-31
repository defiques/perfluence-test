import styled from "@emotion/styled";
import { transformDataForGraph } from "../../utils/transform-data-for-graph";
import Graph from "../Graph/Graph";
import { Weather } from "../../store/slices/weather";
import { FC } from "react";

interface GraphStatsProps {
    weather: Weather[] | null
}

const GraphStats:FC<GraphStatsProps> = ({ weather }) => {

    if (!weather) {
        return <GraphTitle>Нет данных для построения графика</GraphTitle>
    }

    const graphData = transformDataForGraph(weather);

    return (
        <>
            <GraphTitle>Температура (°C)</GraphTitle>
            <Graph graphData={graphData} />
        </>

    );
};

const GraphTitle = styled.span`
  font-size: 18px;
  color: gainsboro;
`

export default GraphStats;