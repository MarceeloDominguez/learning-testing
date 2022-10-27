import { fireEvent, render, screen } from "@testing-library/react";
import SearchPokemon from "../../src/components/SearchPokemon";

describe("Testing <SearchPokemon />", () => {
  const inputValue = "Pikachu";

  test("should change the value of the text box", () => {
    render(<SearchPokemon searchPokemon={() => {}} />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("should call searchPokemon if the input has a value", () => {
    const searchPokemon = jest.fn();

    render(<SearchPokemon searchPokemon={searchPokemon} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //disparar el evento onchange(input) y form
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    //si fue llamada
    expect(searchPokemon).toHaveBeenCalled();
    //cantidad de veces que es llamada
    expect(searchPokemon).toHaveBeenCalledTimes(1);
    //que haya sido llamada con el inputValue
    expect(searchPokemon).toHaveBeenCalledWith(inputValue);
  });
});
