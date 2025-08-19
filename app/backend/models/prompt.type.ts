import { Output } from "@prisma/client";
import { Session } from "inspector/promises";

export interface Prompt {
  prompt_text: string;
  Output?: Output;
}
