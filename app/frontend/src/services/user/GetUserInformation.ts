/**
 * [GetUserInformation function that get all user information]
 * @return {[type]}      [return object that contain all about user {email, name, sessions, ...}]
 */

import axios from "axios";
import UserType from "@/types/UserType";

async function GetUserInformation() {
  try {
    const response = await axios.get<UserType>(
      `${import.meta.env.VITE_API_URL}/user/getUser`,
      { withCredentials: true }
    );
    const userData: UserType = response.data;
    console.log(userData);
    return userData;
  } catch (error) {
    return null;
  }
}

export default GetUserInformation;
