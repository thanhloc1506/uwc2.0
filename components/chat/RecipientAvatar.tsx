import { Avatar, Tooltip } from "flowbite-react";
import React from "react";
import { useRecipient } from "../../hooks/useReceipient";

type IRecipientAvatar = ReturnType<typeof useRecipient>;

const RecipientAvatar: React.FC<IRecipientAvatar> = ({
  recipient,
  recipientEmail,
}) => {
  return (
    <div className="m-0 mr-2">
      <Tooltip content="Avatar" placement="right">
        <Avatar
          img={
            recipient?.photoURL ??
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          }
          rounded={true}
        />
      </Tooltip>
    </div>
  );
};

export default RecipientAvatar;
