import React from "react";
import { render } from "react-dom";

// IMPORT COMPONENTS
import App from "./components/App";

// DEFINE ROOT AND RENDER ELEMENT
const rootElement = document.getElementById("archsplace");
const appRender = <App />;

// RENDER APP
render(appRender, rootElement);
