import React, { useContext, useState } from "react";
import { Link, Form, useNavigate } from "react-router";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Contex/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";

const SignupPage = () => {
  const navigate = useNavigate();
  const { CreateUser, SigninWithGoogle, setUser, UpdateUserProfile } =
    useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const provider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setErrorMessage("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be 6–16 characters, include uppercase, lowercase, and a number."
      );
      return;
    }

    CreateUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return UpdateUserProfile({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        Swal.fire({
          title: "Signup Sucessfully!",
          icon: "success",
          draggable: true,
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: `${error.message}`,
          icon: "error",
          draggable: true,
        });
      });
  };

  const handleGoogleLogin = () => {
    SigninWithGoogle(provider)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Signup Sucessfully!",
          icon: "success",
          draggable: true,
        });

        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up | Revox </title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center primary-color mb-6">
            Create an Account
          </h2>
          <Form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-xl cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-primary-color text-white rounded-md hover:bg-purple-700 transition duration-200"
            >
              Signup
            </button>
          </Form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Or signup with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button
                onClick={handleGoogleLogin}
                className="text-red-500 text-xl hover:scale-110 transition"
              >
                <FaGoogle />
              </button>
              <button className="text-gray-800 text-xl hover:scale-110 transition">
                <FaGithub />
              </button>
              <button className="text-blue-400 text-xl hover:scale-110 transition">
                <FaTwitter />
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="primary-color hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SignupPage;
