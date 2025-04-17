interface MessageType {
  senderEmail: string;
  message: {
    _id: string;
    senderEmail: string;
    text: string;
    isTyping?: boolean;
  }
}

export default function ReceiverMessageBubble({ senderEmail, message }: MessageType) {
  return (
    <div className="flex items-start justify-start">
      <div className="max-w-[70%]">
        <div className="bg-gray-200 rounded-bl-2xl rounded-r-2xl px-4 py-2 text-gray-800">
          <p className="text-sm text-gray-600 mb-1">{senderEmail}</p>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}