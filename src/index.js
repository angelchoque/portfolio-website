import { createRoot } from 'react-dom/client';
import App from "./App"; // createRoot(container!) if you use TypeScript
import "./styles/normalize.css"
import "./styles/index.css"

const container = document.querySelector("#root")
const root = createRoot(container);

root.render(<App tab="home" />);