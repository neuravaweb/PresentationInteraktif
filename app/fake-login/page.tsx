"use client";

import { useState } from "react";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export default function FakeLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Disclaimer />

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Attack Detected!
              </h1>
              <p className="text-lg text-gray-600">
                Here's what just happened and how to protect yourself
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-red-900 mb-2">
                  What Information Was Targeted?
                </h2>
                <ul className="list-disc list-inside text-red-800 space-y-1">
                  <li>Your email address: {email || "(not entered)"}</li>
                  <li>Your password: {password ? "••••••••" : "(not entered)"}</li>
                </ul>
                <p className="text-sm text-red-700 mt-3 font-semibold">
                  ✓ Your data was NOT saved. It only existed in browser memory
                  and has been discarded.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  Why This Attack Works
                </h2>
                <ul className="list-disc list-inside text-blue-800 space-y-2">
                  <li>
                    <strong>Fake URL Bar:</strong> Attackers create pages that
                    look identical to legitimate sites, sometimes using similar
                    domain names (e.g., "gmaill.com" instead of "gmail.com")
                  </li>
                  <li>
                    <strong>Visual Deception:</strong> The page design is
                    carefully crafted to mimic the real login page, making it
                    hard to distinguish
                  </li>
                  <li>
                    <strong>Trust Exploitation:</strong> Users are often
                    redirected from emails or messages that appear to come from
                    trusted sources
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-orange-900 mb-2">
                  What Could Happen in Real Life
                </h2>
                <ul className="list-disc list-inside text-orange-800 space-y-2">
                  <li>
                    Attackers gain access to your account and can read your
                    emails, messages, and personal information
                  </li>
                  <li>
                    They may use your account to send phishing emails to your
                    contacts, spreading the attack
                  </li>
                  <li>
                    If you reuse passwords, attackers can try those credentials
                    on other sites (credential stuffing)
                  </li>
                  <li>
                    Your personal data could be sold on the dark web or used for
                    identity theft
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-green-900 mb-2">
                  How to Detect and Prevent
                </h2>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>
                    <strong>Check the URL:</strong> Always verify the domain
                    name in the address bar. Look for misspellings or unusual
                    domains
                  </li>
                  <li>
                    <strong>Look for HTTPS:</strong> Legitimate sites use HTTPS
                    (though attackers can fake this too)
                  </li>
                  <li>
                    <strong>Don't click links in emails:</strong> Navigate
                    directly to the website by typing the URL yourself
                  </li>
                  <li>
                    <strong>Use two-factor authentication (2FA):</strong> Even if
                    your password is stolen, 2FA provides an additional layer of
                    protection
                  </li>
                  <li>
                    <strong>Use a password manager:</strong> Password managers
                    won't autofill on fake sites, helping you detect phishing
                    attempts
                  </li>
                  <li>
                    <strong>Check for typos and poor grammar:</strong> Many
                    phishing sites have spelling errors or awkward phrasing
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                  setPassword("");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Disclaimer />

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Fake URL Bar */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-gray-700 rounded px-4 py-1.5 text-sm text-gray-300 font-mono">
              https://secure-login.example.com
            </div>
          </div>

          {/* Login Form */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Sign in to your account
              </h1>
              <p className="text-gray-600">
                Enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
