import ResultApiType from "@/types/ResultApiType";
import { Session } from "@/types/UserTypes";
import axios from "axios";

export default async function AddPromptOutputToSession(
  session: Session,
  userPrompt: string,
  result: ResultApiType
) {
  // Create Prompt
  const data_prompt = {
    prompt_text: userPrompt,
    session_id: session.id,
  };
  const res_prompt = await axios.post(
    `${import.meta.env.VITE_API_URL}/prompt/addPrompt`,
    data_prompt,
    { withCredentials: true }
  );
  // Create Output
  const prompt_id = res_prompt.data.id;
  const data_output = {
    messages: result.messages,
    explanation: result.explanation,
    prompt_id: prompt_id,
  };
  const res_output = await axios.post(
    `${import.meta.env.VITE_API_URL}/output/addOutput`,
    data_output,
    { withCredentials: true }
  );
  const promptToPush = res_prompt.data;
  promptToPush.Output = res_output.data;
  session.Prompts.push(promptToPush);
  return session;
}
