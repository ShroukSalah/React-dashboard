import { useState, useMemo, useCallback } from "react";
import { useUsers } from "../hooks/useUsers";
import UserItem from "../components/UserItem";

export default function Users() {
  const { users, loading, error, refetch } = useUsers();

  const [page, setPage] = useState(1);
  const usersPerPage = 5;

  // حساب عدد الصفحات
  const totalPages = Math.ceil(users.length / usersPerPage);

  // المستخدمين المعروضين
  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * usersPerPage;
    return users.slice(startIndex, startIndex + usersPerPage);
  }, [users, page]);

  // تغيير الصفحة
  const goToPage = useCallback((pageNumber) => {
    setPage(pageNumber);
  }, []);

  const nextPage = useCallback(() => {
    setPage(p => Math.min(p + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage(p => Math.max(p - 1, 1));
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

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          justifyContent: "center",
          marginTop: "16px"
        }}
      >
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              style={{
                fontWeight: page === pageNumber ? "bold" : "normal",
                background: page === pageNumber ? "#333" : "#eee",
                color: page === pageNumber ? "#fff" : "#000",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer"
              }}
            >
              {pageNumber}
            </button>
          );
        })}

        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
