import React, { useState, useEffect } from "react";

export default function useGitHubGetUserAPI({ username }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");

  //   const {enabled = true} = options ?? {};

  const reload = () => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        // setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    reload();
  }, [username]);

  return { user, reload, isLoading, error };
}
