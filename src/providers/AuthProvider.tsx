import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

type IAuthContext = {
  user: User;
  loading: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {}
});

interface AuthProviderProps {}

type User = null | { username: string };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        setUser(JSON.parse(user));
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: () => {
          const user = { username: "bob" };
          setUser(user);
          AsyncStorage.setItem("user", JSON.stringify(user));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
