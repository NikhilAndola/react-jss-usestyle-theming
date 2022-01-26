import "./styles.css";
import Button from "./components/Button";
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";

export default function App() {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Button color="red" onClick={handleClick}>
          Click me!
        </Button>
        <Button color="green" onClick={handleClick}>
          Click me!
        </Button>
        <Button color="grey" onClick={handleClick}>
          Click me!
        </Button>
      </div>
    </ThemeProvider>
  );
}
