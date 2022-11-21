import { Route, Routes } from "react-router-dom";

import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
