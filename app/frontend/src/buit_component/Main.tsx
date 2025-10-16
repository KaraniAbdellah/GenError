import { ArrowUpRight, Plus } from "lucide-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import GetThingFromApi from "@/services/api/GetThingFromApi";
import DisplayResultOfMainComponent from "./DisplayResultOfMainComponent";
import { Session, UserType } from "@/types/UserTypes";
import SessionContext from "@/context/SessionContext";
import userContext from "@/context/UserContext";
import sessionDataDemo from "@/constant/sessionDataDemo";

const Main = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const userData: UserType | null = useContext(userContext);
  const [userDemoSession, setUserDemoSession] = useState<Session>();

  const handleUserPromptChange = (e: FormEvent<HTMLFormElement>) => {
    setUserPrompt(() => e.target.value);
  };
  const [sessionData]: Session | null = useContext(SessionContext);

  const DisplayInput = async () => {
    const result = await GetThingFromApi(userPrompt);
    console.log(result);

    const session: Session = {
      id: "123456789_session_id",
      session_name: result.title,
      user_id: "anonymous user",
      Prompts: [
        {
          id: "123456789_prompt_id",
          prompt_text: userPrompt,
          session_id: "123456789_session_id",
          Output: {
            id: "123456789_output_id",
            messages: result.messages,
            explanation: result.explanation,
            prompt_id: "123456789_prompt_id",
          },
        },
      ],
    };

    setUserDemoSession(() => session);
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="min-h-[calc(100vh-58px)] p-6 flex flex-col justify-center w-full relative">
      <DisplayResultOfMainComponent
        session={userData ? sessionData : userDemoSession}
      ></DisplayResultOfMainComponent>

      <div className="entry sm:mx-2 md:mx-5 lg:mx-8 bg-gray-100">
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

// Try to fix problem of fixed entry
// When i write prompt should save it into session with user
// impelement the user login
