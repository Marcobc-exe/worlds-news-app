import { CircularProgress } from "@mui/material";
import { PrivateRoutes, PublicRoutes } from "./helperRoutes";
import { Route, Routes } from "react-router-dom";

const Status = {
  CHECKING: "checking",
  AUTHENTICATED: "authenticaded",
  NO_AUTHENTICATED: "no-authenticated",
};

let status = Status.AUTHENTICATED;

export const AppRouter = () => {
  if (status === "checking") return <CircularProgress color="#d9d9d9" />;

  return (
    <Routes>
      {status === "authenticaded" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
