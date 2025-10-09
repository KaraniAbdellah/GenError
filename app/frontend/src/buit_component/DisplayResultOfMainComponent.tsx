import UserType from "@/types/UserType";

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
            prompt_text: "Give Me A Custom Error Here",
            session_id: "68e3a6c2b3d81f9ae7870f36",
            Output: {
              id: "68e3a775321fd5e8d6c64b4c",
              messages: ["A", "B", "C", "D"],
              explanation: "Hello",
              prompt_id: "68e3a6eab3d81f9ae7870f39",
            },
          },
        ],
      },
    ],
    message: "Welcome Again",
  };

  return (
    <section className="sm:mx-5 md:mx-7 lg:mx-20">
      {Userdata.Sessions.map((session) => (
        <div key={session.id} className="mb-4 border p-3 rounded-lg bg-gray-50">
          {session.Prompts.map((prompt) => (
            <div key={prompt.id} className="mb-2 p-2 border rounded bg-white">
              <div className="prompt bg-red-300">
                <p className="italic text-gray-600 text-right">
                  Prompt: {prompt.prompt_text}
                </p>
              </div>
              <div className="mt-2 output bg-green-300">
                <p className="mt-1 text-gray-700">
                  <span className="font-medium">Explanation:</span>{" "}
                  {prompt.Output.explanation}
                </p>
                <p className="font-medium">Messages:</p>
                <ul className="list-disc list-inside">
                  {prompt.Output.messages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DisplayResultOfMainComponent;
