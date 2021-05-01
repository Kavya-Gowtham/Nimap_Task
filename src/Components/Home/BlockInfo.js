import React from "react";
import "./Home.css";

function BlockInfo(props) {
  console.log(props.value);
  switch (props.value) {
    case "dropdown1":
      return (
        <div>
          <p className="info">
            This form has the default HTML form behavior of browsing to a new
            page when the user submits the form. If you want this behavior in
            React, it just works. But in most cases, it’s convenient to have a
            JavaScript function
          </p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    case "dropdown2":
      return (
        <div>
          <p className="info">
            it’s convenient to have a JavaScript function that handles the
            submission of the form and has access to the data that the user
            entered into the form. The standard way to achieve this is with a
            technique called “controlled components
          </p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    case "dropdown3":
      return (
        <div>
          <p className="info">
            This article goes in detailed on react switch case render component.
            This article goes in detailed on react switch case inside render.
            This post will give you simple example of react js switch case in
            render. you will learn react native switch case in render. Here,
            Creating a basic example of switch case statement in react js.
          </p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    default:
      return <p className="info">Select any dropdown</p>;
  }
}
export default BlockInfo;
