import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/users").then(res => {
      setUsers(res.data.users);
      setLoading(false);
    });
  }, []);

  return { users, loading };
}
