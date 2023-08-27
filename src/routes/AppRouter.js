import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../components/Layout/Layout";

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};
