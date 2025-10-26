import React from "react";
import { Command, Send } from "lucide-react";
import { Link } from "react-router";

const Help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-sm font-mono">
                <Command />
              </span>
            </div>
            <Link to="/">
              <span className="ml-2 text-sm font-medium">GenError V0.1</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Help & Support & Contact us
          </h1>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
          <form
            action={`https://getform.io/f/${
              import.meta.env.VITE_HELP_FORM_KEY
            }`}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                minLength={10}
                className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                placeholder="Describe your issue or question..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            You can also reach me at{" "}
            <a
              href="mailto:abdellahkarani@gmail.com"
              className="text-gray-900 underline hover:no-underline"
            >
              abdellahkarani@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
