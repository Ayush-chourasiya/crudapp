import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Createuser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import AllUserList from "./components/AllUserList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/create" component={Createuser} />
          <Route path="/update" component={UpdateUser} />
          <Route path="/delete" component={DeleteUser} />
          <Route path="/userlist" component={AllUserList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
