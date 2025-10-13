// This Context Hold Actually Session
import { createContext } from "react";
import { Session } from "@/types/UserTypes";
import sessionDataDemo from "@/constant/sessionDataDemo";

const SessionContext = createContext<Session | null>(sessionDataDemo);

export default SessionContext;
