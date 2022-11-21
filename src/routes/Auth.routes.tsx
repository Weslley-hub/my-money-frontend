import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgetPassword } from "../pages/ForgetPassword";
import { ForgetPasswordEmail } from "../pages/ForgetPasswordEmail";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/home" element={<Home />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/forget-password-email" element={<ForgetPasswordEmail />} />
      <Route path="/auth/categories" element={<Categories />} />
    </Routes>
  );
}
