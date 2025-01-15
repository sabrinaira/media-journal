import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App />);

const rootElement = document.getElementById('root');

// Ensure rootElement is not null
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found. Application cannot render.");
}