// This Function Should Be Return Object
//  That Contain Color for Each Message and Toast Code
// Example of messages: const messages = ["A", "B", "C", "D"];

import CustomMessageType from "@/types/CustomMessageType";

function RenderMessageCardByFlag(messages: string[]) {
  const custom_messages: Array<Array<CustomMessageType>> = [];
  messages.map((message) => {
    const subCustomMessage: {
      message: string;
      flag: string;
      code: string;
      color: string;
    }[] = [
      {
        message: message,
        flag: "Error",
        code: `toast.error("${message}");`,
        color: "#EF4444",
      },
      {
        message: message,
        flag: "Warning",
        code: `toast.warning("${message}");`,
        color: "#F59E0B",
      },
      {
        message: message,
        flag: "Success",
        code: `toast.success("${message}");`,
        color: "#10B981",
      },
      {
        message: message,
        flag: "Info",
        code: `toast.info("${message}");`,
        color: "#3B82F6",
      },
    ];
    custom_messages.push(subCustomMessage);
  });
  return custom_messages;
}

export default RenderMessageCardByFlag;
