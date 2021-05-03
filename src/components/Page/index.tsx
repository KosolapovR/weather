import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { remove, set } from "../../features/city/CitySlice";

function Page() {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);

  useEffect(() => {
    setTimeout(() => {
      dispatch(set("Moscow"));
    }, 2000);
  }, []);

  return (
    <div>
      {city?.name}
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
