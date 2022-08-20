import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeaderProvider, IconsProvider, ScrollProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider>
      <ScrollProvider>
        <HeaderProvider>
          <App />
        </HeaderProvider>
      </ScrollProvider>
    </IconsProvider>
  </React.StrictMode>
);
