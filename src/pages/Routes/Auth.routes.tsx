import { Route, Routes } from "react-router-dom";

import { Login } from "../Login";
import { Register } from "../Register";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}
