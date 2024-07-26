import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should Render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button"); OR
  const loginButton = screen.getByRole("button", { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});
it("should Render Header component with cart component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/0/);
  expect(cart).toBeInTheDocument();
});
it("should change login button to logout onclick", () => {

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBUtton = screen.getByRole('button', {name:"Login"});
    fireEvent.click(loginBUtton);
    const logoutButton = screen.getByRole('button', {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
