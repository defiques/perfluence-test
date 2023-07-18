import { FC } from "react";
import { LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { GraphData } from "../../utils/transform-data-for-graph";

interface GraphProps {
    graphData: GraphData[]
}

const Graph:FC<GraphProps> = ({ graphData }) => {
    return (
        <LineChart
            width={900}
            height={400}
            data={graphData}
            margin={{
                top: 100,
                right: 30,
                left: 0,
                bottom: 20
            }}
        >
            <XAxis dataKey="name" tickLine={false} tick={{stroke: 'white'}}/>
            <YAxis hide domain={[-20, 35]}/>
            <Tooltip
                cursor={{ stroke: "#ffffff20", strokeWidth: 50 }}
                wrapperStyle={{display: "none"}}
                animationDuration={150}
            />
            <Legend
                iconType="square"
                layout="vertical"
                align="left"
                verticalAlign="middle"
                width={100}
            />
            <Line
                type="linear"
                dataKey="max"
                name="Макс."
                stroke="#a1ccd9"
                strokeWidth={3}
                dot={false}
                isAnimationActive={false}
            >
                <LabelList
                    dataKey="max"
                    position="top"
                    content={<CustomizedLabel stroke="#fff" dy={-15}/>}
                />
            </Line>
            <Line
                type="linear"
                dataKey="min"
                stroke="#3db2d7"
                strokeWidth={3}
                dot={false}
                isAnimationActive={false}
                name="Мин."
            >
                <LabelList
                    dataKey="min"
                    position="bottom"
                    stroke="#fff"
                    content={<CustomizedLabel stroke="#fff" dy={25}/>}
                />

            </Line>
        </LineChart>
    );
};

const CustomizedLabel: FC<any> = (props: any) => {
    const { x, y, stroke, value, dy } = props;

    return (
        <text x={x} y={y} dy={dy} fill={stroke} fontSize={15} textAnchor="middle">
            {value}°
        </text>
    );
};

export default Graph;