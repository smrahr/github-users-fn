import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState("");

  // const onSearchHandler = async (name) => {

  //   // setSearchName(name);

  //   // const res = await fetch(
  //   //   `https://api.github.com/search/users?q=${name}&client-id=922940d953c66aeae317&client_secret=922940d953c66aeae317`
  //   // );
  //   // const data = await res.json();
  //   // console.log(data.items);
  //   // setUsers(data.items);
  // };

  // const gotosingle = (id) => {
  //   // setUser(users[id]);
  // };

  return (
    <div>
      <BrowserRouter basename="github-users-fn">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
              // onSearchHandler={onSearchHandler}
              // users={users}
              // gotosingle={gotosingle}
              />
            }
          />
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
