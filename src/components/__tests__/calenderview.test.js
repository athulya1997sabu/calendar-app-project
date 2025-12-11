import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CalendarView from "../CalendarView";

test("renders Calendar Dashboard title", () => {
  render(
    <Provider store={store}>
      <CalendarView />
    </Provider>
  );
  
  const calendarElement = screen.getByText(/Data Available/i);
  expect(calendarElement).toBeInTheDocument();
});
