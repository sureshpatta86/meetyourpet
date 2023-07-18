"use client";
import React from "react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-400">
      <div className="flex flex-col justify-center md:w-full max-w-md px-4 py-8 bg-slate-50 shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900 italic">
            Meet Your Pet
          </h1>
          <div className="w-full mt-4">
            <div className="flex flex-col mt-4">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 mt-2 border rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 mt-2 border rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 mt-2 border rounded-md outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 text-center">
            <span className="text-gray-600">Already have an account?</span>
            <Link
              href="/login"
              className="mx-2 text-blue-600 hover:text-fuchsia-400 
              font-blod text-xl hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
