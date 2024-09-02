import Link from "next/link";
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 mt-32 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-4 md:mb-0">
          <Link
            href="/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            Home
          </Link>
          <Link
            href="/about/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            Contact Us
          </Link>
          <Link
            href="/disclaimer/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            Disclaimer
          </Link>
          <Link
            href="/terms-and-conditions/"
            className="text-white hover:text-gray-300 hover:no-underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} | Videoglancer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
