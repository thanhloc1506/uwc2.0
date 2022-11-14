import {
  collection,
  DocumentData,
  orderBy,
  query,
  QueryDocumentSnapshot,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { IMessage } from "../types";

export const generateQueryGetMessage = (conversationId?: string) => {
  return query(
    collection(db, "messages"),
    where("conversation_id", "==", conversationId),
    orderBy("sent_at", "asc")
  );
};

export const transformMessage = (
  message: QueryDocumentSnapshot<DocumentData>
) => {
  return {
    id: message.id,
    ...message.data(),
    sent_at: message.data().sent_at
      ? convertFireStoreTimestampToString(message.data().sent_at as Timestamp)
      : null,
  } as IMessage;
};

export const convertFireStoreTimestampToString = (timestamp: Timestamp) => {
  return new Date(timestamp.toDate().getTime()).toLocaleString();
};
