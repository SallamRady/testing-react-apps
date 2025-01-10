import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("display image for each scoop option from server", () => {
  // render our component
  render(<Options optionType={"scoops"} />);

  // find images
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength();

  // confirm alt text of images
  const altTexts = scoopImages.map((ele) => ele.alt);
  expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
