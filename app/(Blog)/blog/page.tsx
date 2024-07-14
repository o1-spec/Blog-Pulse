"use client";
import ProtectedRoute from "@/app/_components/ProtectedRoute";
import { AuthContext } from "@/app/_context/AuthContext";
import React, { useContext } from "react";

function BlogHome() {
  const { user, handleLogout } = useContext(AuthContext);
  console.log(user);
  return (
    <ProtectedRoute>
      <div>{user?.displayName}</div>
      <button onClick={handleLogout}>Logout</button>
    </ProtectedRoute>
  );
}

export default BlogHome;
