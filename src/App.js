import "./App.css";
import { useState } from "react";
import DarkButton from "./components/DarkButton";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isOn, setisOn] = useState(false);
  const clickfunc = () => {
    setisOn(isOn ? false : true);
  };
  console.log(isOn);
  return (
    <div className="App">
      <header className={isOn ? "dark" : "white"}>
        <DarkButton
          clickfunc={() => clickfunc()}
          mode={isOn.toString()}
          icstate={isOn ? faSun : faMoon}
        />
      </header>
    </div>
  );
}

export default App;
