import ProtectedRoute from "@/auth/ProtectedRoute";
import Layout from "@/layouts/Layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import HomePage from "@/pages/HomePage";
import ManageRestaurantPage from "@/pages/ManageRestaurantPage";
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
      <Route path='/' element={<ProtectedRoute />}>
        <Route
          path='/user-profile'
          element={
            <Layout showHero>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path='/manage-restaurant'
          element={
            <Layout showHero>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
