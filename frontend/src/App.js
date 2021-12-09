import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={UserList} />
              <Route exact path="/add" component={AddUser} />
              <Route exact path="/edit/:id" component={AddUser} />
          </Switch>
      </Router>
  );
}

export default App;
