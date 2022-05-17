import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   const linkElement = screen.getByRole('link',{name:/learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });
test("button has correct initial color", () => {
  render(<App />);
  //find an element with a role of button and text of "Change to Blue"
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect background color to be red
  expect(button).toHaveStyle({ backgroundColor: "Medium Violet Red" });

  //click button
  fireEvent.click(button);

  //expect the background color to be blue;
  expect(button).toHaveStyle({ backgroundColor: "Midnight Blue" });

  // expect the button text to be change to red;
  // expect(button.textContent).toBe('Change to Medium Violet Red')
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("Initial Conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click, changes background Color to gray and enables on second click  ", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  // const checkbox = screen.getByRole('checkbox')
  const checkbox = screen.getByRole("checkbox", {
    label: "disable-button-checkbox",
  });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });
  expect(colorButton).toBeEnabled();
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumViolentRed")).toBe(
      "Medium Violent Red"
    );
  });
});
