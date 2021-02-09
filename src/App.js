import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Weather />
      <Quote />
    </div>
  );
}

export default App;
