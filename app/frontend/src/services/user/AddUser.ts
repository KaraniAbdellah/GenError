import axios from "axios";

async function addUser(data: { name: string; email: string }) {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/user/addUser`, data, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default addUser;
