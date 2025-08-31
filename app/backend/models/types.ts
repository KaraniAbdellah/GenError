// types.ts
import {
  User as prismaUserType,
  Session as prismaSessionType,
  Prompt as prismaPromptType,
  Output as prismaOutputType,
} from "@prisma/client";

// For create payloads (from frontend)
export type userCreateType = Omit<prismaUserType, "id">;
export type sessionCreateType = Omit<prismaSessionType, "id">;
export type promptCreateType = Omit<prismaPromptType, "id">;
export type outputCreateType = Omit<prismaOutputType, "id">;

// For responses (from DB)
export type userType = prismaUserType;
export type sessionType = prismaSessionType;
export type promptType = prismaPromptType;
export type outputType = prismaOutputType;
