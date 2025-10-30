import { Command } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import login_image from "/login_image.png?url";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <Command className="text-white w-4 h-4" />
          </div>
          <Link to="/" className="ml-2 text-sm font-medium">
            GenError V0.1
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden lg:block">
          <img
            src={login_image}
            alt="Login"
            className="absolute inset-0 w-full h-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
