import { useRouter } from "next/router";
import React from "react";
import { useRecipient } from "../../hooks/useReceipient";
import RecipientAvatar from "./RecipientAvatar";

interface IConversationSelect {
  id: string;
  conversationUsers: string[];
}

const ConversationSelect: React.FC<IConversationSelect> = ({
  id,
  conversationUsers,
}) => {
  const { recipient, recipientEmail } = useRecipient(conversationUsers);

  const router = useRouter();

  const onSelectConversation = () => {
    router.push(`/conversations/${id}`);
  };

  return (
    <div onClick={onSelectConversation}>
      <div className="h-fit py-2 flex align-middle cursor-pointer p-4 break-words hover:bg-[#e9eaeb]">
        <RecipientAvatar
          recipient={recipient}
          recipientEmail={recipientEmail}
        />
        <span className="mt-auto mb-auto">{recipientEmail}</span>
      </div>
    </div>
  );
};

export default ConversationSelect;
