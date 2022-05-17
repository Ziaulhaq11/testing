import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); //means ending with scoop
  expect(scoopImages).toHaveLength(2);
  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  //ToBe -- for numbers and strings
  //ToEqual -- for arrays and objects
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});