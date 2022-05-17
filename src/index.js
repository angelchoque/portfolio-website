import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom';
import App from "./App"; // createRoot(container!) if you use TypeScript
import "./styles/normalize.css";
import "./styles/index.css";

const container = document.querySelector("#root");
// const root = createRoot(container);
const root = ReactDOM.createRoot(container);

root.render(<App tab="home" />);