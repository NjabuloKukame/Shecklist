import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkModeProvider } from "./components/DarkMode.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import Reviews from "./pages/Reviews/Reviews.jsx";
import ReviewsPage from "./pages/Reviews/ReviewsPage/ReviewsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review-page" element={<ReviewsPage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </StrictMode>
);
