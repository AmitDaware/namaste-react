// part one  start----------------------------

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "head" },//this object is used for  giving attributes to our elements.
//   "Hello World form react!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

//part one end ----------------------------------

// part TWO start-------------creating the nested HTML structure inside react ------------------

{
  /* <div id="parent">
  <div id="child">
    <h1 id="heading">Iam a h1 tag</h1>
    <h2 id="heading2">Iam a h2 tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },[ React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Iam a h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Iam a h2 tag"),
  ])],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Iam a h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Iam a h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
