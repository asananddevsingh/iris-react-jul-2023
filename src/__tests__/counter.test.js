import { render, screen } from "@testing-library/react";
import Counter from "../components/counter/counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component", () => {
  it("should have label as My Counter", () => {
    render(<Counter />);
    // screen.debug();
    // assertions.
    const lbl = screen.getByText("My Counter");
    // expect(lbl.innerText).toBe("My Counter")
    expect(lbl).toBeInTheDocument();

    const counter = screen.getByTestId("count");
    expect(counter).toBeInTheDocument();

    // Initial state would be 4.
    const count = screen.getByText("4");
    expect(count).toBeInTheDocument();
    // After increment
    const nextCount = screen.queryByText("5");
    expect(nextCount).not.toBeInTheDocument();
  });
  it("should be able to increment", async () => {
    render(<Counter />);
    // screen.debug();
    // assertions.
    screen.debug();
    const btn = screen.getByTestId("btn");
    act(async () => {
      await userEvent.click(btn);
      const count = screen.getByText("5");
      expect(count).toBeInTheDocument();
    });
    //
    screen.debug();
    const prevCount = screen.queryByText("4");
    expect(prevCount).not.toBeInTheDocument();
  });
});
