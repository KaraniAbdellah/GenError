import { createContext } from "react";
import UserType from "@/types/UserType";
import userDataDemo from "@/constant/userDataDemo";

const userContext = createContext<UserType>(userDataDemo);
export default userContext;
