import { Command } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import login_image from "/login_image.webp?url";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-gray-50">
      <div className="flex flex-col gap-4">
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
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={login_image}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
