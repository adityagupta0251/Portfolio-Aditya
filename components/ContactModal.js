"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/**
 * A floating, cloud-themed contact modal that submits via EmailJS.
 *
 * Props:
 *  - isOpen: boolean — whether the modal is visible
 *  - onClose: () => void — callback to close the modal
 */
export default function ContactModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  // Close on ESC key for accessibility
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);  // re-bind whenever isOpen/onClose change

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

  // Don’t render anything if closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/50 backdrop-blur-md flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white bg-opacity-90 rounded-2xl p-6 w-full max-w-md shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">👋 Hello!</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              name="title"
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
}
