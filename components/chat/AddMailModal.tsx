import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication, db } from "../../config/firebase";
import * as EmailValidator from "email-validator";
import { addDoc, collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Conversation } from "../../types";

const AddMailModal = () => {
  const [show, setShow] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");

  const [loginUser, loading, _error] = useAuthState(authentication);

  const onClickShowModal = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const queryGetConversationsForCurrentUser = query(
    collection(db, "conversations"),
    where("users", "array-contains", loginUser?.email)
  );

  const [consversationsSnapshot, __loading, __error] = useCollection(
    queryGetConversationsForCurrentUser
  );

  const isConversationEmailExist = (recipientEmail: string) => {
    return consversationsSnapshot?.docs.find((conversation) =>
      (conversation.data().users as Conversation).users?.includes(
        recipientEmail
      )
    );
  };

  const onclickStartConversation = async () => {
    if (!recipientEmail) return;

    const isInviteSelf = recipientEmail === loginUser?.email;

    if (
      EmailValidator.validate(recipientEmail) &&
      !isInviteSelf &&
      !isConversationEmailExist(recipientEmail)
    ) {
      await addDoc(collection(db, "conversations"), {
        users: [loginUser?.email, recipientEmail],
      });
    }

    setShow(false);
  };

  return (
    <div className="">
      <React.Fragment>
        <button
          onClick={onClickShowModal}
          className="uppercase text-blue-400 w-full border-t-[1px] border-t-gray-100 mt-auto mb-auto h-10"
        >
          Start a new conversation
        </button>
        <Modal show={show} size="xl" popup={true} onClose={onClose}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                New conversation
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Please enter a Google email address for the user you wish to chat with"
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                  value={recipientEmail}
                  onChange={(event) => {
                    setRecipientEmail(event.target.value);
                  }}
                />
              </div>

              <div className="w-full">
                <Button
                  disabled={!recipientEmail}
                  onClick={onclickStartConversation}
                >
                  Create conversation
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default AddMailModal;
