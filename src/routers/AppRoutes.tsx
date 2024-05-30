import Layout from "@/layouts/Layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import HomePage from "@/pages/HomePage";
import UserProfilePage from "@/pages/UserProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route
        path='/user-profile'
        element={
          <Layout showHero>
            <UserProfilePage />
          </Layout>
        }
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
