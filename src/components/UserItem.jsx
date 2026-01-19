import React from "react";

function UserItem({ user }) {
  console.log("UserItem rendered:", user.name);

  return (
    <li>
      {user.name}
    </li>
  );
}

export default React.memo(UserItem);
