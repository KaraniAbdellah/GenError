// Example of User Data That Will be Come From Backend
const Userdata = {
  id: "68e3a699b3d81f9ae7870f33",
  name: "abdellah",
  email: "test@gmail.com",
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
            messages: [],
            explanation: "Hello",
            prompt_id: "68e3a6eab3d81f9ae7870f39",
          },
        },
      ],
    },
  ],
  message: "Welcome Again",
};

interface Output {
  id: string;
  messages: string[];
  explanation: string;
  prompt_id: string;
}

interface Prompt {
  id: string;
  prompt_text: string;
  session_id: string;
  Output: Output | null;
}

interface Session {
  id: string;
  session_name: string;
  user_id: string;
  Prompts: Prompt[];
}

interface UserType {
  id: string;
  name: string;
  email: string;
  Sessions: Session[];
  message: string;
}

export default UserType;
