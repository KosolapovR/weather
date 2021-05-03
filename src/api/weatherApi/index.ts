import { API_KEY, API_URL } from "../../config";

async function getWeatherByCity(city: string) {
  const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
  return await response.json();
}

export { getWeatherByCity };
