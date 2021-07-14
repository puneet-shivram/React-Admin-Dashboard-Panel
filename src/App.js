import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./components/userList/UserList";
import Home from "./pages/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/users/:userId">
              <User />
            </Route>
            <Route exact path="/newUSer">
              <NewUser />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
