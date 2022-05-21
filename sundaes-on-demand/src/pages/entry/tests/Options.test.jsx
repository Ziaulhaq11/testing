import {
  findAllByRole,
  render,
  screen,
} from "../../../test-utils/testing-library-utils";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  //   const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });Here it doesn't work bc Images are coming asynchronously .
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); //means ending with scoop
  expect(scoopImages).toHaveLength(2);
  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  //ToBe -- for numbers and strings
  //ToEqual -- for arrays and objects
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option form server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", /toppings$/i);
  expect(toppingImages).toHaveLength(2);
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual(["Cherries toppings", "Hot fudge toppings"]);
});
