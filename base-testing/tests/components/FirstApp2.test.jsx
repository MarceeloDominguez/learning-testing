import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Testing <FirstApp />", () => {
  const title = "Hola Mundo";
  const subTitle = "Esto es un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola Mundo"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de mostrar el titulo en un h1 ", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el sustitulo enviado por prop", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
