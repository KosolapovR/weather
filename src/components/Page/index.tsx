import React from "react";
import {
  fetchWeatherByCity,
  selectAllCities,
  selectCurrentCityWeather,
} from "../../features/city/CitySlice";
import CityTable from "../CityTable";
import Header from "../Header";
import CurrentWeatherCard from "../CurrentWeatherCard";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

const PageContainer = styled("div")`
  background-image: linear-gradient(#004f69 9%, #47c061);
  min-height: 100vh;
`;
const Column = styled("div")`
  padding: 0 20px;
  max-width: 1100px;
  margin: 0 auto;
`;
function Page() {
  const dispatch = useAppDispatch();
  const allCities = useAppSelector(selectAllCities);
  const currentCityWeather = useAppSelector(selectCurrentCityWeather);
  const handleSubmit = (values: { city: string }) => {
    dispatch(fetchWeatherByCity(values.city));
  };

  console.log("currentCityWeather", currentCityWeather);
  return (
    <PageContainer>
      <Column>
        <Header onSubmit={handleSubmit} />
        {currentCityWeather && (
          <CurrentWeatherCard
            city={currentCityWeather.name}
            datetime={currentCityWeather.dt}
            temp={currentCityWeather.main.temp}
            description={currentCityWeather.weather[0]?.description}
            icon={currentCityWeather.weather[0]?.icon}
          />
        )}
        {!!allCities.length && <CityTable cities={allCities} />}
      </Column>
    </PageContainer>
  );
}

export default Page;
