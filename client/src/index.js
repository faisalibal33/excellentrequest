import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { RequestContextProvider } from "./context/RequestContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RequestContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
      </RequestContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
