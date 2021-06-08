import React from "react";
import axios from "axios";
import Users from "./Users";
import ReducerUsers from "./ReducerUsers";
import {UsersProvider} from "./Contexts/UsersContext";
import ContextUsers from "./ContextUsers";


function App() {

  return (
    // <Users />
    // <ReducerUsers />
    <UsersProvider>
      <ContextUsers />
    </UsersProvider>
  );
}

export default App;
