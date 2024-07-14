"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../_context/AuthContext";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../_lib/firebase";
import { ErrorToast, SuccessToast } from "../_lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  email: "",
  password: "",
};

function SigninForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const { setLogin, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        setLoading(true);
        setLogin(true);
        router.push("/blog");
      } else {
        ErrorToast("All fields are mandatory to be filled");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorToast(error.message);
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
      setLoading(true);
      SuccessToast("Login with Google Complete");
    } catch (error: unknown) {
      if (error instanceof Error) {
        ErrorToast(error.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button
        onClick={signInWithGoogle}
        className="text-[14px] border border-bgIcon px-24 py-3 rounded-lg text-center flex items-center justify-center gap-2"
      >
        <Image width="20" height="10" src="Google.svg" alt="Google Icon" />
        Log in with Google
      </button>
      <div className="text-center flex items-center gap-4 py-4">
        <div className="w-32 h-[1px] bg-bgIcon"></div>
        Or
        <div className="w-32 h-[1px] bg-bgIcon"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="pb-4">
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="pb-2 flex items-center relative">
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={password}
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
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex justify-end text-btnOrange text-[14px] mb-4"
          >
            Forgot password?
          </Link>
          <input
            className="bg-black text-white rounded-xl py-2 w-[400px] cursor-pointer hover:bg-white hover:text-black border duration-300"
            type="submit"
            value={`${loading ? "Loading..." : "Log In"}`}
          />
        </div>
      </form>
    </>
  );
}

export default SigninForm;
