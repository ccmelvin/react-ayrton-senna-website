import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "../src/pages";

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
