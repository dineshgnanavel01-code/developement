import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function Analytics({ darkMode, setDarkMode }) {
  return (
    <Dashboard
      title="Analytics"
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
  );
}

function Orders({ darkMode, setDarkMode }) {
  return (
    <Dashboard
      title="Orders"
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}

function Customers({ darkMode, setDarkMode }) {
  return (
    <Dashboard
      title="Customers"
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return localStorage.getItem("nexora-theme") === "dark";
  });
  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "nexora-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Landing 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} />
          } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode} />
          }/>
        <Route
          path="/analytics"
          element={
            <Analytics
              darkMode={darkMode}
              setDarkMode={setDarkMode} />
          }/>
        <Route
          path="/orders"
          element={
            <Orders
              darkMode={darkMode}
              setDarkMode={setDarkMode}/>
          }/>
        <Route
          path="/customers"
          element={
            <Customers
              darkMode={darkMode}
              setDarkMode={setDarkMode}/>
          }/>
        <Route
          path="/profile"
          element={
            <Profile
              darkMode={darkMode}
              setDarkMode={setDarkMode} />
          } />
        <Route
          path="/settings"
          element={
            <Settings
              darkMode={darkMode}
              setDarkMode={setDarkMode}/>
          } />

        
        <Route
          path="*"
          element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}