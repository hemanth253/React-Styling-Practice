//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
var ans;

const hours = date.getHours();

//  Will not work ------>
// const headingQuery = document.getElementsByClassName("heading");
// console.log(headingQuery);

const customColor = {
  color: ""
};

if (hours >= 0 && hours < 12) {
  ans = "Good Morning";
  customColor.color = "red";
} else if (hours >= 12 && hours < 18) {
  ans = "Good Afternoon";
  customColor.color = "green";
} else if (hours >= 18 && hours <= 23) {
  ans = "Goog Evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customColor} className="heading">
      {ans}
    </h1>
  </div>,
  document.getElementById("root")
);
