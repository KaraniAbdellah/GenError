// Example of User Data That Will be Come From Backend

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

export { UserType, Session, Prompt, Output };
