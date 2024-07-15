import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Main from "./components/main/Main";
import Layout from "./components/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/authorization/Login";

function App() {
  const { token } = useSelector((store: { user: any }) => store.user);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/authorization" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
