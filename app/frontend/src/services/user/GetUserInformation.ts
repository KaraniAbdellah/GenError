/**
 * [GetUserInformation function that get all user information]
 * @return {[type]}      [return object that contain all about user {email, name, sessions, ...}]
 */

import axios from "axios";
import { UserType } from "@/types/UserTypes";
import toast from "react-hot-toast";

async function GetUserInformation() {
  try {
    console.log(document.cookie);
    const response = await axios.get<UserType>(
      `${import.meta.env.VITE_API_URL}/user/getUser`,
      { withCredentials: true }
    );
    const userData: UserType = response.data;
    return userData;
  } catch (error) {
    console.log(error);
    toast.error("Can Not Get Your Data, Please Refresh The Page", {
      duration: 2000,
      position: "bottom-right",
    });
    return null;
  }
}

export default GetUserInformation;
