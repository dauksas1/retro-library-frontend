import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('access_token'));
  const [user, setUser] = useState(() => {
    try {
      return token ? jwtDecode(token) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token);
      try {
        setUser(jwtDecode(token));
      } catch {
        setUser(null);
      }
    } else {
      localStorage.removeItem('access_token');
      setUser(null);
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
