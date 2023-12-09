import { useState } from "react";
import useAuthContext from "./useAuthContext";

const useUpdate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const update = async (id, email, mobile, address, invitedBy) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://lifehouse-church-server.azurewebsites.net/api/v1/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        email,
        mobile,
        address,
        invitedBy,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "UPDATE", payload: json });
      setIsLoading(false);
    }
  };

  return { update, error, isLoading };
};

export default useUpdate;
