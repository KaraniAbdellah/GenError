// This Context Hold Actually Session
import { createContext } from "react";
import { Session } from "@/types/UserTypes";

const SessionContext = createContext<Session[] | null >(null);

export default SessionContext;
