import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  senderEmail: { type: String, required: true },
  receiver: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
