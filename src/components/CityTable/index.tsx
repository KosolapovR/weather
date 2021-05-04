import React from "react";
import { CityEntities } from "../../features/city/CitySlice";
import CityTableRow from "./CityTableRow";

type CityTableProps = {
  cities: CityEntities[];
};

const CityTable = ({ cities }: CityTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>lat</th>
          <th>lon</th>
          <th>temp</th>
          <th>temp_max</th>
          <th>temp_min</th>
          <th>temp_min</th>
          <th>feels_like</th>
          <th>pressure</th>
          <th>visibility</th>
          <th>wind.deg</th>
          <th>wind.speed</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((item) => (
          <CityTableRow
            key={item.id}
            city={item.name}
            coord={item.coord}
            main={item.main}
            visibility={item.visibility}
            wind={item.wind}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CityTable;
