import React from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };
  const handleReset = () => {
    setCount(0);
    setCount2(0);
  };
  return (
    <div className="user">
      <h1>{name}</h1>
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default User;
