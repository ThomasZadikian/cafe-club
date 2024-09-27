import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import UserForm from "../../Components/UserForm";
import { insertUserVerification } from "../../Services/UserServices/insertUserServices";
import jestConfig from "../../../../jest.config";

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../Services/UserServices/insertUserServices", () => ({
  insertUserVerification: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ data: "Mock data" }),
    headers: new Headers(),
    redirected: false,
    statusText: "OK",
    type: "basic",
    url: "",
    clone: jest.fn(),
    body: null,
    bodyUsed: false,
    arrayBuffer: jest.fn(),
    blob: jest.fn(),
    formData: jest.fn(),
    text: jest.fn(),
  })
);

test("form should have the wright value", () => {
  const { getByLabelText } = render(<UserForm />);

  const username = getByLabelText(
    /Votre nom \/ pseudonyme/i
  ) as HTMLInputElement;
  const email = getByLabelText(/Votre adresse email/i) as HTMLInputElement;
  const password = getByLabelText(/Votre mot de passe/i) as HTMLInputElement;
  fireEvent.change(username, { target: { value: "testuser" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.change(password, { target: { value: "123456789test" } });

  expect(username.value).toBe("testuser");
  expect(email.value).toBe("email@email.com");
  expect(password.value).toBe("123456789test");
});

test("form should submit", async () => {
  const mockInsertUserVerification =
    insertUserVerification as jest.MockedFunction<
      typeof insertUserVerification
    >;
  mockInsertUserVerification.mockResolvedValue(true);

  const { getByLabelText, getByText } = render(<UserForm />);

  const username = getByLabelText(/Votre nom \/ pseudonyme/i);
  const email = getByLabelText(/Votre adresse email/i);
  const password = getByLabelText(/Votre mot de passe/i);
  fireEvent.change(username, { target: { value: "testuser" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.change(password, { target: { value: "123456789test" } });

  userEvent.click(getByText(/Validez la création de votre compte/i));

  await waitFor(() => {
    expect(insertUserVerification).toHaveBeenCalled();
  });
});

export {};
