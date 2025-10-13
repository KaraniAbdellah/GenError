import { createContext } from "react";
import { UserType } from "@/types/UserTypes";
import userDataDemo from "@/constant/userDataDemo";

const userContext = createContext<UserType | null>(userDataDemo);
export default userContext;
