import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Integration Test Case For Cart Component", () => {
  it("Should Load Restaurant Menu Component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordionHeader = screen.getByText("High Protein Burgers (New)(4)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(4);
    expect(screen.getByText(/🛒0/)).toBeInTheDocument();
    const addBtn = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtn[0]);
    expect(screen.getByText(/🛒1/)).toBeInTheDocument();
    fireEvent.click(addBtn[1]);
    expect(screen.getByText(/🛒2/)).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(6);
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getByText("Add Items In The Cart")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(4);
  });
});
