import {
  User as prismaUserType,
  Session as prismaSessionType,
  Prompt as prismaPromptType,
  Output as prismaOutputType,
} from "@prisma/client";

export type userType = Omit<prismaUserType, "id">;
export type sessionType = Omit<prismaSessionType, "id">;
export type promptType = Omit<prismaPromptType, "id">;
export type outputType = Omit<prismaOutputType, "id">;
