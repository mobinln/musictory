import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import "styles/main.css";
import StateProvider from "logic/StateContext/Provider";

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Router />
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
