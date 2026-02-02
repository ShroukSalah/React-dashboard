import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
      }}
    >
      <img
        src={user.image}
        alt={user.firstName}
        width="60"
        style={{ borderRadius: "50%" }}
      />

      <h4 style={{ margin: "10px 0 4px" }}>
        {user.firstName} {user.lastName}
      </h4>

      <p style={{ fontSize: "14px", color: "#666" }}>
        {user.email}
      </p>
     
      <Link to={`/users/${user.id}`} style={{ fontSize: "14px" }}>
        View Details →
      </Link>
    </div>
  );
}
