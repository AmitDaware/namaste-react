import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

//This type of loading the content is also called as
//Chunking,
//Lazy loading,
//Code splitting,
//Dynamic imports,
//On-demand loading,
//Just-in-time loading,
//Asynchronous loading,
//Deferred loading,
//Incremental loading,
//Progressive loading,
//Streaming loading,
//Streaming rendering,

const Grocery = lazy(() => {
  return import("./src/components/Grocery");
});
const About = lazy(() => {
  return import("./src/components/About");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    // Make an api call and send username and password
    const data = {
      name : "Amit Daware"
    };
    setUserName(data.name);
  },[])

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div> 
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
