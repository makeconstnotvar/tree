import {Router} from "@reach/router"
import * as React from "react";
import {MainPage} from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <MainPage path="/"/>
    </Router>
  )
}

export {App}