// This Function Should Be Return Object
//  That Contain Color for Each Message and Toast Code
// Example of messages: const messages = ["A", "B", "C", "D"];

import CustomMessageType from "@/types/CustomMessageType";

function RenderMessageCardByFlag(messages: string[]) {
  const custom_messages: Array<CustomMessageType> = [];
  const flagsWithColors = [
    { flagName: "error", color: "#EF4444" },
    { flagName: "warning", color: "#F59E0B" },
    { flagName: "info", color: "#3B82F6" },
    { flagName: "success", color: "#10B981" },
  ];

  messages.forEach((message, index) => {
    custom_messages.push({
      message: message,
      code: `toast.${flagsWithColors[index].flagName}("${message}");`,
      color: flagsWithColors[index].color,
      flagName: flagsWithColors[index].flagName
    });
  });

  return custom_messages;
}

export default RenderMessageCardByFlag;
