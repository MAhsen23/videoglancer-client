import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Page Not Found - Videoglancer",
    description:
      "Sorry, the page you are looking for cannot be found. Please check the URL or return to the homepage.",
    robots: "noindex, follow",
    alternates: {
      canonical: "https://videoglancer.top/404/",
    },
  };
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Oops! Page not found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-8 py-2 border border-gray-600 text-gray-600 font-bold rounded-full hover:border-gray-800 focus:outline-none text-sm"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
