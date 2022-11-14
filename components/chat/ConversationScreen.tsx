import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { KeyboardEventHandler, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { authentication, db } from "../../config/firebase";
import { useRecipient } from "../../hooks/useReceipient";
import { Conversation, IMessage } from "../../types";
import {
  convertFireStoreTimestampToString,
  generateQueryGetMessage,
  transformMessage,
} from "../../utils/getMessagesInConversation";
import EndOfMessageAutoScroll from "./EndOfMessageAutoScroll";
import Message from "./Message";
import RecipientAvatar from "./RecipientAvatar";

interface IConversationScreen {
  conversation: Conversation;
  messages: IMessage[];
}

const ConversationScreen: React.FC<IConversationScreen> = ({
  conversation,
  messages,
}) => {
  const [loginUser, _loading, _error] = useAuthState(authentication);
  const conversationUsers = conversation.users;
  const { recipient, recipientEmail } = useRecipient(conversationUsers);

  const router = useRouter();
  const conversationId = router.query.id;
  const queryGetMessages = generateQueryGetMessage(conversationId as string);

  const [messagesSnapshot, messagesLoading, __error] =
    useCollection(queryGetMessages);

  const addMessageToDbAndUpdateLastSeen = async () => {
    await setDoc(
      doc(db, "users", loginUser?.email as string),
      {
        lastSeen: serverTimestamp(),
      },
      { merge: true }
    );

    await addDoc(collection(db, "messages"), {
      conversation_id: conversationId,
      sent_at: serverTimestamp(),
      text: newMessage,
      user: loginUser?.email,
    });

    setNewMessage("");

    scrollToBottom();
  };

  const [newMessage, setNewMessage] = useState("");

  const sendMessageOnEnter: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!newMessage) return;

      addMessageToDbAndUpdateLastSeen();
    }
  };

  const showMessages = () => {
    if (messagesLoading) {
      return messages.map((message, index) => (
        <Message key={index} message={message} />
      ));
    }

    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message, index) => (
        <Message key={index} message={transformMessage(message)} />
      ));
    }

    return null;
  };

  const scrollToBottom = () => {
    endOfMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const endOfMessageRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="sticky bg-white z-20 top-0 flex align-middle p-2 h-20 border-[2px] border-gray-100">
        <div className="mt-auto mb-auto">
          <RecipientAvatar
            recipient={recipient}
            recipientEmail={recipientEmail}
          />
        </div>
        <div className="">
          <h3 className="mt-0 mb-3 break-all">{recipientEmail}</h3>
          {recipient && (
            <span className="text-sm text-gray-500">
              Last active:{" "}
              {convertFireStoreTimestampToString(recipient.lastSeen)}
            </span>
          )}
        </div>
      </div>
      <div className="p-8 bg-white h-[70vh] overflow-scroll no-scrollbar">
        {showMessages()}
        <EndOfMessageAutoScroll ref={endOfMessageRef} />
      </div>
      <div className="flex align-middle p-2.5 sticky bottom-0 bg-white z-20 border-[1px] border-gray-100">
        <input
          type="text"
          className="w-full h-full m-0 outline-none focus:outline-none border-none focus:border-none rounded-md bg-gray-50"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          onKeyDown={sendMessageOnEnter}
        />
      </div>
    </div>
  );
};

export default ConversationScreen;
