import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ToggleButton() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
      <button onClick={toggleTheme}>Toggle Theme</button>
    )
  }
  
  export default ToggleButton;