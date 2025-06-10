import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-white">
              <img
                src="/logo.png"
                className="w-14 md:w-18 rounded-full"
                alt="Logo"
              />
              <span className="text-3xl md:text-5xl font-bold ml-2">Qview</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Qview is a trusted platform to explore, review, and share your
              experience with various services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Qview™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            {/* Replace # with your social URLs */}
            <a
              href="#"
              className="text-gray-500 hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white"
              aria-label="Discord"
            >
              <i className="fab fa-discord" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white"
              aria-label="Dribbble"
            >
              <i className="fab fa-dribbble" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
