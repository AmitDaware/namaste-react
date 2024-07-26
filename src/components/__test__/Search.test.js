//INTEGRATION TESTING

import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//As we are rendering the body component it is not rendering it on the Browser, it is rendering it on the JS-DOM which is  Browser Like, it does not have all the superpower of the Browser. And we know that the fetch function is the superpower of the Browser and not of javascript.So when we render the body component it is rendered in the JS-DOM which is browser like so it cannot understand what is fetch/ jest doesn't understand what is fetch.

//So what we have to do is we will have to fake the fetch function / we will have to mock this fetch function.

//This is a mock fetch function. Here the [ jest.fn() ] will give me a mock fetch function. This function takes a callBack. Now here I will mock exactly like how my fetch function works, We know that fetch function returns a promise, so here also i will have to return a promise which resolves with a json and what happens is that this json is again a function that returns a promise.resolve and this resolve actually has data

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search reslist for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(cardsAfterSearch);
  expect(cardsAfterSearch.length).toBe(4);
});
it("should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(20);
});
