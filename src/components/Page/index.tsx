import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { fetchWeatherByCity, remove } from "../../features/city/CitySlice";

function Page() {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchWeatherByCity("London"));
    }, 2000);

    setTimeout(() => {
      dispatch(fetchWeatherByCity("Moscow"));
    }, 4000);
  }, []);

  return (
    <div>
      {city?.entities.toString()}
      <button
        onClick={() => {
          dispatch(remove());
        }}
      >
        Удалить
      </button>
    </div>
  );
}

export default Page;
