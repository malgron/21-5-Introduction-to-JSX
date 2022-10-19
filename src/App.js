import React from "react";
import ReactDOM from "react-dom";

const shirts = 4;
const pants = 6;
const website = "https://www.thinkful.com/";
const className = "paragraph";
const linkText = "Website";
const element = <main><p class={className}>Purchased {shirts} shirts and {pants} pants for a total of {shirts + pants} items</p><a href={website}>{linkText}</a></main>;

function App(){
  return element;
}

export default App;