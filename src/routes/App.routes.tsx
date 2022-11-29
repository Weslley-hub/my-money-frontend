import { Route, Routes } from "react-router-dom";

import { Categories } from "../pages/Categories";
import { ForgetPassword } from "../pages/ForgetPassword";
import { ForgetPasswordEmail } from "../pages/ForgetPasswordEmail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProfileSettings } from "../pages/ProfileSettings"
import { Revenues } from "../pages/Revenues"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/forget-password-email" element={<ForgetPasswordEmail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profile-settings" element={<ProfileSettings/>} />
     <Route path="/revenues" element={<Revenues/>} /> 
    </Routes>
  );
}
