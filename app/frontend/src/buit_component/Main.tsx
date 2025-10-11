import { ArrowUpRight, Plus } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import GetThingFromApi from "@/services/api/GetThingFromApi";
import DisplayResultOfMainComponent from "./DisplayResultOfMainComponent";

const Main = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const handleUserPromptChange = (e: FormEvent<HTMLFormElement>) => {
    setUserPrompt(() => e.target.value);
  };

  const DisplayInput = async () => {
    const result = await GetThingFromApi(userPrompt);
    console.log(result);
  };
  const session = {
    id: "68e3a6c2b3d81f9ae7870f36",
    session_name: "Why THIS",
    user_id: "68e3a699b3d81f9ae7870f33",
    Prompts: [
      {
        id: "68e3a6eab3d81f9ae7870f39",
        prompt_text:
          "Oui, dans une étude de marché, il est conseillé d'ajouter vos objectifs, car cela montre clairement ce que vous voulez atteindre avec le projet.",
        session_id: "68e3a6c2b3d81f9ae7870f36",
        Output: {
          id: "68e3a775321fd5e8d6c64b4c",
          messages: [
            "Please check the information entered",
            "Something doesn't look right here",
            "We need a bit more details",
            "Let's try that again",
          ],
          explanation:
            "Do that for the entire page and your layout can get verrry weird due to domino effects, plus performance hit would be very unpredictable. You can solve it with JavaScript or manually wrap the text yourself using <br> tags. Obviously the second option won't work if you want the wrap to occur dynamically.",
          prompt_id: "68e3a6eab3d81f9ae7870f39",
        },
      },
      {
        id: "68e3a6eab3d81f9ae7870f39",
        prompt_text:
          "Oui, dans une étude de marché, il est conseillé d'ajouter vos objectifs, car cela montre clairement ce que vous voulez atteindre avec le projet.",
        session_id: "68e3a6c2b3d81f9ae7870f36",
        Output: {
          id: "68e3a775321fd5e8d6c64b4c",
          messages: [
            "Please check the information entered 18383838",
            "Something doesn't look right here 18383838",
            "We need a bit more details 18383838",
            "Let's try that again 18383838",
          ],
          explanation:
            "Do that for the entire page and your layout can get verrry weird due to domino effects, plus performance hit would be very unpredictable. You can solve it with JavaScript or manually wrap the text yourself using <br> tags. Obviously the second option won't work if you want the wrap to occur dynamically.",
          prompt_id: "68e3a6eab3d81f9ae7870f39",
        },
      },
    ],
  };

  return (
    <div className="min-h-[calc(100vh-58px)] p-6 flex flex-col justify-center">
      <DisplayResultOfMainComponent
        session={session}
      ></DisplayResultOfMainComponent>
      <div className="entry sm:mx-2 md:mx-5 lg:mx-8">
        <div className="border border-zinc-300 p-2 w-full rounded-md gap-4 shadow-sm">
          <form onSubmit={DisplayInput} className="w-full mb-2">
            <AutosizeTextarea
              placeholder="Put anything (just errors < 3) ..."
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
          </form>
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
                    : "bg-sky-200 cursor-pointer"
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
