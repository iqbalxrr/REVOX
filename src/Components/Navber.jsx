import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router"; 
import Loader from "./Loader";
import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthProvider";

const Navber = () => {
  const navigate = useNavigate();
  const { user, LogOut, loading, } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);



  const handleLogout = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully",
          icon: "success",
        });
        navigate("/signin");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  if (loading) return <Loader />;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </li>
      <li>
        <NavLink to="/allservices" onClick={() => setMenuOpen(false)}>All Services</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addservice" onClick={() => setMenuOpen(false)}>Add Service</NavLink>
          </li>
          <li>
            <NavLink to="/myservices" onClick={() => setMenuOpen(false)}>My Services</NavLink>
          </li>
          <li>
            <NavLink to="/myreviews" onClick={() => setMenuOpen(false)}>My Reviews</NavLink>
          </li>
        </>
      )}
    </>
  );

  // console.log("User:", user , user?.photoURL);

  return (
    <nav className={`border-b mont-font border-gray-200 bg-white shadow-md fixed w-full top-0 z-50 px-2`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center  ">
          <img src="/logo22.png" className="w-35 md:w-40 mr-0" alt="Logo" />
          <span className="text-3xl md:text-5xl font-bold mt-5  ">
           {/* <span className=" text-gray-700">Revix</span> */}
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`w-full lg:w-auto lg:flex ${menuOpen ? "block" : "hidden"}`}>
          <ul className={` text-[18px] poppins flex flex-col lg:flex-row lg:gap-5 space-y-3 lg:space-y-0 items-center  py-4 lg:mt-0  lg:p-0 rounded-lg lg:rounded-none `}>
            {navLinks}

            <li className="mt-2 lg:mt-0 flex items-center gap-2">
             {user && (
              <div>
                <div
                  className=" tooltip tooltip-bottom tooltip-primary " data-tip={user?.displayName} 
                  
                >
                  <img
                    src={
                      user?.photoURL ||
                      "" 
                    }
                    className="w-12 mt-2  rounded-full hidden lg:block"
                    alt="User Avatar"
                  />
                </div>
              </div>
            )}
            
              {!user ? (
                <div className="flex flex-col lg:flex-row gap-2 text-center">
                  <Link
                    to="/signin"
                    className="block px-4 py-2 bg-[#017CDB] text-white rounded hover:bg-[#005f94] transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 bg-[#017CDB] text-white rounded hover:bg-[#005f94] transition-all"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 bg-[#017CDA] text-white rounded hover:bg-[#005f94] transition-all"
                >
                  Log out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;


