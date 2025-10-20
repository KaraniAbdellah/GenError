import axios from "axios";

async function addUser(data: { name: string; email: string }) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/addUser`,
      data,
      { withCredentials: true }
    );
    // document.cookie = `user_token=${
    //   response.data.user_token
    // }; Secure; SameSite=None; Max-Age=${15 * 24 * 60 * 60}`;
    console.log(response);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default addUser;
