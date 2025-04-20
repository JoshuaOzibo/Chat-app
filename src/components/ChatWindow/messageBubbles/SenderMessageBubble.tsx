'use client'

import { useColors } from "@/context/ColorContext";

interface MessageType {
    message: {
        _id: string;
        text: string;
        senderName: string;
        createdAt: string;
    }
}

export default function SenderMessageBubble({message}: MessageType){
    const {primaryColor} = useColors();
    const messageTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return(
        <div className="flex mt-5 items-start justify-end">
            <div className="max-w-[70%]">
                <div style={{backgroundColor: primaryColor.primary}} className=" rounded-br-none rounded-2xl px-4 py-2 text-white">
                    <div className="flex justify-between items-center mb-1 space-x-3">
                        <p className="text-sm text-gray-200">{message.senderName}</p>
                        <p className="text-xs text-gray-200">{messageTime}</p>
                    </div>
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
    )
}