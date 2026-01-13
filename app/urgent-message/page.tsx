"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export default function UrgentMessagePage() {
  const [action, setAction] = useState<"none" | "click" | "ignore">(
    "none"
  );
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (action === "none" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [action, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (action !== "none") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Disclaimer />

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-orange-600"
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
              <h1 className="text-4xl font-bold text-black mb-2">
                {action === "click"
                  ? "Attack Detected!"
                  : "Good Choice!"}
              </h1>
              <p className="text-lg text-black">
                {action === "click"
                  ? "Here's what just happened and how to protect yourself"
                  : "You avoided the trap. Here's what could have happened"}
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {action === "click" && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h2 className="text-xl font-semibold text-red-900 mb-2">
                    What Happened?
                  </h2>
                  <p className="text-red-800">
                    Clicking the link would have redirected you to a malicious
                    website designed to steal your information or install malware
                    on your device.
                  </p>
                </div>
              )}

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  Why This Attack Works
                </h2>
                <ul className="list-disc list-inside text-blue-800 space-y-2">
                  <li>
                    <strong>Urgency and Fear:</strong> The countdown timer and
                    urgent language create psychological pressure, making you act
                    quickly without thinking
                  </li>
                  <li>
                    <strong>Authority Impersonation:</strong> Messages appear to
                    come from trusted sources (banks, tech companies, government)
                    to gain your trust
                  </li>
                  <li>
                    <strong>Emotional Manipulation:</strong> Threats of account
                    closure, legal action, or security breaches trigger fear
                    responses
                  </li>
                  <li>
                    <strong>Time Pressure:</strong> Limited-time offers or
                    deadlines prevent careful verification
                  </li>
                  <li>
                    <strong>FOMO (Fear of Missing Out):</strong> Creates anxiety
                    about missing important updates or opportunities
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-orange-900 mb-2">
                  What Could Happen in Real Life
                </h2>
                <ul className="list-disc list-inside text-orange-800 space-y-2">
                  <li>
                    <strong>Malware Installation:</strong> Clicking malicious
                    links can download viruses, ransomware, or keyloggers
                  </li>
                  <li>
                    <strong>Phishing Pages:</strong> Redirects to fake login
                    pages that steal your credentials
                  </li>
                  <li>
                    <strong>Identity Theft:</strong> Personal information
                    collected can be used to impersonate you
                  </li>
                  <li>
                    <strong>Financial Loss:</strong> Attackers may gain access to
                    bank accounts or credit cards
                  </li>
                  <li>
                    <strong>Account Takeover:</strong> Compromised accounts can
                    be used to attack your contacts
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h2 className="text-xl font-semibold text-green-900 mb-2">
                  How to Detect and Prevent
                </h2>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>
                    <strong>Pause and Verify:</strong> Legitimate organizations
                    rarely require immediate action. Take time to verify
                  </li>
                  <li>
                    <strong>Check the Sender:</strong> Verify email addresses
                    and phone numbers. Attackers often use similar-looking
                    domains
                  </li>
                  <li>
                    <strong>Look for Red Flags:</strong> Poor grammar, spelling
                    errors, generic greetings, and suspicious links
                  </li>
                  <li>
                    <strong>Don't Click Links:</strong> Navigate directly to the
                    organization's website instead of clicking email links
                  </li>
                  <li>
                    <strong>Verify Independently:</strong> Contact the
                    organization through official channels to confirm the
                    message
                  </li>
                  <li>
                    <strong>Hover Over Links:</strong> Check the actual URL
                    before clicking (though this can be spoofed)
                  </li>
                  <li>
                    <strong>Trust Your Instincts:</strong> If something feels
                    off, it probably is. When in doubt, don't click
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
                  setAction("none");
                  setTimeLeft(300);
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
          {/* Email/SMS Style Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="font-semibold text-black">
                  Security Alert System
                </p>
                <p className="text-sm text-black">security@bank-example.com</p>
              </div>
            </div>
            <p className="text-sm text-black mt-2">To: you@example.com</p>
          </div>

          {/* Urgent Message Content */}
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-black">
                  ⚠️ URGENT: Account Suspension Warning
                </h1>
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {formatTime(timeLeft)}
                </div>
              </div>
              <p className="text-black font-semibold">
                Your account will be permanently suspended if you don't verify
                your identity within the next 5 minutes.
              </p>
            </div>

            <div className="space-y-4 text-black">
              <p>
                Dear Valued Customer,
              </p>
              <p>
                We have detected unusual activity on your account. For your
                security, we have temporarily restricted access. To restore full
                access immediately, you must verify your identity.
              </p>
              <p>
                <strong>Action Required:</strong> Click the link below within
                the next {formatTime(timeLeft)} to verify your account and
                prevent permanent suspension.
              </p>
              <p className="text-sm text-black italic">
                This is a time-sensitive security measure. Failure to verify
                will result in account closure and potential legal action.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={() => setAction("click")}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Verify Account Now →
              </button>
              <button
                onClick={() => setAction("ignore")}
                className="w-full bg-gray-200 text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Ignore
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-black">
                This message was sent to protect your account. If you did not
                request this, please contact support immediately.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-black hover:text-gray-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
