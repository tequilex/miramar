import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import { CheckBoxProvider } from "./contexts/checkbox.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <CheckBoxProvider>
      <App />
    </CheckBoxProvider>
  </UserProvider>
);

reportWebVitals();
