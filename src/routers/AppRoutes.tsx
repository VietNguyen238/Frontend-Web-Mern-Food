import Layout from "@/layouts/Layout";
import AuthCallbackPage from "@/pages/Auth0CallbackPage";
import HomePage from "@/pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route
        path='/user-profile'
        element={<span className='text-xl'>USER PROFILE PAGE</span>}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
