import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
