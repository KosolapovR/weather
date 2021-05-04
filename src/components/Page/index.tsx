import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherByCity,
  selectAllCities,
} from "../../features/city/CitySlice";
import CityTable from "../CityTable";
import Header from "../Header";

function Page() {
  const dispatch = useDispatch();
  const allCities = useSelector(selectAllCities);

  const handleSubmit = (values: { city: string }) => {
    dispatch(fetchWeatherByCity(values.city));
  };

  return (
    <div>
      <Header onSubmit={handleSubmit} />
      <CityTable cities={allCities} />
    </div>
  );
}

export default Page;
