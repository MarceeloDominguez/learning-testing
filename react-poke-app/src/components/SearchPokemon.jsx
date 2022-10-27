import React, { useState } from "react";

export default function SearchPokemon({ searchPokemon }) {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchPokemon(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Pokemon"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
}
