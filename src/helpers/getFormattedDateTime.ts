function getFormattedDateTime(timestamp: number): string {
  const date = new Date(timestamp);
  let year: number = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();

  day = day < 10 ? `0${day}` : day;
  month = day < 10 ? `0${month}` : month;

  return `${day}.${month}.${year}`;
}

export { getFormattedDateTime };
