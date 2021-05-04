import { render, screen } from "@testing-library/react";
import React from "react";
import CurrentWeatherCard from "./index";

test("renders without datetime OK", () => {
  render(
    <CurrentWeatherCard
      city={"Moscow"}
      description={"Описание"}
      icon={"03d"}
      temp={300}
    />
  );
  const timeText = screen.queryByText(/состояни/i);
  expect(timeText).not.toBeInTheDocument();
});

test("renders without icon OK", () => {
  render(
    <CurrentWeatherCard
      city={"Moscow"}
      description={"Описание"}
      temp={300}
      datetime={Date.now()}
    />
  );
  const imgAlt = screen.queryByAltText("icon");
  expect(imgAlt).not.toBeInTheDocument();
});
