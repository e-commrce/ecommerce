"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 z-50">
      <div className="bg-blue-500">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <Link href="/" className="text-3xl font-bold leading-none">
            <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
              
            </svg>
          </Link>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link className="text-sm text-blue-600 hover:text-gray-500" href="/">
                Home
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5A1.5 1.5 0 1 0 8 6a1.5 1.5 0 0 0 0 3z"></path>
              </svg>
            </li>
            <li>
              <Link className="text-sm text-blue-600 hover:text-gray-500" href="/Product">
                Product
              </Link>
            </li>
            <li>
              <Link className="text-sm text-blue-600 hover:text-gray-500" href="/Category">
                Category
              </Link>
            </li>
            <li>
              <Link className="text-sm text-blue-600 hover:text-gray-500" href="/Detailes">
                Detailes
              </Link>
            </li>
          </ul>
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/SignIn"
          >
            Sign In
          </Link>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/LogIn"
          >
            Log In
          </Link>
        </nav>

        {isMenuOpen && (
          <div className="navbar-menu relative z-50 lg:hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <button onClick={toggleMenu} className="mr-auto">
                  <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                  
                  </svg>
                </button>
              </div>
              <ul>
                <li>
                  <Link className="text-sm text-blue-600 hover:text-gray-500" href="/">
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
