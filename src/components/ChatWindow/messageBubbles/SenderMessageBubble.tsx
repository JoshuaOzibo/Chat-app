interface MessageType {
    message: {
        _id: string;
        text: string;
        senderName: string;
        createdAt: string;
    }
}

export default function SenderMessageBubble({message}: MessageType){
    const messageTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return(
        <div className="flex items-start justify-end">
            <div className="max-w-[70%]">
                <div className="bg-blue-600 rounded-br-none rounded-2xl px-4 py-2 text-white">
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