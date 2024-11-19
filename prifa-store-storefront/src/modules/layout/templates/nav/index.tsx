"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#b01b1b] fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Sol Menü İkonu (Mobil İçin) */}
          <div className="flex-shrink-0 lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link href="/">
              <img
                src="//prifaco.com/cdn/shop/files/prifa_logo_white_4x_863e8830-cccb-429c-a529-63a87b8374e5.png?v=1724814470&width=600"
                alt="Prifa Logo"
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Menü İtemleri */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/">
              <span className="text-white text-md hover:text-gray-300">Home</span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">
                About
              </span>
            </Link>
            <Link href="/store">
              <span className="text-white text-md hover:text-gray-300">Shop All</span>
            </Link>
            <Link href="/contact">
              <span className="text-white text-md hover:text-gray-300">Contact</span>
            </Link>
            <Link href="/create-your-box">
              <span className="text-white text-md hover:text-gray-300">Create Your Box</span>
            </Link>
          </div>

          {/* Arama ve Alışveriş İkonları */}
          <div className="hidden lg:flex items-center space-x-4 ">
            <Link href="/search">
              <span className="text-white hover:text-gray-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" 
                  className="w-10 h-auto" 
                  viewBox="0 0 26 26"
                >
                <path 
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
                </svg>
              </span>
            </Link>
            <Link href="/cart">
              <span className="text-white hover:text-gray-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" 
                  className="w-10 h-auto" 
                  viewBox="0 0 24 24"
                >
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                About
              </span>
            </Link>
            <Link href="/shop">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Shop All
              </span>
            </Link>
            <Link href="/contact">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Contact
              </span>
            </Link>
            <Link href="/create-your-box">
              <span className="text-white text-md hover:text-gray-700">
                Create Your Box
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
