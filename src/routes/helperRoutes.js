import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../pages/HomePage";
import React from "react";
import { BusinessPage } from "../pages/BusinessPage";
import { EntertainmentPage } from "../pages/EntertainmentPage";
import { GeneralPage } from "../pages/GeneralPage";
import { HealthPage } from "../pages/HealthPage";
import { SciencePage } from "../pages/SciencePage";
import { SportsPage } from "../pages/SportsPage";
import { TechnologyPage } from "../pages/TechnologyPage";

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
          <Route exact path="/business" element={<BusinessPage />} />
          <Route exact path="/entertainment" element={<EntertainmentPage />} />
          <Route exact path="/general" element={<GeneralPage />} />
          <Route exact path="/health" element={<HealthPage />} />
          <Route exact path="/science" element={<SciencePage />} />
          <Route exact path="/sports" element={<SportsPage />} />
          <Route exact path="/technology" element={<TechnologyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
};
