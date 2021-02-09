import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Weather />
    </div>
  );
}

export default App;
