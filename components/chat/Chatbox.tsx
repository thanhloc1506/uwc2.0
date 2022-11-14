import { collection, query, where } from "firebase/firestore";
import { Avatar, Tooltip } from "flowbite-react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { authentication, db } from "../../config/firebase";
import { Conversation } from "../../types";
import SearchIcon from "../icons/SearchIcon";
import AddMailModal from "./AddMailModal";
import ConversationSelect from "./ConversationSelect";

const Chatbox = () => {
  const [loginUser, loading, _error] = useAuthState(authentication);
  const queryGetConversationsForCurrentUser = query(
    collection(db, "conversations"),
    where("users", "array-contains", loginUser?.email)
  );
  const [consversationsSnapshot, __loading, __error] = useCollection(
    queryGetConversationsForCurrentUser
  );
  return (
    <div>
      <div className="h-[80vh] min-w-[300px] max-w-[350px] no-scrollbar overflow-y-scroll border-[2px] border-gray-50">
        <div className="flex sticky top-0 bg-white z-10 justify-between align-middle p-4 border-b-2 border-b-gray-100 h-20">
          <div className="flex flex-wrap gap-2">
            <Tooltip content="Avatar" placement="right">
              <Avatar
                img={
                  loginUser?.photoURL ??
                  "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                }
                rounded={true}
              />
            </Tooltip>
            <div className="mt-auto mb-auto">
              <p>{loginUser?.displayName ?? ""}</p>
              {/* <p></p> */}
            </div>
          </div>
        </div>
        <div className="flex align-middle p-4 round-sm">
          <SearchIcon />
          <input
            type="text"
            className="outline-none border-none focus:outline-none focus:border-none flex-1 w-full h-5"
            placeholder="Search..."
          />
        </div>
        <div>
          <AddMailModal />
        </div>
        <div className="border-t-[1px] border-t-gray-100 ">
          {consversationsSnapshot?.docs.map((conversation) => (
            <ConversationSelect
              key={conversation.id}
              id={conversation.id}
              conversationUsers={(conversation.data() as Conversation).users}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
