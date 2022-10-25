import { getAllByText, getByTestId, render } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Testing <FirstApp />", () => {
  //   test("debe de hacer match con el snapshot", () => {
  //     const title = "Hola Mundo";
  //     const { container } = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola Mundo";
    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el sustitulo enviado por props", () => {
    const title = "Hola Mundo";
    const subTitle = "Soy un subtitulo";

    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    //expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
