import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Video from "../pages/Video";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/404NotFound";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />

        {currentUser && <Route path="/video/:id" element={<Video />} />}
        {currentUser ? (
          <Route path="/" element={<Overview />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
