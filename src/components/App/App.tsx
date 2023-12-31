import styled from "@emotion/styled";
import WeatherStats from "../WeatherStats/WeatherStats";

const App = () => {

    return (
        <Container>
            <Title>Средние показатели погоды за 12 месяцев (г. Москва)</Title>
            <WeatherStats />
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 900px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Title = styled.span`
  color: gray;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
`

export default App;