import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Checkbox enables button", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm Order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).not.toBeChecked();

  // fireEvent.click(checkbox);
  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  // fireEvent.click(checkbox);
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  //popover starts out at hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be dlivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();
  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);

  // expect(nullPopover).not.toBeInTheDocument(); causing "act" error
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
