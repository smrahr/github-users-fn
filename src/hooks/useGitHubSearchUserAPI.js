import React, { useEffect, useState } from "react";

export default function useGitHubSearchUserAPI(query, options) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { enabled = true } = options ?? {};

  const reload = () => {
    setIsLoading(true);

    fetch(
      `https://api.github.com/search/users?q=${query}&client-id=922940d953c66aeae317&client_secret=922940d953c66aeae317`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data.items))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (enabled && query?.length > 0) {
      reload();
    }
  }, [query, options]);

  return { users, reload, isLoading };
}
