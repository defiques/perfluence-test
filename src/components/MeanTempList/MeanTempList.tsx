import MeanTempItem from "../MeanTempItem/MeanTempItem";
import styled from "@emotion/styled";
import { Weather } from "../../store/slices/weather";
import { FC } from "react";

interface MeanTempListProps {
    weather: Weather[] | null
}

const MeanTempList:FC<MeanTempListProps> = ({ weather }) => {

    const content = weather?.map((monthStat, index) =>
        <MeanTempItem key={index} monthStat={monthStat} index={index}/>
    )

    return (
        <TempsContainer>
            <TempsHeader>
                <TempsSpan>Месяц</TempsSpan>
                <TempsSpan>Макс. / Мин. (°C)</TempsSpan>
                <TempsSpan>Дождь</TempsSpan>
            </TempsHeader>
            {content}
        </TempsContainer>
    );
};

const TempsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TempsHeader = styled.div`
  display: flex;
  gap: 50px;
  color: gainsboro;
  border-bottom: 2px solid rgba(128, 128, 128, 0.25);
  padding: 10px 0;
  @media only screen and (max-width: 900px) {
    gap: 25px;
  }
`;

const TempsSpan = styled.span`
  flex: 1 1 0;
`

export default MeanTempList;