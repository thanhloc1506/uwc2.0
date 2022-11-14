import { User } from "firebase/auth";
import { Conversation } from "../types";

export const getRecipientEmail = (
  conversationUsers: Conversation["users"],
  loginUser?: User | null
) => {
  return conversationUsers.find((userEmail) => userEmail !== loginUser?.email);
};
