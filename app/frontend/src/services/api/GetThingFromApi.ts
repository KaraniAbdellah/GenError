import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_MODEL_AI_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://127.0.0.1:5173/",
    "X-Title": "GenToastError",
  },
  dangerouslyAllowBrowser: true,
});

/**
 * [GetThingFromApi function that get thing based on prompt]
 * @param  {[string]} prompt [user prompt]
 * @param  {[string]} task [is that we want custom user messages || explination of the error]
 * @return {[type]}      [return can be array or string based on task]
 */

async function GetThingFromApi(error: string, WhatDoYouNeed: string) {
  const MessagePrompt =
    "give four messages to display to user in one lines each message sperate by this ||";
  const ExplinationPrompt = "give me an explination for this error";

  let prompt: string;
  if (WhatDoYouNeed == "messages") {
    prompt = "based on this error:" + error + MessagePrompt;
  } else {
    prompt = "based on this error:" + error + ExplinationPrompt;
  }
  prompt += " please use a simple words in englich";

  const completion = await openai.chat.completions.create({
    model: "openai/gpt-4o",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(completion.choices[0].message.content);
}
