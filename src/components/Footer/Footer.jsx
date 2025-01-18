import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-wrap -mx-6">
          {/* Logo and Copyright Section */}
          <div className="w-full lg:w-3/12 px-6 mb-6 lg:mb-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Link to="/">
                  <Logo width="100px" />
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-6 lg:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-6">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-6 lg:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-6">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full lg:w-2/12 px-6">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-6">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            Follow us on:
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
