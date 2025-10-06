import OpenAI from 'openai';


const Test = () => {
  const apiKey: string = import.meta.env.VITE_MODEL_AI_KEY;
  const prompt: string = "based on this error: An error occurred in the <Test> component, give five message ti display to user and explination without any deatils and use a simple words in englich";
  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: apiKey,
    defaultHeaders: {
      'HTTP-Referer': 'http://localhost:5173/',
      'X-Title': 'GenToastError',
    },
    dangerouslyAllowBrowser: true
  });
  async function main() {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });
    console.log(completion.choices[0].message.content);
  }
  main();
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

      <br /><br /><br /><br />


    </div>
  );
};

export default Test;
