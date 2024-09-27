import React, { createContext, useState, useContext, ReactNode, useEffect, useMemo } from "react";
import { User, UserContextType } from "../Interface/User";
import fetchUserWithJwt from "../Services/UserServices/fetchUserWithJwt";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const userMemo = useMemo(() => ({user, setUser}), [user, setUser])

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      const fetchData = async () => {
        const user = await fetchUserWithJwt(jwt);
        setUser(user);
      };

      fetchData();
    }
  }, []);

  return (
    <UserContext.Provider value={userMemo}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};