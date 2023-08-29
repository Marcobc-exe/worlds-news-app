import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../pages/HomePage";
import React from "react";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<h1>Login</h1>} />
      <Route path="register" element={<h1>Register</h1>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
};
