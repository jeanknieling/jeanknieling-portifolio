import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeaderProvider } from "./providers";
import { ScrollProvider } from "./providers/ScrollContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollProvider>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </ScrollProvider>
  </React.StrictMode>
);
