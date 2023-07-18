import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
import { transformDataForGraph } from "../../utils/transform-data-for-graph";
import Graph from "../Graph/Graph";

const GraphStats = () => {

    const weather = useAppSelector(s => s.weather.weather);

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