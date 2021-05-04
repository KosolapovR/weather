import React from "react";

type CityTableProps = {
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
  city,
  coord: { lat, lon },
  main: { temp, temp_max, temp_min, feels_like, pressure },
  visibility,
  wind,
}: CityTableProps) {
  return (
    <tr>
      <td>{city}</td>
      <td>{lat}</td>
      <td>{lon}</td>
      <td>{temp}</td>
      <td>{temp_max}</td>
      <td>{temp_min}</td>
      <td>{temp_min}</td>
      <td>{feels_like}</td>
      <td>{pressure}</td>
      <td>{visibility}</td>
      <td>{wind.deg}</td>
      <td>{wind.speed}</td>
    </tr>
  );
}

export default CityTableRow;
