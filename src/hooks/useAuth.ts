import AuthContext from "@/contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { AuthContextProps } from "@/services/providers/AuthProvider";

export const useAuth = () => {
  const { setUser } = useContext(AuthContext) as AuthContextProps;

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return useContext(AuthContext);
};
