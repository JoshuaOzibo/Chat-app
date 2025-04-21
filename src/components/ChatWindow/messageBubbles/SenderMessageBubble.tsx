'use client'

import { useColors } from "@/context/ColorContext";
import MessageOptions from "./MessageOptions";

interface MessageType {
    message: {
        _id: string;
        text: string;
        senderName: string;
        createdAt: string;
    }
}

const SenderMessageBubble = ({ message }: MessageType) => {
    const { primaryColor } = useColors();

    const messageTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="flex items-start justify-end group">
            <div className="max-w-[70%] flex items-start">
                <div style={{backgroundColor: primaryColor.primary}} className="rounded-bl-2xl rounded-l-2xl px-4 py-2 text-white relative">
                    <div className="flex justify-between items-center mb-1 space-x-3">
                        <p className="text-sm text-gray-200">{message.senderName}</p>
                        <div className="flex items-center space-x-2">
                            <p className="text-xs text-gray-200">{messageTime}</p>
                            <MessageOptions messageId={message._id} />
                        </div>
                    </div>
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
    );
};

export default SenderMessageBubble;