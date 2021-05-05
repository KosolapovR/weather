import React from "react";
import { WeatherEntities } from "../../features/weather/WeatherSlice";
import CityTableRow from "./CityTableRow";
import styled from "styled-components";

const StyledTable = styled("table")`
  margin-top: 20px;
  border-collapse: collapse;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
  background: hsla(0, 0%, 100%, 0.1);
`;
const Ceil = styled("th")`
  text-align: center;
  border: 1px solid #ababab55;
  background-color: #0b5469;
  color: #ffffff;
  padding: 8px;
`;
type CityTableProps = {
  cities: WeatherEntities[];
  onRowPress: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

const CityTable = ({ cities, onRowPress, onDeleteItem }: CityTableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <Ceil>Город</Ceil>
          <Ceil>lat</Ceil>
          <Ceil>lon</Ceil>
          <Ceil>Температура</Ceil>
          <Ceil>max</Ceil>
          <Ceil>min</Ceil>
          <Ceil>Чувствуется</Ceil>
          <Ceil>Давление</Ceil>
          <Ceil>Видимость</Ceil>
          <Ceil>Направление ветра</Ceil>
          <Ceil>Скорость ветра</Ceil>
          <Ceil />
        </tr>
      </thead>
      <tbody>
        {cities.map((item) => (
          <CityTableRow
            onPress={onRowPress}
            onDeleteItem={onDeleteItem}
            id={item.id}
            key={item.id}
            city={item.name}
            coord={item.coord}
            main={item.main}
            visibility={item.visibility}
            wind={item.wind}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default CityTable;
