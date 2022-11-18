import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
