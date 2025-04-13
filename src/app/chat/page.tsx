"use client";
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";

interface MessageType {
  _id: string;
  sender: string;
  senderEmail: string;
  text: string;
  receiver: string;
  createdAt: string;
}

export default function ChatPage() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchMessages = async () => {
      const res = await fetch('/api/messages');
      const data = await res.json();
      // Sort messages by creation date
      const sortedMessages = data.sort((a: MessageType, b: MessageType) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      setMessages(sortedMessages);
    };

    fetchMessages();
  }, [session]);

  return (
    <div className="flex flex-col space-y-4 p-4 pt-32 pb-24 overflow-y-auto h-screen">
      {messages.map((message) => (
        message.sender === session?.user?.id ? (
          <SenderMessage key={message._id} message={message} />
        ) : (
          <ReceiverMessage key={message._id} message={message} />
        )
      ))}
    </div>
  );
}
