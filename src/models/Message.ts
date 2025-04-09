// models/Message.ts
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    text: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Message || mongoose.model('Message', messageSchema);
