import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  console.log("UserItem rendered:", user.name);

  return (
    <li>
      <Link to={`/users/${user.id}`}>
        {user.firstName} {user.lastName}
      </Link>
    </li>
  );
}

export default React.memo(UserItem);
