import GetThingFromApi from "@/services/api/GetThingFromApi";
import { useState, useEffect } from "react";

const Test = () => {
  const [messages, setMessages] = useState<string[]>(["A", "B", "C", "D"]);
  const [explanation, setExplanation] = useState<string>("");

  const error: string = "An error occurred in the <Test> component";

  useEffect(() => {
    async function main() {
      const result = await GetThingFromApi(error);
      console.log(result);
      setMessages(() => result.messages);
      setExplanation(() => result.explanation);
    }
    main();
  }, []); // run once on mount

  return (
    <div className="text-white p-4">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {index + 1}: {message}
          </li>
        ))}
      </ul>
      <h3>Explanation:</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default Test;
