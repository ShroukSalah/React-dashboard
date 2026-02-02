import { useState } from "react";
import { loginService } from "../services/auth.service";
import { useAuthContext } from "../context/AuthContext";

export function useAuth() {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const res = await loginService(data);
      login(res.data);
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
}
