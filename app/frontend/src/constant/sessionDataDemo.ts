import { Session } from "@/types/UserTypes";

const sessionDataDemo: Session = {
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

export default sessionDataDemo;
