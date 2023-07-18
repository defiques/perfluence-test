interface WeatherObj {
    time: string[]
    temperature_2m: number[]
    rain: number[]
}

function getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

export function getWeatherStats(weatherObj: WeatherObj) {

    const result = [];

    // создание копий для мутаций
    const times = [...weatherObj["time"]];
    const temperatures = [...weatherObj["temperature_2m"]];
    const rain = [...weatherObj["rain"]];

    while (times.length > 0) {

        // массивы для максимальных и минимальных температур в течение месяца
        const monthMaxTemps = [];
        const monthMinTemps = [];

        let monthRainDays = 0;

        // нахождение количества дней в месяце
        const firstElemDate = new Date(`${times[0]}Z`);
        const month = firstElemDate.getUTCMonth() + 1;
        const year = firstElemDate.getUTCFullYear();

        const daysNum = getDaysInMonth(month, year);

        // массивы для значений температур и осадков в течение месяца
        const monthTempData = temperatures.splice(0, 24 * daysNum);
        const monthRainData = rain.splice(0, 24 * daysNum);

        while (monthTempData.length > 0) {

            // массив с температурами за день и нахождение максимальной и минимальной температуры за день
            const dailyTemps = monthTempData.splice(0, 24);
            monthMaxTemps.push(Math.max(...dailyTemps));
            monthMinTemps.push(Math.min(...dailyTemps));

            // массив с количеством дождевых осадков за день и расчет суммарных осадков за день
            const dailyRain = monthRainData.splice(0, 24);
            const dailyPrecipitation = dailyRain.reduce((acc, cur) => acc + cur, 0);
            if (dailyPrecipitation > 0.5) {
                monthRainDays += 1;
            }

        }

        // расчет среднемесячной максимальной и минимальной температуры (округляем в большую сторону)
        const meanMaxMonthTemp = Math.ceil(monthMaxTemps.reduce((acc, cur) => acc + cur, 0) / daysNum);
        const meanMinMonthTemp = Math.ceil(monthMinTemps.reduce((acc, cur) => acc + cur, 0) / daysNum);

        result[month - 1] = {
            minTemp: meanMinMonthTemp,
            maxTemp: meanMaxMonthTemp,
            rainyDays: monthRainDays
        }

        // удаление элементов за месяц
        times.splice(0, 24 * daysNum);

    }

    return result
}