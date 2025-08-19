import { Prompt } from "@prisma/client";

export interface Session {
  session_name: string;
  Prompts?: Prompt[];
}
