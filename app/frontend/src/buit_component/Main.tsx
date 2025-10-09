import { ArrowUpRight } from "lucide-react";
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
          <button
            onClick={() => DisplayInput()}
            className="w-[40px] h-[40px] flex items-center rounded-full cursor-pointer hover:text-zinc-800 bg-sky-100 border border-sky-300 text-sky-800 justify-center font-medium py-3 transition"
          >
            <ArrowUpRight />
          </button>
        </div>
        <p className="text-xs text-right">
          {userPrompt.length < 300 ? userPrompt.length : 300}/300 Character the
          max is 300 charcter{" "}
        </p>
      </div>
      <DisplayResultOfMainComponent></DisplayResultOfMainComponent>
    </div>
  );
};

// log levels: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels
// example; https://www.getvoila.ai/ai-tools/error-message-generator
// Inspeation for Cop/Past button: https://ui.shadcn.com/docs/changelog#button-group

export default Main;
