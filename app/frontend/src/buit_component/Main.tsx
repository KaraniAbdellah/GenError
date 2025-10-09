import { ArrowUpRight, Plus } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import GetThingFromApi from "@/services/api/GetThingFromApi";
import DisplayResultOfMainComponent from "./DisplayResultOfMainComponent";

const Main = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const handleUserPromptChange = (e: FormEvent<HTMLFormElement>) => {
    // setUserPrompt(() => e.target.value);
    setUserPrompt(() => e.target.value);
  };

  const DisplayInput = async () => {
    const result = await GetThingFromApi(userPrompt);
    console.log(result);
  };

  return (
    <div className=" min-h-[calc(100vh-58px)] p-6 flex flex-col justify-center">
      <DisplayResultOfMainComponent></DisplayResultOfMainComponent>
      <div className="entry">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-10">
          What Error's Today?
        </h2>

        <div className="border border-zinc-300 p-2 w-full rounded-md gap-4 shadow-sm">
          <div className="w-full mb-2">
            <AutosizeTextarea
              placeholder="Put anything ..."
              maxHeight={200}
              value={
                userPrompt.length < 300
                  ? userPrompt
                  : userPrompt.substring(0, 299)
              }
              onChange={(e) => handleUserPromptChange(e)}
              className={
                userPrompt.length > 300 ? "disabled border-0" : "border-0"
              }
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="bg-sky-100 hover:bg-sky-200 cursor-pointer border border-sky-300  rounded-full w-[40px] h-[40px] text-sky-800
          flex justify-center items-center"
            >
              <Plus />
            </button>
            <button
              onClick={() => DisplayInput()}
              className={`w-[40px] h-[40px] flex items-center rounded-full justify-center font-medium py-3 transition border border-sky-300 text-sky-800 hover:text-zinc-800
                ${
                  userPrompt.length === 0
                    ? "bg-sky-100 cursor-not-allowed"
                    : "bg-sky-200"
                }`}
            >
              <ArrowUpRight />
            </button>
          </div>
        </div>

        <p className="text-xs text-right text-zinc-500 mt-2">
          {userPrompt.length}/300 characters
        </p>
      </div>
    </div>
  );
};

// log levels: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels
// example; https://www.getvoila.ai/ai-tools/error-message-generator
// Inspeation for Cop/Past button: https://ui.shadcn.com/docs/changelog#button-group

export default Main;
