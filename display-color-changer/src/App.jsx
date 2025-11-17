import "./App.css";
import Test from "./components/Test";
import { useState } from "react";
import React from "react";

function App() {
  let [color, setColor] = useState("bg-red-400");

  let kolor = (changedColor) => {
    setColor(changedColor);
  };
  return (
    <>
      <main
        className={`w-full h-screen ${color} p-1 flex items-center justify-center`}
      >
        <Test colorSend={kolor} />
      </main>
    </>
  );
}

export default App;
