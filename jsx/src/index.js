// import react and react-dom libraries
import React from "react";
import ReactDom from "react-dom";

const buttonText = () => {
  return "Click on me!";
};

// create component
const App = () => {
  const text = "Click Me!";

  return (
    <div className="username">
      <label for="name">username: </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText()}
      </button>
    </div>
  );
};

// show up component
ReactDom.render(<App />, document.querySelector("#root"));
