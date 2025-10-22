/**
 * [GetThingFromApi function that get thing based on prompt]
 * @param  {[string]} promptError [user prompt]
 * @return {[type]}      [return object that contain two attribute {messages and explanation}]
 */
import toast from "react-hot-toast";
async function GetThingFromApi(promptError: string) {
  const prompt: string = `
    Based on this error: ${promptError}
      Generate 4 user-friendly messages (not technical).
      - Each message: under 40 characters and this message should be no technical just for users
      and Avoid phrases like“You did,” or "Fix..." “Your action caused.”
      Some error messages are phrased in a way that accuses the user of making an error; errors are already frustrating.

      - Add a simple explanation (under 160 characters) and explination should simple and very clean
      and give the developer a good undertand for the error. 

      - Add a short title (under 20 characters) and titile for the error just for developer remember the error by title.

    Return the result in this JSON format:
      {
      "title": "",
      "explanation": "",
      "messages": ["msg1", "msg2", "msg3", "msg4"]
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
    toast.error("Please Refresh The Page and Try Again!");
    return {};
  }
}

export default GetThingFromApi;
