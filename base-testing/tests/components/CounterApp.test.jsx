import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("Testing <CounterApp />", () => {
  const value = 10;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getAllByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getAllByText("9")).toBeTruthy();
  });

  test("debe de funcionar el boton de reset", () => {
    render(<CounterApp value={355} />);

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(355)).toBeTruthy();
  });
});
