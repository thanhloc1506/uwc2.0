import { Tooltip } from "flowbite-react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from "../../config/firebase";
import { IMessage } from "../../types";

interface Message {
  message: IMessage;
}

const Message: React.FC<Message> = ({ message }) => {
  const [loginUser, _loading, _error] = useAuthState(authentication);

  const messageType = loginUser?.email === message.user;
  return (
    <div
      className={`w-fit break-words max-w-[90%] min-w-[35%] px-3 py-3 rounded-lg m-2 relative ${
        messageType ? "ml-auto bg-blue-300" : "bg-gray-100"
      }`}
    >
      <Tooltip
        content={message.sent_at}
        placement={messageType ? "left" : "right"}
        className="text-xs mb-1 mr-1 bg-black text-white"
      >
        <p>{message.text}</p>
      </Tooltip>
    </div>
  );
};

export default Message;
