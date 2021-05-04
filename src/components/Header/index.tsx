import React from "react";
import SearchByCityForm from "../forms/SearchByCityForm";
import styled from "styled-components";

const StyledHeader = styled("header")`
  background-color: #084e6b;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Header({
  onSubmit,
}: {
  onSubmit: (values: { city: string }) => void;
}) {
  return (
    <StyledHeader>
      <SearchByCityForm onSubmit={onSubmit} />
    </StyledHeader>
  );
}

export default Header;
