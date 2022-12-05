import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const SignUp = lazy(() => import('../pages/sign/SignUp'));
const SignIn = lazy(() => import('../pages/sign/SignIn'));
const ForgetEmail = lazy(() => import('../pages/sign/ForgetEmail'));
const ForgetPassword = lazy(() => import('../pages/sign/ForgetPassword'));
const SignUpSuccess = lazy(() => import('../pages/sign/SignUpSuccess'));
const SignUpVerification = lazy(() => import('../pages/sign/SignUpVerification'));
const ResetPassword = lazy(() => import('../pages/sign/ResetPassword'));
const ResetPasswordSuccess = lazy(() => import('../pages/sign/ResetPasswordSuccess'));

const SignRoutes = () => {
  return (
    <Routes>
      <Route path="up" element={<SignUp />} />
      <Route path="up-success" element={<SignUpSuccess />} />
      <Route path="up-verification/:token" element={<SignUpVerification />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="in" element={<SignIn />} />
      <Route path="forget-email" element={<ForgetEmail />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="reset-success" element={<ResetPasswordSuccess />} />
    </Routes>
  );
};

export default SignRoutes;
