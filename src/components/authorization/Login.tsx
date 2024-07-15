// src/components/Login.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { setUser } from "../../redux/authSlice";
import { Button, Container } from "./Login.styles";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(setUser(user));
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <Button onClick={handleLogin}>Login with Google</Button>
    </Container>
  );
};

export default Login;
