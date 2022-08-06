import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeaderProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </React.StrictMode>
);
