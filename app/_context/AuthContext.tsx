"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { User, signOut } from "firebase/auth";
import { AuthContextType } from "../_lib/TypeInterface";
import { auth } from "../_lib/firebase";

//INITIAL POST CONTEXT VALUE
const initialPostContextValue: AuthContextType = {
  setUser: (_user: User) => {},
  user: null,
  logIn: false,
  setLogin: (_logIn: boolean) => {},
  handleLogout: () => {},
  loading: false
};

//AUTH CONTEXT
export const AuthContext = createContext<AuthContextType>(
  initialPostContextValue
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [logIn, setLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  //const [online, setOnline] = useState(navigator.onLine);

  //SETTING AUTHENTIFICATION
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
      } else {
        setUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  //LOGOUT FUNCTION
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  //AUTH CONTEXT PROVIDER
  return (
    <AuthContext.Provider
      value={{ setUser, loading, user, logIn, setLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
*/
