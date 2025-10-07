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
    <div className="bg-red-100 min-h-[calc(100vh-58px)] p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-green-600">
        What The Error That You Face Today!
      </h2>

      <input
        className="border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        type="text"
        placeholder="Type your error here..."
      />

      <h2 className="text-gray-700 font-medium">{explanation}</h2>

      <h3 className="text-xl font-semibold text-green-600">Toasts Cart Are:</h3>
      <div className="flex flex-col gap-3">Mode Code / Mode Text</div>

      <div className="flex flex-col gap-2">
        {messages.map((userMessage, index) => (
          <p
            key={index}
            className="bg-white px-4 py-2 rounded shadow text-red-600 font-medium"
          >
            {userMessage}
            HERE WE MUST EXIT FOUR CART WARINIGN, ERROR, INFO, FATAL, DEBUG, TRACE
          </p>
        ))}
      </div>
    </div>
  );
};

// log levels: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels

export default Main;
