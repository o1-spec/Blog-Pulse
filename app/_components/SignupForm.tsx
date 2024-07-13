"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "../_lib/utils";
import { auth, googleProvider } from "../_lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Image from "next/image";
import { AuthContext } from "../_context/AuthContext";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const { setUser, setLogin, user } = useContext(AuthContext);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { email, password, userName, confirmPassword } = state;
  const router = useRouter();
  console.log(user);
  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        ErrorToast("Password dont match eachother");
      }
      if (userName && email && password) {
        setLoading(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //sending email verification
        await sendEmailVerification(user);
        await updateProfile(user, { displayName: userName });
        SuccessToast("Check your email to verify your account.");
        router.push("/verification-success");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorToast(error);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      router.push("/blog");
      SuccessToast("Google sign up complete");
      setLoading(true);
    } catch (error: unknown) {
      ErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <button
        onClick={signInWithGoogle}
        className="text-[14px] border border-bgIcon px-24 py-3 rounded-lg text-center flex items-center justify-center gap-2"
      >
        <Image width="20" height="10" src="Google.svg" alt="Google Icon" />
        Sign up with Google
      </button>
      <div className="text-center flex items-center gap-4 py-4">
        <div className="w-32 h-[1px] bg-bgIcon"></div>
        Or
        <div className="w-32 h-[1px] bg-bgIcon"></div>
      </div>
      <form onSubmit={signUp}>
        <div className="pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Username
          </label>
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="text"
            name="username"
            placeholder="Username"
            value={userName}
            onChange={handleChange}
          />
        </div>
        <div className="pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Email
          </label>
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Password
          </label>
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="password"
            name="password"
            placeholder="Create a password"
            value={password}
            onChange={handleChange}
          />
          <span className="text-black text-[12px] pl-1">
            Must be at least 8 characters
          </span>
        </div>
        <div className="pb-2">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Confirm Password
          </label>
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <input
            className="bg-black text-white rounded-xl py-2 px-36 cursor-pointer hover:bg-white hover:text-black border duration-300"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
    </>
  );
}

export default SignupForm;
