import ResultApiType from "@/types/ResultApiType";
import axios from "axios";

export default async function FirstCreateSession(
  result: ResultApiType,
  userPrompt: string
) {
  // Create Session
  const session_name = result.title;
  const res_session = await axios.post(
    `${import.meta.env.VITE_API_URL}/session/addSession`,
    { session_name: session_name },
    { withCredentials: true }
  );
  // Create Prompt
  const data_prompt = {
    prompt_text: userPrompt,
    session_id: res_session.data.id,
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
  const newSession = res_session.data;
  newSession.Prompts.push(res_prompt.data);
  newSession.Prompts[newSession.Prompts.length - 1].Output = res_output.data;
  return newSession;
}
