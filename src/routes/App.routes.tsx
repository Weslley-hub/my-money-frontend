import { Route, Routes } from "react-router-dom";

import { Categories } from "../pages/Categories";
import { ForgetPassword } from "../pages/ForgetPassword";
import { ForgetPasswordEmail } from "../pages/ForgetPasswordEmail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/forget-password-email" element={<ForgetPasswordEmail />} />
      <Route path="/auth/categories" element={<Categories />} />
    </Routes>
  );
}
