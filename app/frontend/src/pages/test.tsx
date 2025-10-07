import { useState } from "react";

const Test = () => {
  const [messages, setMessages] = useState(["A", "B", "C", "D"]);
  const [explanation, setExplanation] = useState("");
  const [Answer, setAnswer] = useState("");
  const apiKey: string = import.meta.env.VITE_CEREBRAS_API_KEY;
  const prompt: string =
    "based on this error: An error occurred in the <Test> component, give four messages to display to user in one lines each message sperate by this || and give in latest a simple explination for why this error happen and Return your answer in JSON format like this: { 'messages': ['msg1','msg2','msg3','msg4'], 'explanation': '...' and return just json object only";
  async function main(prompt: string) {
    const res = await fetch("https://api.cerebras.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "qwen-3-235b-a22b-instruct-2507",
        stream: false,
        max_tokens: 20000,
        temperature: 0.7,
        top_p: 0.8,
        messages: [
          {
            role: "system",
            content: prompt,
          },
        ],
      }),
    });
    console.log(res);
    const final_data = await res.json();
    console.log(final_data.choices[0].message.content);
    setAnswer(() => final_data.choices[0].message.content);
  }

  main(prompt);

  return (
    <div className="text-white">
      ✅ User Data in Good <br />
      -- Session We Need \ session_name \ <br />
      -- Prompt We Need \ prompt_text: this by user \ <br />
      -- Output We Need \ based on prompt_text we generate some custom error
      messages, explanation \ <br />
      The Goal is to Give prompt and we need to generate custom errors messages
      4 messages and message for developer <br />
      Let's Get The Model that do this: {apiKey}
      <br />
      <br />
      <br />
      <br />
      <h1>Answer:</h1>
      <ul>
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>;
        })}
      </ul>
      <h1>Explination: {explanation}</h1>
      <br />
      <br />
      <br />
      <br />
      <h3>{Answer}</h3>
    </div>
  );
};

export default Test;
