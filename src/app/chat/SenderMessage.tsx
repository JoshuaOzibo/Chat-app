'use client'
import SenderMessageBubble from "@/components/ChatWindow/messageBubbles/SenderMessageBubble";

interface MessageProps {
    message: {
        _id: string;
        text: string;
        senderName: string;
        createdAt: string;
    }
}

const SenderMessage = ({ message }: MessageProps) => {
    return (
        <SenderMessageBubble message={message} />
    );
};

export default SenderMessage;
