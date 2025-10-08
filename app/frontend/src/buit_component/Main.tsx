import { ArrowUpRight } from "lucide-react";
import React from "react";

const Main = () => {
  const messages = [
    "This field cannot be empty.",
    "Please enter a valid email address.",
    "Password must be at least 8 characters.",
    "Password must be at least 10 characters.",
  ];

  const messagesWithCode = [
    {
      text: "This field cannot be empty.",
      color: "red",
      code: "toast.error('This field cannot be empty')",
    },
    {
      text: "Please enter a valid email address.",
      color: "green",
      code: "toast.success('Please enter a valid email address')",
    },
    {
      text: "This field cannot be empty.",
      color: "yello",
      code: "toast.warning('This field cannot be empty')",
    },
    {
      text: "Password must be at least 8 characters.",
      color: "blue",
      code: "toast.info('Password must be at least 8 characters')",
    },
  ];

  const explanation = "This Error Happen Because of ....";

  return (
    <div className=" min-h-[calc(100vh-58px)] p-6 flex flex-col justify-center">
      <div className="">
        <h2 className="text-2xl text-center font-semibold text-gray-800 pb-3">
          What Error's Today?
        </h2>

        <div className="bg-gray-100 p-2 w-full rounded-full border flex justify-between gap-4 shadow-sm">
          <textarea
            className="px-3 w-[calc(95%-40px)] focus:none outline-0 resize-none"
            name="text"
            rows={5}
          ></textarea>

          <button className="bg-zinc-500 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white font-medium py-3 transition">
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

// log levels: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels

export default Main;
