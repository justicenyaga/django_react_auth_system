import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ActivateAccountPage from "./pages/ActivateAccountPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetPasswordConfirmPage from "./pages/ResetPasswordConfirmPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/activate/:uid/:token"
            element={<ActivateAccountPage />}
          />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirmPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
