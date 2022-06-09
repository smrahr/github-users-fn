import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import useGitHubGetUserAPI from "../hooks/useGitHubGetUserAPI";

function User() {
  const { username } = useParams();
  const { user, isLoading, error } = useGitHubGetUserAPI({
    username,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <div>
        <h3>{user.login}</h3>
      </div>
    </div>
  );
}

export default User;
