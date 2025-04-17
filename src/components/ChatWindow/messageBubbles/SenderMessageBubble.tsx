interface MessageType {
    message: {
        _id: string;
        text: string;
    }
}

export default function SenderMessageBubble({message}: MessageType){
    return(
        <div className="flex items-start justify-end">
            <div className="max-w-[70%]">
                <div className="bg-blue-600 rounded-br-none rounded-2xl px-4 py-2 text-white">
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
    )
}