'use client';
import { useEffect, useState } from 'react';
import socket from '@/app/lib/socket';

interface MessageType {
  _id?: string;
  sender: string;
  text: string;
}

const ReceiverMessage = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const currentUser = "Joshua"; // 👈 This should be dynamic via session or prop

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data.filter((msg: MessageType) => msg.sender !== currentUser));
    };

    fetchMessages();

    socket.on('new_message', (newMessage: MessageType) => {
      if (newMessage.sender !== currentUser) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => {
      socket.off('new_message');
    };
  }, []);

  return (
    <ul className="space-y-2 absolute mx-10 left-0">
      {messages.map((msg, index) => (
        <li className="bg-red-500 rounded-bl-2xl rounded-r-2xl px-3 py-2 text-white flex flex-col" key={index}>
          <span className="text-sm text-gray-200">{msg.sender}</span>
          {msg.text}
        </li>
      ))}
    </ul>
  );
};

export default ReceiverMessage;
