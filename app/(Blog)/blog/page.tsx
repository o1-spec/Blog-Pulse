"use client";
import ProtectedRoute from "@/app/_components/ProtectedRoute";
import { AuthContext } from "@/app/_context/AuthContext";
import React, { useContext } from "react";

function BlogHome() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <ProtectedRoute>
      <div>{user?.displayName}</div>
    </ProtectedRoute>
  );
}

export default BlogHome;
