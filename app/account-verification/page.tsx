"use client";

import { useState } from "react";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export default function AccountVerificationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    birthDate: "",
    ssn: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-purple-600"
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
                  <li>
                    Full Name: {formData.fullName || "(not entered)"}
                  </li>
                  <li>
                    Phone Number: {formData.phone || "(not entered)"}
                  </li>
                  <li>
                    Date of Birth: {formData.birthDate || "(not entered)"}
                  </li>
                  <li>
                    SSN: {formData.ssn ? "•••-••-••••" : "(not entered)"}
                  </li>
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
                    <strong>Legitimate Appearance:</strong> Verification forms
                    look official and are often presented as security measures,
                    making them seem trustworthy
                  </li>
                  <li>
                    <strong>Context Exploitation:</strong> Attackers create
                    scenarios where verification seems necessary (account
                    recovery, security updates, compliance)
                  </li>
                  <li>
                    <strong>Progressive Disclosure:</strong> Forms start with
                    simple information and gradually request more sensitive data
                  </li>
                  <li>
                    <strong>Social Engineering:</strong> Uses authority and
                    urgency to bypass normal skepticism
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-orange-900 mb-2">
                  What Could Happen in Real Life
                </h2>
                <ul className="list-disc list-inside text-orange-800 space-y-2">
                  <li>
                    <strong>Identity Theft:</strong> With your name, DOB, and
                    SSN, attackers can open credit accounts, file tax returns, or
                    commit fraud in your name
                  </li>
                  <li>
                    <strong>Account Takeover:</strong> Personal information can
                    be used to answer security questions and gain access to your
                    accounts
                  </li>
                  <li>
                    <strong>Financial Fraud:</strong> Attackers can apply for
                    loans, credit cards, or make purchases using your identity
                  </li>
                  <li>
                    <strong>Medical Identity Theft:</strong> Your information
                    could be used to obtain medical services or prescriptions
                  </li>
                  <li>
                    <strong>Data Resale:</strong> Your personal information may
                    be sold on the dark web to other criminals
                  </li>
                  <li>
                    <strong>Targeted Attacks:</strong> With your phone number
                    and personal details, attackers can craft more convincing
                    phishing attempts
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-green-900 mb-2">
                  How to Detect and Prevent
                </h2>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>
                    <strong>Question the Request:</strong> Legitimate
                    organizations rarely ask for full SSN or complete personal
                    information via email or web forms
                  </li>
                  <li>
                    <strong>Verify the Source:</strong> Contact the organization
                    directly through official channels to confirm the request
                  </li>
                  <li>
                    <strong>Check the URL:</strong> Verify you're on the
                    official website, not a lookalike domain
                  </li>
                  <li>
                    <strong>Look for Red Flags:</strong> Urgent deadlines,
                    threats, or requests for sensitive data are major warning
                    signs
                  </li>
                  <li>
                    <strong>Use Official Channels:</strong> If verification is
                    needed, initiate contact yourself through the official
                    website or phone number
                  </li>
                  <li>
                    <strong>Limit Information Sharing:</strong> Only provide
                    personal information when absolutely necessary and through
                    verified secure channels
                  </li>
                  <li>
                    <strong>Monitor Your Accounts:</strong> Regularly check your
                    credit reports and account statements for suspicious activity
                  </li>
                  <li>
                    <strong>Freeze Your Credit:</strong> Consider placing a
                    credit freeze to prevent unauthorized account openings
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
                  setFormData({
                    fullName: "",
                    phone: "",
                    birthDate: "",
                    ssn: "",
                  });
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

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Account Verification Required
            </h1>
            <p className="text-gray-600">
              Please verify your identity to continue
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Security Notice:</strong> For your protection, we need to
              verify your identity. This process is required to comply with
              security regulations and prevent fraud.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="ssn"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Social Security Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                placeholder="XXX-XX-XXXX"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
                maxLength={11}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for identity verification per federal regulations
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start">
                <input
                  id="consent"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                  required
                />
                <label
                  htmlFor="consent"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I consent to the collection and verification of my personal
                  information for security purposes. I understand this
                  information will be used to verify my identity and protect my
                  account.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Verify Identity
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
  );
}
