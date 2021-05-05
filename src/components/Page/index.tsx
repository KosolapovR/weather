import React, { useEffect } from "react";
import {
  fetchWeatherByCity,
  fetchWeatherByCoords,
  selectAllWeatherEntities,
  selectCurrentWeatherEntity,
  setCurrentWeatherEntity,
  removeWeatherEntity,
} from "../../features/weather/WeatherSlice";
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
  const allCities = useAppSelector(selectAllWeatherEntities);
  const currentCityWeather = useAppSelector(selectCurrentWeatherEntity);
  const handleSubmit = (values: { city: string }) => {
    dispatch(fetchWeatherByCity(values.city));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geo: GeolocationPosition) => {
      const { latitude, longitude } = geo.coords;
      dispatch(fetchWeatherByCoords({ lat: latitude, lon: longitude }));
    });
  }, []);

  const handleSelectWeatherEntity = (id: number) => {
    dispatch(setCurrentWeatherEntity(id));
  };

  const handleDeleteWeatherEntity = (id: number) => {
    dispatch(removeWeatherEntity(id));
  };

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
        {!!allCities.length && (
          <CityTable
            cities={allCities}
            onDeleteItem={handleDeleteWeatherEntity}
            onRowPress={handleSelectWeatherEntity}
          />
        )}
      </Column>
    </PageContainer>
  );
}

export default Page;
