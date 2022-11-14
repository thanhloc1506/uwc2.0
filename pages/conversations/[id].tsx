import { doc, getDoc, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication, db } from "../../config/firebase";
import { Conversation, IMessage } from "../../types";
import {
  generateQueryGetMessage,
  transformMessage,
} from "../../utils/getMessagesInConversation";
import { getRecipientEmail } from "../../utils/getRecipientEmail";
import Chatbox from "../chatbox";
import dynamic from "next/dynamic";

const ConversationScreen = dynamic(
  () => import("../../components/chat/ConversationScreen"),
  {
    ssr: false,
  }
);

interface Props {
  conversation: Conversation;
  messages: IMessage[];
}

const Conversation = ({ conversation, messages }: Props) => {
  const [loginUser, loading, _error] = useAuthState(authentication);
  return (
    <div>
      <div className="flex border-[1px] border-gray-100">
        <Head>
          <title>
            Conversation with {getRecipientEmail(conversation.users, loginUser)}
          </title>
        </Head>
        <Chatbox />
        <div className="flex-grow overflow-scroll no-scrollbar">
          <ConversationScreen conversation={conversation} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Conversation;

export const getServerSideProps: GetServerSideProps<
  Props,
  { id: string }
> = async (context) => {
  const conversationId = context.params?.id;

  const conversationRef = doc(db, "conversations", conversationId as string);
  const conversationSnapshot = await getDoc(conversationRef);

  const queryMessages = generateQueryGetMessage(conversationId);

  const messagesSnapshot = await getDocs(queryMessages);

  const messages = messagesSnapshot.docs.map((messageDoc) =>
    transformMessage(messageDoc)
  );

  return {
    props: {
      conversation: conversationSnapshot.data() as Conversation,
      messages,
    },
  };
};
