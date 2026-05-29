import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeCartProvider } from "./contexts/Contexts";

export function App() {
  return (
    <>
      <BrowserRouter>
        <CoffeeCartProvider>
          <Router />
        </CoffeeCartProvider>
      </BrowserRouter>
    </>
  );
}
