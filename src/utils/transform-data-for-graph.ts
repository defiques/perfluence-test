import { Weather } from "../store/slices/weather";
import { getMonthName } from "./get-month-name";

export interface GraphData {
    name: string,
    max: number,
    min: number
}

export function transformDataForGraph(data: Weather[]): GraphData[] {

    return data.map((el, index) => {
            return {
                name: getMonthName(index).toLowerCase().slice(0, 3),
                max: el.maxTemp,
                min: el.minTemp
            }
        }
    );
}