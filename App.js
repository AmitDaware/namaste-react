// const heading = document.createElement("h1");
// heading.innerHTML = 'HELLO WORLD FORM JAVASCRIPT !'

// const root = document.getElementById('root');
// root.appendChild(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "iam nested h1 tag")
  )
);

console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "head" },
//   "Hello World form react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
