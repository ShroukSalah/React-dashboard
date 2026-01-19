import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserItem from "../components/UserItem";

export default function Users() {
  const { users, loading, error, refetch } = useUsers();
  const [count, setCount] = useState(0); // 👈 state جديد

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={refetch}>Retry</button>
      </>
    );
  }

  return (
    <>
      <h2>Users</h2>

      {/* زر يسبب re-render */}
      <button onClick={() => setCount(count + 1)}>
        Re-render Page ({count})
      </button>

      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
