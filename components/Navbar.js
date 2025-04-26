"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

/**
 * Navbar component with Clerk auth buttons
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="sticky top-0 z-50 px-4">
      <div
        className={`relative mx-auto max-w-6xl transition-all duration-300 ease-out ${
          scrolled ? "mt-2" : "mt-3"
        }`}
      >
        {/* Background and Glass Overlay */}
        <div className="absolute inset-0 bg-lime-bg-gray-600 rounded-full shadow-xl opacity-95 h-14" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full h-14" />

        {/* Content */}
        <div className="relative flex items-center justify-between px-8 h-14">
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <a
              href="/"
              className="text-xl font-bold tracking-tighter transform transition-transform duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-white via-green-bg-gray-600 to-emerald-200 bg-clip-text text-transparent">
                AdiK0.dev
              </span>
            </a>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex space-x-1">
              <li>
                <a
                  href="/"
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  Home
                </a>
              </li>
              <div
                className="relative group"
                onMouseEnter={() => toggleDropdown("aboutDesktop")}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <div className="flex items-center gap-1 px-4 py-3 cursor-pointer hover:bg-white/10 rounded-xl transition-colors">
                  <span>About Me</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "aboutDesktop" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Content */}
                {activeDropdown === "aboutDesktop" && (
                  <div className="absolute top-full left-0 w-48 bg-gray-900 rounded-lg shadow-xl mt-1 py-2 transition-opacity duration-200">
                    <div className="hover:bg-white/10 px-4 py-2">Biography</div>
                    <div className="hover:bg-white/10 px-4 py-2">
                      Experience
                    </div>
                    <div className="hover:bg-white/10 px-4 py-2">Education</div>
                  </div>
                )}
              </div>
              <li>
                <a
                  href="/upcoming"
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  Past & Upcoming Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div>
            <SignedOut>
              <SignInButton>
                <button className="px-6 py-2 bg-gradient-to-r from-gray-200 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="ml-2 px-6 py-2 bg-gradient-to-r from-gray-200 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed md:hidden top-20 inset-x-4 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        } bg-gray-600`}
      >
        <ul className="p-4 space-y-2">
          <li>
            <a
              href="/"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl"
            >
              Home
            </a>
          </li>
          <li>
            <div
              className="px-4 py-3 cursor-pointer hover:bg-white/10 rounded-xl"
              onClick={() => toggleDropdown("aboutMobile")}
            >
              <div className="flex justify-between items-center">
                <span>About Me</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "aboutMobile" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "aboutMobile" ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-2 border-l-2 border-emerald-600/30">
                  <li>
                    <a
                      href="/background"
                      className="block py-2 hover:bg-white/10 rounded-lg px-3"
                    >
                      Background
                    </a>
                  </li>
                  <li>
                    <a
                      href="/academic"
                      className="block py-2 hover:bg-white/10 rounded-lg px-3"
                    >
                      Academic Involvement
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ongoing"
                      className="block py-2 hover:bg-white/10 rounded-lg px-3"
                    >
                      Ongoing Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              href="/upcoming"
              className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl"
            >
              Past & Upcoming Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 * Main HomePage component with ClerkProvider
 */
export default function HomePage() {
  return (
    <ClerkProvider>
      <Navbar />
      {/* You can add more page content below as needed */}
    </ClerkProvider>
  );
}
