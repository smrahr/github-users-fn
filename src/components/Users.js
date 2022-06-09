import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../style.module.css";

function Users({ users, gotosingle }) {
  const [userName, setUserName] = useState("");

  // const navigate = useNavigate();

  // console.log(users);

  // const goToUser = () => {
  //   setUserName(user.login);
  //   reload();

  //   // gotosingle(id);
  //   // console.log(this.props.history);
  //   // navigate(`/users/${id}`);
  // };

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          <div>
            <img src={user.avatar_url} />
          </div>
          <h3>{user.login}</h3>
          <Link
            className={classes.link}
            to={`/users/${user.login}`} /* onClick={goToUser} */
          >
            Go
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
