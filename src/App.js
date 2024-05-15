// import React from "react";
// import ReactDOM from "react-dom/client";

// const JsxHeading = () => (
// <h1 className="head" tabIndex="5">
// Namaste React using jsx💤
// </h1>
// );

// how can i put an element in jsx
// const mit = (
// <h1 className="heads" tabIndex="5">
// Namaste React using jsx 💥
// </h1>
// );
//React Components
// 1. Class Based components - OLD
// 2. Functional  Based components - NEW

// component composition means component inside another component ..
// const HeadingComponent = () => (
// <div id="container">
//
// <h1> {mit} </h1>  /*here are  how you add an element in your component */
// {JsxHeading()}
// <JsxHeading ></JsxHeading>
// <JsxHeading />
// <h1 className="heading">React functional component</h1>
// </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
// console.log(JsxHeading);

// -------------------------------------------------------------------------------------------------------------------------------------



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
