import UserType from "@/types/UserType";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Info,
  AlertTriangle,
  XCircle,
  Terminal,
  Copy,
} from "lucide-react";
import RenderMessageCardByFlag from "@/services/utils/RenderMessageCardByFlag";
import CustomMessageType from "@/types/CustomMessageType";
import { useEffect, useState } from "react";

const DisplayResultOfMainComponent = () => {
  const [customErrorMessages, setCusomtErrorMessages] = useState<
    Array<CustomMessageType>
  >([]);

  const Userdata: UserType = {
    id: "68e3a699b3d81f9ae7870f33",
    name: "abdellah",
    email: "abdellahkarani@gmail.com",
    Sessions: [
      {
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
        ],
      },
      {
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
        ],
      },
    ],
    message: "Welcome Again",
  };

  const CopyToClibord = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const getIconByFlag = (flagName: string) => {
    const name = flagName.toLowerCase();
    if (name.includes("error") || name.includes("danger")) {
      return <XCircle className="w-5 h-5" />;
    } else if (name.includes("warning")) {
      return <AlertTriangle className="w-5 h-5" />;
    } else if (name.includes("info")) {
      return <Info className="w-5 h-5" />;
    }
    return <AlertCircle className="w-5 h-5" />;
  };

  useEffect(() => {
    const customErrorMessages = RenderMessageCardByFlag([
      "Please check the information entered",
      "Something doesn't look right here",
      "We need a bit more details",
      "Let's try that again",
    ]);
    console.log(customErrorMessages);
    setCusomtErrorMessages(() => customErrorMessages);
    return () => {};
  }, []);

  return (
    <section className="sm:mx-2 md:mx-5 lg:mx-8">
      {Userdata.Sessions.map((session) => (
        <div
          key={session.id}
          className="mb-6  p-1 rounded-xl bg-gradient-to-br"
        >
          {session.Prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="mb-4 p-4 rounded-xl
              border from-gray-50 to-white border-gray-200"
            >
              <div className="prompt flex justify-end mb-4">
                <div className="max-w-[70%] text-left bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-xl border border-sky-200">
                  <p className="text-xs flex justify-start items-center font-semibold text-sky-600 uppercase tracking-wide mb-1">
                    <Terminal />
                    <p className="ml-2">Prompt</p>
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    {prompt.prompt_text}
                  </p>
                </div>
              </div>

              <div className="output bg-gradient-to-br border-gray-200 rounded-xl">
                <div className="explanation mb-6 p-2 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="text-xs flex justify-start items-center font-semibold text-sky-700 uppercase tracking-wide mb-2">
                        <Info />
                        <p className="ml-2">Explanation</p>
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {prompt?.Output?.explanation ||
                          "This is a detailed explanation of the model's response based on the given prompt."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="messages">
                  <p className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
                    Validation Messages
                  </p>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {customErrorMessages.length > 0 &&
                      customErrorMessages.map((ErrorMessage, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-xl border-2 bg-white hover transition-all duration-300 transform hover:-translate-y-1"
                          style={{
                            borderColor: ErrorMessage.color,
                          }}
                        >
                          <div
                            className="absolute top-0 left-0 right-0 h-1.5"
                            style={{ backgroundColor: ErrorMessage.color }}
                          />

                          <div className="p-4 pt-5">
                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className="p-1.5 rounded-lg"
                                style={{
                                  backgroundColor: `${ErrorMessage.color}20`,
                                  color: ErrorMessage.color,
                                }}
                              >
                                {getIconByFlag(ErrorMessage.flagName)}
                              </div>
                              <p
                                className="font-semibold text-sm uppercase tracking-wide"
                                style={{ color: ErrorMessage.color }}
                              >
                                {ErrorMessage.flagName}
                              </p>
                            </div>

                            <Tabs defaultValue="message" className="w-full">
                              <TabsList className="w-full grid grid-cols-2 mb-3 bg-gray-100">
                                <TabsTrigger
                                  value="message"
                                  className="text-xs data-[state=active]:bg-white"
                                >
                                  Message
                                </TabsTrigger>
                                <TabsTrigger
                                  value="code"
                                  className="text-xs data-[state=active]:bg-white"
                                >
                                  Code
                                </TabsTrigger>
                              </TabsList>
                              <TabsContent
                                value="message"
                                className="mt-0 p-3 bg-gray-50 rounded-lg border border-gray-200 min-h-[80px] text-sm text-gray-700"
                              >
                                <p className="flex justify-end items-center mb-2">
                                  <button
                                  className="cursor-pointer"
                                    onClick={() =>
                                      CopyToClibord(ErrorMessage.message)
                                    }
                                  >
                                    <Copy size={18} />
                                  </button>
                                </p>
                                <p>{ErrorMessage.message}</p>
                              </TabsContent>
                              <TabsContent
                                value="code"
                                className="mt-0 p-3 bg-gray-900 rounded-lg border border-gray-700 min-h-[80px] text-xs font-mono text-green-400 overflow-x-auto"
                              >
                                <p className="flex justify-end items-center mb-2">
                                  <button
                                    onClick={() =>
                                      CopyToClibord(ErrorMessage.code)
                                    }
                                  >
                                    <Copy size={18} />
                                  </button>
                                </p>
                                <p>{ErrorMessage.code}</p>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DisplayResultOfMainComponent;
