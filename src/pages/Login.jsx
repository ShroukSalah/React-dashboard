import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
  const { user } = useAuthContext();
  const { loginUser, loading, error } = useAuth();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(form);
        }}
        className="bg-white p-6 rounded w-80 border"
      >
        <h2 className="text-xl mb-4">Login</h2>

        <input
          placeholder="Username"
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-black text-white w-full p-2">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
