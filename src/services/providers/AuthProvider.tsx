import { useNavigation } from "expo-router";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ReactNode, useState } from "react";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import AuthContext from "@/contexts/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

type AuthData = {
  email: string;
  password: string;
};

export type AuthContextProps = {
  user: TUser;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signup: (data: AuthData) => void;
  login: (data: AuthData) => void;
  logout: () => void;
};

type TUser = User | null;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TUser>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();

  const auth = FIREBASE_AUTH;

  const login = async (data: AuthData) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      navigate.goBack();
    } catch (e: any) {
      console.log(e);
      alert("login failed:" + e.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: AuthData) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      navigate.goBack();
    } catch (e: any) {
      console.log(e);
      alert("Registration failed:" + e.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    FIREBASE_AUTH.signOut();
  };

  /* const login = async (data: AuthData) => { */
  /*   try { */
  /*     const response = await fetch("your-api-endpoint/auth/login", { */
  /*       method: "POST", */
  /*       headers: { */
  /*         "Content-Type": "application/json", */
  /*       }, */
  /*       body: JSON.stringify(data), */
  /*     }); */
  /*     const res = await response.json(); */
  /*     if (res.data) { */
  /*       setUser(res.data.user); */
  /*       setToken(res.token); */
  /*       localStorage.setItem("site", res.token); */
  /*       navigate("/dashboard"); */
  /*       return; */
  /*     } */
  /*     throw new Error(res.message); */
  /*   } catch (err) { */
  /*     console.error(err); */
  /*   } */
  /* }; */

  /* const logOut = () => { */
  /*   setUser(null); */
  /*   setToken(""); */
  /*   localStorage.removeItem("site"); */
  /*   navigate("/login"); */
  /* }; */

  const value: AuthContextProps = {
    user,
    setUser,
    loading,
    setLoading,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
