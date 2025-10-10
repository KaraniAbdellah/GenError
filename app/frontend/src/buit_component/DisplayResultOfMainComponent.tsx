import UserType from "@/types/UserType";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DisplayResultOfMainComponent = () => {
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
    ],
    message: "Welcome Again",
  };

  // We Gonna Presente Each Message in Three Flag
  /*
    --> Error
    --> Warn
    --> Trace
    --> Info
  */

  return (
    <section className="sm:mx-5 md:mx-7 lg:mx-20">
      {Userdata.Sessions.map((session) => (
        <div
          key={session.id}
          className="mb-6 border p-3 rounded-lg bg-gray-50 shadow-sm"
        >
          {session.Prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="mb-4 p-3 border rounded bg-white shadow"
            >
              <div className="prompt flex justify-end">
                <p className="italic text-gray-700 max-w-[60%] text-left bg-sky-100 p-3 rounded-md border border-sky-200">
                  <span className="font-semibold text-sky-800">Prompt:</span>{" "}
                  {prompt.prompt_text}
                </p>
              </div>

              <div className="output mt-3 bg-sky-50 p-3 border border-sky-200 rounded-md">
                <div className="explanation mb-2">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-sky-800">
                      Explanation:
                    </span>{" "}
                    {prompt?.Output?.explanation ||
                      "This is a detailed explanation of the model's response based on the given prompt."}
                  </p>
                </div>

                <div className="messages">
                  <p className="font-semibold text-sky-800 mb-2">Messages:</p>
                  <ul className="list-none space-y-1 text-gray-700 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {prompt?.Output?.messages.map((msg, idx) => (
                      <Tabs defaultValue="messages" key={idx} className="bg-sky-400 p-2">
                        <TabsList>
                          <TabsTrigger value="code">Toast Code</TabsTrigger>
                          <TabsTrigger value="message">Message</TabsTrigger>
                        </TabsList>
                        <TabsContent value="code">
                          "Make changes to your account here"
                        </TabsContent>
                        <TabsContent value="message">{msg}</TabsContent>
                      </Tabs>
                    ))}
                  </ul>
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
