import { UserType } from "@/types/UserTypes";

const userDataDemo: UserType = {
  id: "68e3a699b3d81f9ae7870f33",
  name: "abdellah",
  email: "abdellahkarani@gmail.com",
  Sessions: [
    {
      id: "68e3a6b7b3d81f9ae7870f35",
      session_name: "Session 1",
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
    {
      id: "68e3a6c2b3d81f9ae7870f36",
      session_name: "Session 2",
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
        {
          id: "68e3a72ab3d81f9ae7870f3a",
          prompt_text: "Give Me A Custom Error Here",
          session_id: "68e3a6c2b3d81f9ae7870f36",
          Output: null,
        },
      ],
    },
  ],
  message: "Welcome Again",
};

export default userDataDemo;
