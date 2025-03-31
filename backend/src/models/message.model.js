import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: string,
      required: true,
    }, // Clerk user ID
    receiverId: {
      type: string,
      required: true,
    }, // Clerk user ID
    content: {
      type: string,
      required: true,
    },
  },
  { timestamp: true }
);
export const Message = mongoose.model("Message", messageSchema);
