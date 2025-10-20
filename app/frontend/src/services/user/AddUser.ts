import axios from "axios";

async function addUser(data: { name: string; email: string }) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/addUser`,
      data,
      { withCredentials: true }
    );
    console.log(response);
  } catch (error) {
    return null;
  }
}

export default addUser;
