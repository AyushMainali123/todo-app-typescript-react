import { Button, AppBar } from "@material-ui/core";
import Navbar from "./components/Navbar";
import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";
import UpdateTodo from "./pages/UpdateTodo";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add-todo">
          <NewTodo />
        </Route>
        <Route path="/update-todo">
          <UpdateTodo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
