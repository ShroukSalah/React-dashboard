import { useState, useMemo, useCallback } from "react";
import { useUsers } from "../hooks/useUsers";
import UserItem from "../components/UserItem";

export default function Users() {
  const { users, loading, error, refetch } = useUsers();

  const [page, setPage] = useState(1);
  const usersPerPage = 2;

  const totalPages = Math.ceil(users.length / usersPerPage);

  // Users for current page
  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * usersPerPage;
    return users.slice(startIndex, startIndex + usersPerPage);
  }, [users, page]);

  const goToPage = useCallback((p) => {
    setPage(p);
  }, []);

  const nextPage = useCallback(() => {
    setPage(p => Math.min(p + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage(p => Math.max(p - 1, 1));
  }, []);

  // 🧠 Smart pagination logic
  const getPages = () => {
    const delta = 1;
    const pages = [];

    const left = Math.max(1, page - delta);
    const right = Math.min(totalPages, page + delta);

    // Always show first page
    if (left > 1) {
      pages.push(1);
    }

    // Dots before
    if (left > 2) {
      pages.push("...");
    }

    // Middle pages
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    // Dots after
    if (right < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page
    if (right < totalPages) {
      pages.push(totalPages);
    }

    return pages;
  };


  if (loading) return <p>Loading users...</p>;

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={refetch}>Retry</button>
      </>
    );
  }

  const pages = getPages();

  return (
    <div style={{ maxWidth: "420px", margin: "40px auto" }}>
      <h2>Users</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {paginatedUsers.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>

      {/* Smart Pagination */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>

        {pages.map((p, index) => {
          if (p === "...") {
            return <span key={index}>...</span>;
          }

          return (
            <button
              key={p}
              onClick={() => goToPage(p)}
              style={{
                background: p === page ? "#111" : "#eee",
                color: p === page ? "#fff" : "#000",
                border: "none",
                padding: "6px 10px",
                fontWeight: p === page ? "bold" : "normal",
                cursor: "pointer"
              }}
            >
              {p}
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
