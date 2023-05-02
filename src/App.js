//Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

import { ButtonStyle } from "./ButtonStyle";
import "./styles.css";

const backgroundColor = "lightgreen";
const color = "darkgreen";
const borderRadius = "5px";
const padding = "10px";

export default function App() {
  return (
    <div className="App">
      <ButtonStyle
        backgroundColor={backgroundColor}
        buttonColor={color}
        borderRadius={borderRadius}
        buttonPadding={padding}
      />
    </div>
  );
}
