import React from "react";

interface UserMessage {
  name?: string;
  message: string;
}

const Message: React.FC<UserMessage> = ({ message }): any => {
  return <p>{message}</p>;
};

export default Message;
