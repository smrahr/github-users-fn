import React, { useState } from "react";
import Users from "./Users";
import useGitHubSearchUserAPI from "../hooks/useGitHubSearchUserAPI";

function Home(props) {
  // const [name, setName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { users, reload, isLoading } = useGitHubSearchUserAPI(searchQuery, {
    enabled: false,
  });

  const onSearchHandler = (e) => {
    e.preventDefault();
    // setUsername(name);
    reload();
  };

  return (
    <div>
      <form onSubmit={onSearchHandler}>
        <input
          disabled={isLoading}
          type="text"
          placeholder="Enter name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
        <button disabled={isLoading}>search</button>
      </form>
      <Users users={users} />
    </div>
  );
}

export default Home;
