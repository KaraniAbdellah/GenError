import { useState } from "react";
import { Mail, Github, Linkedin, Command } from "lucide-react";
import { Link } from "react-router";
import me from "../../public/me.jpeg";

// Mock UserContext for demo - replace with your actual context
const userContext = {
  name: "Abdellah karani",
  email: "abdellahkarani@example.com",
};

const Portfolio = () => {
  const [userData] = useState(userContext);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
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

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Profile Section */}
        <div className="text-center mb-4">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-zinc-800 overflow-hidden">
            <img
              src={me}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-2">
            {userData.name || "Your Name"}
          </h1>
          <p className="text-zinc-400 mb-6">Software Developer</p>

          <p className="text-zinc-700 leading-relaxed max-w-4xl mx-auto">
            Hi there! 👋 After three years of study in university, such as
            networks, compilers, DSA (algorithms and data structures), operating
            systems, and advanced math like algebra and statistics, and
            practicing on real projects like a mini shell in C, a sub-compiler,
            and joining the world of problem solving by solving over 500
            problems this gave me a solid foundation in computer science. I'm
            not stopping here I will continue exploring this world. Now I am
            working in web development with new technologies such as React,
            Spring Boot, and more. I am always exploring what's happening and
            sharing my knowledge to keep myself up to date.
          </p>
        </div>

        {/* Contact Section */}
        <div className=" pt-4">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Get in Touch
          </h2>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href={`mailto:${userData.email}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition"
            >
              <Mail className="w-5 h-5" />
              <span>{userData.email || "email@example.com"}</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="github.com/KaraniAbdellah"
              className="w-10 h-10 bg-zinc-200 hover:bg-zinc-300 rounded-full flex items-center justify-center transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellah-karani-965928294/"
              className="w-10 h-10 bg-zinc-200 hover:bg-zinc-300 rounded-full flex items-center justify-center transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
