import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledForm = styled("form")`
  color: #ffffff;
  display: flex;
`;

const StyledInputWrapper = styled("div")`
  position: relative;
`;

const StyledLabel = styled("label")`
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
`;
const StyledInput = styled("input")`
  background-color: #417387;
  height: 30px;
  width: 200px;
  border-radius: 20px;
  border-width: 0;
  outline-width: 0;
  color: #ffffff;
  text-align: center;
  padding: 0 10px;
  margin-right: 10px;

  &::placeholder {
    color: #c1c1c1;
  }
`;

const StyledError = styled("span")`
  position: absolute;
  bottom: -16px;
  left: 0;
  color: #ff4040;
  font-size: 12px;
`;

const StyledButton = styled("button")`
  height: 30px;
  align-self: flex-end;
  border-radius: 4px;
  background-color: aquamarine;
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 0 10px;

  &:hover {
    background-color: #58b596;
  }
`;

const SearchByCityForm = ({
  onSubmit,
}: {
  onSubmit: (values: { city: string }) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .trim()
        .required("Обязательное поле")
        .min(3, "Минимум 3 символа"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="city">Введите город</StyledLabel>
        <StyledInput
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
          placeholder={"London"}
          autoComplete={"off"}
        />
        {formik.touched.city && formik.errors.city ? (
          <StyledError>{formik.errors.city}</StyledError>
        ) : null}
      </StyledInputWrapper>
      <StyledButton type="submit">Узнать погоду</StyledButton>
    </StyledForm>
  );
};

export default SearchByCityForm;
