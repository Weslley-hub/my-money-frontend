import { Route, Routes } from "react-router-dom";

import React from "react";
import { Login } from "../Login";
import { Register } from "../Register";
import { ForgetPassword } from "../ForgetPassword";
import { ForgetPasswordEmail } from "../ForgetPasswordEmail";
import { Home } from "../Home";
import { Categories } from "../Categories";


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