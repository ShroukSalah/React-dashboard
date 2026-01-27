import { useState, useMemo, useCallback } from "react";
import { useUsers } from "../hooks/useUsers";
import UserItem from "../components/UserItem";

export default function Users() {
  const { users, loading, error, refetch } = useUsers();

  const [page, setPage] = useState(1);
  const usersPerPage = 7;

  // Pagination logic
  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return users.slice(startIndex, endIndex);
  }, [users, page]);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const nextPage = useCallback(() => {
    setPage(p => p + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage(p => p - 1);
  }, []);

  if (loading) return <p>Loading users...</p>;

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={refetch}>Retry</button>
      </>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Users</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {paginatedUsers.map(user => (
          <UserItem key={user.id} user={user} />  
        ))}
      </ul>

      {/* Pagination Controls */}
      <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
