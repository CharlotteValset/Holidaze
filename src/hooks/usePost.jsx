import { useState } from "react";
import { authFetch } from "../js/api/authFetch";

export const usePost = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState(null);

  const postData = async (data) => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await authFetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setResponse(json);
    } catch (error) {
      console.error("Error:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, response, isLoading, hasError };
};
