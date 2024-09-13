import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "../../Components/UserForm";
import { insertUserVerification } from "../../Services/UserServices/insertUserServices";

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../Services/UserServices/insertUserServices", () => ({
  insertUserVerification: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "Mock data" }),
  })
);

test("form should have the wright value", () => {
  const { getByLabelText } = render(<UserForm />);

  const username = getByLabelText(/Votre nom \/ pseudonyme/i);
  const email = getByLabelText(/Votre adresse email/i);
  const password = getByLabelText(/Votre mot de passe/i);
  fireEvent.change(username, { target: { value: "testuser" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.change(password, { target: { value: "123456789test" } });

  expect(username.value).toBe("testuser");
  expect(email.value).toBe("email@email.com");
  expect(password.value).toBe("123456789test");
});

test("form should submit", async () => {
  insertUserVerification.mockResolvedValue(true);

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
