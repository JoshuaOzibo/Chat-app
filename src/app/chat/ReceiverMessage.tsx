'use client';

interface MessageProps {
  message: {
    _id: string;
    senderEmail: string;
    text: string;
  }
}

const ReceiverMessage = ({ message }: MessageProps) => {
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
