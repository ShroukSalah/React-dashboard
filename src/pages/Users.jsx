import Layout from "../components/Layout";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

export default function Users() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <Header title="Users Dashboard" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}
