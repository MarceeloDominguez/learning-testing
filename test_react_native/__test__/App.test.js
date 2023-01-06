import { render } from "@testing-library/react-native";
import App from "../App";

describe("first", () => {
  test("should first", () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
