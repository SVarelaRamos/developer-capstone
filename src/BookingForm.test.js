import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const dispatch = jest.fn;
  render(<BookingForm availableTimes={[]} dispatch={dispatch} />);
  const headingElement = screen.getByText("Book your table!");
  expect(headingElement).toBeInTheDocument();
});
