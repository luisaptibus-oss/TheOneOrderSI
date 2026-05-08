/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Home } from "@/src/pages/Home";
import { Login } from "@/src/pages/Login";
import { Register } from "@/src/pages/Register";
import { HACCPDashboard } from "@/src/pages/HACCPDashboard";
import { PsychDashboard } from "@/src/pages/PsychDashboard";
import { Settings } from "@/src/pages/Settings";
import { Contact } from "@/src/pages/Contact";
import { PrivacyPolicy } from "@/src/pages/legal/PrivacyPolicy";
import { CookiePolicy } from "@/src/pages/legal/CookiePolicy";
import { MainLayout } from "@/src/layouts/MainLayout";
import { DashboardLayout } from "@/src/layouts/DashboardLayout";
import { AuthProvider, useAuth } from "@/src/lib/auth-context";
import { CookieBanner } from "@/src/components/CookieBanner";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Private Routes */}
          <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route path="/haccp" element={<HACCPDashboard />} />
            <Route path="/psychology" element={<PsychDashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
        <CookieBanner />
      </AuthProvider>
    </Router>
  );
}
