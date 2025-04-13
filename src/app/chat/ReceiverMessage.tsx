'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import socket from '@/app/lib/socket';

interface MessageType {
  _id: string;
  sender: string;
  text: string;
  receiver: string;
}

const ReceiverMessage = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchMessages = async () => {
      const res = await fetch('/api/messages');
      const data = await res.json();
      console.log('All messages:', data);
      // Only show messages received by current user
      const receivedMessages = data.filter((msg: MessageType) => msg.receiver === session.user.id);
      console.log('Filtered received messages:', receivedMessages);
      setMessages(receivedMessages);
    };

    fetchMessages();

    socket.on('new_message', (newMessage: MessageType) => {
      console.log('New message received:', newMessage);
      if (newMessage.receiver === session.user.id) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => {
      socket.off('new_message');
    };
  }, [session]);

  return (
    <ul className="space-y-2 absolute mx-10 left-0">
      {messages.map((msg, index) => (
        <li className="bg-red-500 rounded-bl-2xl rounded-r-2xl px-3 py-2 text-white flex flex-col" key={msg._id || index}>
          <span className="text-sm text-gray-200">{msg.sender}</span>
          {msg.text}
        </li>
      ))}
    </ul>
  );
};

export default ReceiverMessage;
