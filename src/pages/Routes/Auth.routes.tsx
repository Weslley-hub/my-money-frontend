import { Route, Routes } from "react-router-dom";

import { Login } from "../Login";
import { Register } from "../Register";
import { ForgetPassword } from "../ForgetPassword";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}
