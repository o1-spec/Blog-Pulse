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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const { setUser, setLogin } = useContext(AuthContext);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, userName, confirmPassword } = state;
  const router = useRouter();

  //PASSWORD VISIBILITY
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        ErrorToast("Password dont match eachother");
      }
      if (userName && email && password.length >= 8) {
        setLoading(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //sending email verification
        await sendEmailVerification(user);
        await updateProfile(user, { displayName: userName });
        SuccessToast(
          "Please check your email to verify your account, then sign in "
        );
        router.push("/sign-in");
        //router.push("/verification-success");
      } else {
        ErrorToast("All fields are madatory to fill");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorToast(error.message);
      }
      console.log(error);
    } finally {
      setState(initialState);
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
      if (error instanceof Error) {
        ErrorToast(error.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

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
            name="userName"
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
          <div className="flex items-center relative">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="1x"
              onClick={togglePasswordVisibility}
              className={`${
                !showPassword ? "text-black" : "text-grey"
              } absolute cursor-pointer right-2`}
            />
          </div>
          {password.length < 8 ? (
            <span className="text-[#ff0000] text-[12px] pl-1">
              Must be at least 8 characters
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="pb-2">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Confirm Password
          </label>
          <div className="flex items-center relative">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="1x"
              onClick={togglePasswordVisibility}
              className={`${
                !showPassword ? "text-black" : "text-grey"
              } absolute cursor-pointer right-2`}
            />
          </div>
        </div>
        <div className="mt-5">
          <input
            className="bg-black text-white rounded-xl py-2 w-[400px] cursor-pointer hover:bg-white hover:text-black border duration-300"
            type="submit"
            value={`${loading ? "Loading..." : "Create Account"}`}
          />
        </div>
      </form>
    </>
  );
}

export default SignupForm;
