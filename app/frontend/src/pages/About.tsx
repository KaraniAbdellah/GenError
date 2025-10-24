import userContext from "@/context/UserContext";
import { useContext } from "react";
const About = () => {
  const [userData] = useContext(userContext);
  console.log(userData);
  return <div>About</div>;
};

export default About;
