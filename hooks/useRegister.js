import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (
    name,
    email,
    mobile,
    dateOfBirth,
    age,
    gender,
    campus,
    password,
    address,
    invitedBy
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://lifehouse-church-server.onrender.com/api/v1/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          dateOfBirth,
          age,
          gender,
          campus,
          password,
          address,
          invitedBy,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "REGISTER", payload: json });
      setIsLoading(false);
    }
  };

  return { register, error, isLoading };
};

export default useRegister;
