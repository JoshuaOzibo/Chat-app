'use client'

import { useColors } from "@/context/ColorContext";

interface MessageType {
  senderName: string;
  message: {
    _id: string;
    senderEmail: string;
    text: string;
    createdAt: string;
    isTyping?: boolean;
  }
}

export default function ReceiverMessageBubble({ senderName, message }: MessageType) {
    const {primaryColor} = useColors();
  const messageTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="flex mt-5 items-start justify-start">
      <div className="max-w-[70%]">
        <div style={{backgroundColor: primaryColor.light}} className=" rounded-bl-2xl rounded-r-2xl px-4 py-2 text-gray-800">
          <div className="flex justify-between items-center mb-1 space-x-3">
            <p className="text-sm text-gray-600">{senderName}</p>
            <p className="text-xs text-gray-500">{messageTime}</p>
          </div>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}