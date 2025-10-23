import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 sm:px-7 lg:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <Link
              to="/"
              className="flex items-center space-x-2 text-white text-2xl font-bold mb-4"
            >
              <img src="/logo22.png" alt="" className=" w-40 md:w-50 " />
              {/* <span className=" font-bold mt-3 text-3xl">Revix</span> */}
            </Link>
            <p className="text-sm leading-relaxed">
              REVOX is your go-to platform for discovering honest, insightful, and community-driven reviews on a wide range of products and services. Whether you're looking for the best local restaurants, tech gadgets, apps, or service providers.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition-transform transform hover:scale-110">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/" className="hover:text-white">All Services</Link></li>
              <li><Link to="/" className="hover:text-white">All Review</Link></li>
              <li><Link to="/" className="hover:text-white"> Contact Us </Link></li>
              <li><Link to="/" className="hover:text-white">See Profile</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">
              Subscribe to our Newsletter
            </h4>
            <p className="text-sm mb-4">
              Get the latest updates and event announcements straight to your inbox.
            </p>
            <form className="flex flex-col  gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-5 py-3 bg-gray-800 text-sm text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 w-full sm:w-auto text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2025 REVOX. All rights reserved.</span>
          <div className="text-center md:text-right space-y-1">
            <p>📧 iamekbal75@gmail.com</p>
            <p>📞 +880 124-56890</p>
            <p>📍 Khulna, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
