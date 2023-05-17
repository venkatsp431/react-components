import { Route, Switch } from "react-router-dom";
import "./App.css";

import Dashboard from "./Components/dashboard";
import Buttons from "./Components/buttons";
import Cards from "./Components/cards";
import Login from "./Components/login";
import Register from "./Components/register";
import Error from "./Components/error";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
