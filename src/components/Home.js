import React from "react";
import AllUserList from "../components/AllUserList";
import CreateUser from "./CreateUser";

function Home() {
  return (
    <div>
      <CreateUser />
      <AllUserList />
    </div>
  );
}

export default Home;
