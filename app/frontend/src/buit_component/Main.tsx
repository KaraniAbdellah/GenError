import { ArrowUpRight } from "lucide-react";
import React, { FormEvent, useState } from "react";

import { AutosizeTextarea } from "@/components/autosize-textarea";

const Main = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
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

  const handleUserPromptChange = (e: FormEvent<HTMLFormElement>) => {
    // setUserPrompt(() => e.target.value);
    setUserPrompt(() => e.target.value);
  };
  console.log(userPrompt);

  return (
    <div className=" min-h-[calc(100vh-58px)] p-6 flex flex-col justify-center">
      <div className="bg-red-600">
        <h2 className="text-2xl text-center font-semibold text-gray-800 pb-3">
          What Error's Today?
        </h2>

        <div className="bg-gray-100 p-2 w-full rounded-full border flex justify-between gap-4 shadow-sm">
          <div className="w-[calc(95%-40px)] px-10">
            <AutosizeTextarea
              placeholder="This textarea with min height 52 and max height 200."
              maxHeight={200}
              value={
                userPrompt.length < 300
                  ? userPrompt
                  : userPrompt.substring(0, 299)
              }
              onChange={(e) => handleUserPromptChange(e)}
              className={userPrompt.length > 300 ? `disabled` : ""}
            />
          </div>
          <button className="bg-zinc-500 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white font-medium py-3 transition">
            <ArrowUpRight />
          </button>
        </div>
        <p className="text-xs text-right">
          {userPrompt.length < 300 ? userPrompt.length : 300}/300 Character the
          max is 300 charcter{" "}
        </p>
      </div>
    </div>
  );
};

// log levels: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels
// example; https://www.getvoila.ai/ai-tools/error-message-generator
// Inspeation for Cop/Past button: https://ui.shadcn.com/docs/changelog#button-group

export default Main;
