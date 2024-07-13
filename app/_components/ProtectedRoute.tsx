"use client";
import React, { useContext } from "react";

import { useEffect } from "react";
import { AuthContext } from "../_context/AuthContext";
import { useRouter } from "next/navigation";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.push("/sign-in");
    }
  }, [router, loading, user]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
