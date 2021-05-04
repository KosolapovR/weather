function kelvinToCelsium(kelvin: number): number {
  if (isNaN(kelvin)) throw new SyntaxError("wrong params");
  return Math.round(kelvin - 273.15);
}

export { kelvinToCelsium };
