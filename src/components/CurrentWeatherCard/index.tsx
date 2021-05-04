import React from "react";
import styled from "styled-components";
import { kelvinToCelsium } from "../../helpers/kelvinToCelsium";
import { getFormattedDateTime } from "../../helpers/getFormattedDateTime";

const StyledContainer = styled("div")`
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
  background: hsla(0, 0%, 100%, 0.1);
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  max-width: 500px;
`;

const StyledSpan = styled("span")``;
const StyledSpanBold = styled(StyledSpan)`
  font-weight: bold;
`;

const StyledSpanBold20 = styled(StyledSpanBold)`
  font-size: 20px;
`;

const StyledSpanBold56 = styled(StyledSpanBold)`
  font-size: 56px;
`;

const StyledLeft = styled("div")`
  display: flex;
  flex-direction: column;
`;
const StyledRight = styled("div")``;

type Props = {
  city: string;
  datetime?: number;
  temp: number;
  description: string;
  icon?: string;
};

function CurrentWeatherCard({
  city,
  description,
  datetime,
  icon,
  temp,
}: Props) {
  return (
    <StyledContainer>
      <StyledLeft>
        <StyledSpanBold20>Погода {city}</StyledSpanBold20>
        {datetime && (
          <span>По состоянию на {getFormattedDateTime(datetime)}</span>
        )}
        <StyledSpanBold56>{kelvinToCelsium(temp)}&#176;</StyledSpanBold56>
        <StyledSpanBold>{description}</StyledSpanBold>
      </StyledLeft>
      <StyledRight>
        {icon && (
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
        )}
      </StyledRight>
    </StyledContainer>
  );
}

export default CurrentWeatherCard;
