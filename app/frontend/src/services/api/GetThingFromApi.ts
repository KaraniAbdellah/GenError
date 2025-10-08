/**
 * [GetThingFromApi function that get thing based on prompt]
 * @param  {[string]} promptError [user prompt]
 * @return {[type]}      [return object that contain two attribute {messages and explanation}]
 */

async function GetThingFromApi(promptError: string) {
  const prompt: string = `
    Based on this error: ${promptError}
    Give me 4 messages to display to the user and a simple explanation.
    Return your output in JSON format like this:
    {
      "messages": ["msg1","msg2","msg3","msg4"],
      "explanation": "..."
    }
    Return only the JSON object.
  `;
  try {
    const res = await fetch("https://api.cerebras.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CEREBRAS_API_KEY}`,
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
    const final_data = await res.json();
    const result = JSON.parse(final_data.choices[0].message.content);
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
}


export default GetThingFromApi;