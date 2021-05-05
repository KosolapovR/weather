import React from "react";
import styled from "styled-components";

import { kelvinToCelsium } from "../../../helpers/kelvinToCelsium";
import DeleteIcon from "../../../assets/icons/delete.svg";

const Ceil = styled("td")`
  text-align: center;
  border: 1px solid #ababab55;
  padding: 8px;
  &:last-child {
    opacity: 0;
  }
`;
const Row = styled("tr")`
  cursor: pointer;

  &:hover {
    background-color: #4e6c86;
    transition: background-color 0.2s ease-in;

    & > :last-child {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
`;

type CityTableProps = {
  onPress: (id: number) => void;
  onDeleteItem: (id: number) => void;
  id: number;
  city: string;
  coord: { lon: number; lat: number };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
};

function CityTableRow({
  onPress,
  onDeleteItem,
  id,
  city,
  coord: { lat, lon },
  main: { temp, temp_max, temp_min, feels_like, pressure },
  visibility,
  wind,
}: CityTableProps) {
  return (
    <Row onClick={() => onPress(id)}>
      <Ceil>{city}</Ceil>
      <Ceil>{lat}</Ceil>
      <Ceil>{lon}</Ceil>
      <Ceil>{kelvinToCelsium(temp)}</Ceil>
      <Ceil>{kelvinToCelsium(temp_max)}</Ceil>
      <Ceil>{kelvinToCelsium(temp_min)}</Ceil>
      <Ceil>{kelvinToCelsium(feels_like)}</Ceil>
      <Ceil>{pressure}</Ceil>
      <Ceil>{visibility}</Ceil>
      <Ceil>{wind.deg}</Ceil>
      <Ceil>{wind.speed}</Ceil>
      <Ceil>
        <img
          onClick={() => onDeleteItem(id)}
          src={DeleteIcon}
          width={20}
          height={20}
          alt=""
        />
      </Ceil>
    </Row>
  );
}

export default CityTableRow;
