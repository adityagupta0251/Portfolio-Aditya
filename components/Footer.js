"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  // Navbar states
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  // Contact modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside mobile menu
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

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  // Email submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent! Check your inbox.");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Failed to send. Please try again later.");
    }
    e.target.reset();
  };

  return (
    <div className="sticky top-0 z-50 px-4">
      {/* Navbar structure remains unchanged */}
      <div
        className={`relative mx-auto max-w-6xl transition-all duration-300 ease-out ${
          scrolled ? "mt-2" : "mt-3"
        }`}
      >
        <div className="absolute inset-0 bg-lime-bg-gray-600 rounded-full shadow-xl opacity-95 h-14" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-full h-14" />

        <div className="relative flex items-center justify-between px-8 h-14">
          <div className="flex items-center gap-4">
            {/* Mobile menu button remains same */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {/* SVG icon remains same */}
            </button>
            <a className="text-xl font-bold tracking-tighter transform transition-transform duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-white via-green-bg-gray-600 to-emerald-200 bg-clip-text text-transparent">
                AdiK0.dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Updated Contact Us button */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex space-x-1">
              <li>
                <a
                  href="https://nextgendev.space"
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1k_pPZVH8r_xdkVBOmDErzVujPN2kByi_/view?usp=sharing"
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <a href="https://github.com/sponsors/adityagupta0251" >Join Us</a>
        </div>
      </div>

      {/* Mobile menu remains unchanged */}

      {/* Contact Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-white/50 backdrop-blur-md flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white bg-opacity-90 rounded-2xl p-6 w-full max-w-md shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              👋 Hello!
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg 
                text-gray-900 bg-white
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500
                transition-all duration-200 hover:border-gray-500
                placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Subject
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg 
                text-gray-900 bg-white
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500
                transition-all duration-200 hover:border-gray-500
                placeholder:text-gray-500"
                  placeholder="Regarding..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg 
                text-gray-900 bg-white
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500
                transition-all duration-200 hover:border-gray-500
                placeholder:text-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg 
                text-gray-900 bg-white
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500
                transition-all duration-200 hover:border-gray-500
                resize-y min-h-[100px] placeholder:text-gray-500"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg
              hover:bg-blue-800 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
              shadow-lg hover:shadow-xl active:scale-95"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
