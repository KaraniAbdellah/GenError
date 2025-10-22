import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import GetThingFromApi from "@/services/api/GetThingFromApi";
import DisplayResultOfMainComponent from "./DisplayResultOfMainComponent";
import { Session, UserType } from "@/types/UserTypes";
import SessionContext from "@/context/SessionContext";
import userContext from "@/context/UserContext";
import FirstCreateSession from "@/services/user/FirstCreateSession";
import ResultApiType from "@/types/ResultApiType";
import AddPromptOutputToSession from "@/services/user/AddPromptOutputToSession";
import GetSessionById from "@/services/user/GetSessionById";

const Main = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const userData: UserType | null = useContext(userContext);
  const [userDemoSession, setUserDemoSession] = useState<Session>();
  const [sessionData, setSessionData]: Session | null =
    useContext(SessionContext);

  const handleUserPromptChange = (e: FormEvent<HTMLFormElement>) => {
    setUserPrompt(() => e.target.value);
  };

  const DisplayInput = async () => {
    console.log("Hello Entry");

    if (!userPrompt.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const result: ResultApiType = await GetThingFromApi(userPrompt);

      if (userData) {
        let session_id: string = sessionData?.id;
        if (!sessionData) {
          session_id = await FirstCreateSession(result, userPrompt);
          // We Need to SetSession
        } else {
          // We Need to Add To The Update The Session [fetch session and set session]
          await AddPromptOutputToSession(sessionData, userPrompt, result);
        }
        // Fecth The session and set session
        const sessionToSelect = await GetSessionById(session_id);
      } else {
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
      }
      setUserPrompt("");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const charCount = userPrompt.length;
  const maxChars = 300;
  const charPercentage = (charCount / maxChars) * 100;

  return (
    <div className="EntryParent min-h-[calc(100vh-58px)] flex flex-col justify-center items-center w-full relative bg-gradient-to-b from-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <DisplayResultOfMainComponent
        data-aos="fade-out"
        session={userData ? sessionData : userDemoSession}
      />

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] max-w-4xl z-10">
        {/* Glassmorphism Container */}
        <div className="backdrop-blur-lg bg-white/80 border border-gray-200/50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
          {/* Input Area */}
          <div className="p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                DisplayInput();
              }}
              className="w-full"
            >
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <AutosizeTextarea
                    placeholder="Put anything (just errors < 3) ..."
                    maxHeight={200}
                    value={
                      userPrompt.length < 300
                        ? userPrompt
                        : userPrompt.substring(0, 299)
                    }
                    onChange={(e) => handleUserPromptChange(e)}
                    className={`w-full resize-none border-0 focus:ring-0 bg-transparent text-gray-800 placeholder:text-gray-400 text-base leading-relaxed ${
                      userPrompt.length > 300 ? "opacity-50" : ""
                    }`}
                    disabled={isLoading}
                  />

                  {/* Animated Border Bottom */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${Math.min(charPercentage, 100)}%` }}
                  ></div>
                </div>

                {/* Send Button with Animation */}
                <button
                  onClick={DisplayInput}
                  disabled={userPrompt.length === 0 || isLoading}
                  type="submit"
                  className={`w-12 h-12 flex items-center justify-center rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    userPrompt.length === 0 || isLoading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl cursor-pointer"
                  }`}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Enhanced Character Counter */}
          <div className="px-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <Sparkles
                className={`w-3 h-3 transition-colors ${
                  charCount > 0 ? "text-purple-500" : "text-gray-400"
                }`}
              />
              <span
                className={`font-medium transition-colors ${
                  charCount > 280
                    ? "text-red-500"
                    : charCount > 200
                    ? "text-orange-500"
                    : charCount > 0
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              >
                {charCount > 0 ? "Keep going..." : "Start typing"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Progress Bar */}
              <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    charPercentage > 93
                      ? "bg-red-500"
                      : charPercentage > 66
                      ? "bg-orange-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                  }`}
                  style={{ width: `${Math.min(charPercentage, 100)}%` }}
                ></div>
              </div>

              <span
                className={`text-xs font-medium tabular-nums transition-colors ${
                  charCount > 280
                    ? "text-red-600 font-bold"
                    : charCount > 200
                    ? "text-orange-600"
                    : "text-gray-500"
                }`}
              >
                {charCount}/{maxChars}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
