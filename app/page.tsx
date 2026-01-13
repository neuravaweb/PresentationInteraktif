import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Disclaimer />

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Interactive Phishing Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how phishing works by experiencing it safely
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link href="/fake-login">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                Fake Login Attack
              </h2>
              <p className="text-gray-600 text-center">
                Experience how attackers steal credentials through fake login
                pages
              </p>
            </div>
          </Link>

          <Link href="/urgent-message">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-orange-500">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                Urgent Message Attack
              </h2>
              <p className="text-gray-600 text-center">
                Learn how psychological pressure is used to manipulate victims
              </p>
            </div>
          </Link>

          <Link href="/account-verification">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-purple-500">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                Account Verification Scam
              </h2>
              <p className="text-gray-600 text-center">
                Discover how personal information is harvested through fake
                verification forms
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
