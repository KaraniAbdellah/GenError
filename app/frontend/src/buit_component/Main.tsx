import { ArrowUpRight, Plus } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import GetThingFromApi from "@/services/api/GetThingFromApi";
import DisplayResultOfMainComponent from "./DisplayResultOfMainComponent";
import { useContext } from "react";
import userContext from "@/context/UserContext";
import { UserType } from "@/types/UserTypes";

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
    session_name: "React Error",
    user_id: "68e3a699b3d81f9ae7870f33",
    Prompts: [
      {
        id: "68e3a6eab3d81f9ae7870f39",
        prompt_text: "Why my component shows a blank page?",
        session_id: "68e3a6c2b3d81f9ae7870f36",
        Output: {
          id: "68e3a775321fd5e8d6c64b4c",
          messages: [
            "Component can’t read prompt data.",
            "Missing or undefined state value.",
            "Check if props are passed correctly.",
            "Reload and try again.",
          ],
          explanation:
            "The component may try to access data before it exists. Use conditional rendering or check if data is loaded before displaying.",
          prompt_id: "68e3a6eab3d81f9ae7870f39",
        },
      },
    ],
  };

  const userData: UserType | null = useContext(userContext);
  console.log(userData);

  useEffect(() => {
    return () => {};
  }, []);

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

export default Main;

// At Begining Work With Real Data
// And Next Task is Rendring Session in Left Side
// And Also When i Click to Session I Should be figure out Display Componet --> change Session that exit in sessionContext
// and Also If I Click to Button for get errors i should be see if i am in session if it is good else i should create session and translate user to session
