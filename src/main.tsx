import ReactDOM from "react-dom/client";
import App from "./App";

import Context from "./context/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <App />
  </Context>
);
