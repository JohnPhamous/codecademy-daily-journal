import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Error />
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <button aria-label="Switch to previous wallpaper">{"<"}</button>
      </aside>
      <main>
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <button aria-label="Switch to next wallpaper">{">"}</button>
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
