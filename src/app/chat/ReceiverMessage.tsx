'use client';

interface MessageProps {
  message: {
    _id: string;
    senderEmail: string;
    text: string;
    isTyping?: boolean;
  }
}

const ReceiverMessage = ({ message }: MessageProps) => {
  if (message.isTyping) {
    return (
      <div className="flex items-start justify-start">
        <div className="max-w-[70%]">
          <div className="bg-gray-200 rounded-bl-2xl rounded-r-2xl px-4 py-2 text-gray-800">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-start">
      <div className="max-w-[70%]">
        <div className="bg-gray-200 rounded-bl-2xl rounded-r-2xl px-4 py-2 text-gray-800">
          <p className="text-sm text-gray-600 mb-1">{message.senderEmail}</p>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiverMessage;
