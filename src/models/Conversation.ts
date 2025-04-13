import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: String,  // User IDs
    required: true
  }],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Ensure participants array has exactly 2 users for 1-on-1 chats
conversationSchema.pre('save', function(next) {
  if (this.participants.length !== 2) {
    next(new Error('Conversation must have exactly 2 participants'));
  }
  next();
});

const Conversation = mongoose.models.Conversation || mongoose.model("Conversation", conversationSchema);
export default Conversation;
