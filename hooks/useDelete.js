import React, { useState } from "react";
import useAuthContext from "./useAuthContext";

const useDelete = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, dispatch } = useAuthContext();

  const deleteUser = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/v1/delete", {
      method: "DELETE",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: "DEFAULT" });
      localStorage.removeItem("user");
      setIsLoading(false);
    }
  };

  return { deleteUser, error, isLoading };
};

export default useDelete;
