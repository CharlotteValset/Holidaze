/* import React, { createContext, useState, useEffect } from "react";
import { load } from "../storage/load";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      try {
        // Load the access token from local storage
        const accessToken = load("accessToken");
        if (accessToken) {
          setUser({ token: accessToken });
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
 */
