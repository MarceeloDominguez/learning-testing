import { render, screen } from "@testing-library/react";
import PokeItem from "../../src/components/PokeItem";

describe("Testing <PokeItem />", () => {
  const poke = {
    name: "Pikachu",
    id: "1",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };

  test("should match with the snatshop", () => {
    const { container } = render(<PokeItem poke={poke} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the indicated URL and ALT", () => {
    render(<PokeItem poke={poke} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(poke.picture);
    expect(alt).toBe(alt);
  });

  test("should show the title in the component", () => {
    render(<PokeItem poke={poke} />);
    expect(screen.getByText(poke.name)).toBeTruthy();
  });
});
