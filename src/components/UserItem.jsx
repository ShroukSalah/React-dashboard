import React from "react";

function UserItem({ user }) {
  console.log("UserItem rendered:", user.name);

  return (
    <li>
      {user.firstName}
    </li>
  );
}

export default React.memo(UserItem);
