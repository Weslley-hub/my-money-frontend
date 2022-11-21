import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { AuthRoutes } from "./Auth.routes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoutes />} />
    </Routes>
  );
}
