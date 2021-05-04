import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchByCityForm from "./index";

test("renders input OK", () => {
  const mockCallback = jest.fn();
  render(<SearchByCityForm onSubmit={mockCallback} />);
  const labelText = screen.getByLabelText(/Введите город/i);
  const placeholderText = screen.getByPlaceholderText(/London/i);
  expect(labelText).toBeInTheDocument();
  expect(placeholderText).toBeInTheDocument();
});

test("renders submit btn OK", () => {
  const mockCallback = jest.fn();
  render(<SearchByCityForm onSubmit={mockCallback} />);
  const buttonText = screen.getByRole("button", { name: /Узнать погоду/i });
  expect(buttonText).toBeInTheDocument();
});

test("submitting a form OK", async () => {
  const handleSubmit = jest.fn();
  render(<SearchByCityForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/Введите город/i), "Berlin");

  userEvent.click(screen.getByRole("button", { name: /Узнать погоду/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      city: "Berlin",
    })
  );
});

test("validate empty field", async () => {
  const handleSubmit = jest.fn();
  render(<SearchByCityForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/Введите город/i), "");

  userEvent.click(screen.getByRole("button", { name: /Узнать погоду/i }));
  await waitFor(() => {
    expect(handleSubmit).not.toHaveBeenCalled();
    const errorText = screen.getByText(/Обязательное/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("validate > 2 OK", async () => {
  const handleSubmit = jest.fn();
  render(<SearchByCityForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/Введите город/i), "da");

  userEvent.click(screen.getByRole("button", { name: /Узнать погоду/i }));
  await waitFor(() => {
    expect(handleSubmit).not.toHaveBeenCalled();
    const errorText = screen.getByText(/Минимум/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("trim whitespaces and validate 2 OK", async () => {
  const handleSubmit = jest.fn();
  render(<SearchByCityForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/Введите город/i), "  da  ");

  userEvent.click(screen.getByRole("button", { name: /Узнать погоду/i }));
  await waitFor(() => {
    expect(handleSubmit).not.toHaveBeenCalled();
    const errorText = screen.getByText(/Минимум/i);
    expect(errorText).toBeInTheDocument();
  });
});
