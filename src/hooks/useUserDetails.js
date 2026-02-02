import { useEffect, useState } from "react";
import { getUserById } from "../services/users.service";

export function useUserDetails(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await getUserById(id);
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  return { user, loading, error };
}
