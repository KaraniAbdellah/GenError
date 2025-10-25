import React, { useState } from "react";
import { Command, Send } from "lucide-react";
import { Link } from "react-router";

interface FormData {
  name: string;
  message: string;
}

interface FormErrors {
  name?: string;
  message?: string;
}

const Help: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-sm font-mono">
                <Command></Command>
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

        {isSuccess && (
          <div className="mb-6 p-4 bg-gray-900 text-white rounded-lg">
            <p className="text-sm font-medium">Message sent successfully!</p>
            <p className="text-sm text-gray-300 mt-1">
              We'll get back to you soon.
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
          <div className="space-y-6">
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
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
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
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Describe your issue or question..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                {formData.message.length} characters (minimum 10)
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            You can also reach us at{" "}
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
