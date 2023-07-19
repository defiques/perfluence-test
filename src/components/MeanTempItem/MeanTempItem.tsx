import styled from "@emotion/styled";
import { Weather } from "../../store/slices/weather";
import { FC } from "react";
import { getMonthName } from "../../utils/get-month-name";
import { getDayNoun } from "../../utils/get-day-noun";

interface MeanTempProps {
    monthStat: Weather,
    index: number
}

const MeanTempItem:FC<MeanTempProps> = ({ monthStat, index }) => {

    const celsius = "°";
    const daysNouns: ['день', 'дня', 'дней'] = ['день', 'дня', 'дней'];


    return (
        <Container>
            <TempsSpan>{getMonthName(index)}</TempsSpan>
            <FlexDiv>
                <TempsSpan>{monthStat.maxTemp}{celsius} </TempsSpan>
                /
                <TempsSpan> {monthStat.minTemp}{celsius}</TempsSpan>
            </FlexDiv>
            <TempsSpan>{monthStat.rainyDays} {getDayNoun(monthStat.rainyDays, ...daysNouns)}</TempsSpan>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  gap: 50px;
  color: gainsboro;
  border-bottom: 2px solid rgba(128, 128, 128, 0.25);
  padding: 10px 0;
  @media only screen and (max-width: 900px) {
    gap: 25px;
  }
`

const FlexDiv = styled.div`
  flex: 1 1 0;
`

const TempsSpan = styled.span`
  flex: 1 1 0;
`

export default MeanTempItem;