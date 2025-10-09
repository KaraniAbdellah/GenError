// This Componetn Wil Recive Session and Display IT
// Display Prompt
// Display Result of Prompt

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
    // <section>
    //   {Userdata &&
    //     Userdata.Sessions &&
    //     Userdata.Sessions.length &&
    //     Userdata.Sessions.map((session, index) => {
    //       return (
    //         <div key={index}>
    //           <h1>Session Name: {session.session_name}</h1>
    //           {session.Prompts &&
    //             session.Prompts.map((prompt) => {
    //               return (
    //                 <div key={index}>
    //                   <h1>Prompt Text: {prompt.prompt_text}</h1>
    //                   <h1>
    //                     Messages:
    //                     {prompt.Output &&
    //                       prompt.Output.messages &&
    //                       prompt.Output.messages.map((message, index) => {
    //                         return (
    //                           <h2>
    //                             message {index}: {message}
    //                           </h2>
    //                         );
    //                       })}
    //                     explanation: {prompt.Output?.explanation}
    //                   </h1>
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       );
    //     })}
    // </section>
    <h1>Display Data Here</h1>
  );
};

export default DisplayResultOfMainComponent;
