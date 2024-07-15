"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../_lib/firebase";
import { applyActionCode } from "firebase/auth";
import { ErrorToast, SuccessToast } from "../_lib/utils";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          SuccessToast("Email verified successfully!");
          router.push("/verification-success");
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            ErrorToast(error.message);
          }
        });
    }
  }, [oobCode, router]);

  return <div>Verifying your email...</div>;
};

export default VerifyEmail;
