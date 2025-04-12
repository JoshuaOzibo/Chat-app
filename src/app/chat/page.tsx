'use client';

import { useEffect, useState } from 'react';
import socket from '@/app/lib/socket';

interface MessageType {
  _id: string;
  sender: string;
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    // Initial fetch
    const fetchMessages = async () => {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();

    // Listen for new messages
    socket.on('new_message', (newMessage: MessageType) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    // Clean up
    return () => {
      socket.off('new_message');
    };
  }, []);

  return (
    <div className="p-4 relative mt-32">
      <ul className="space-y-2 absolute mx-10 right-0">
        {/* {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </li>
        ))} */}

        {['Hello', "hi", "my guy", "How far"].map((chat, index) => (
          <li className='bg-blue-900 rounded-br-2xl rounded-l-2xl px-3 py-2 text-white flex' key={index}>{chat}</li>
        ))}
      </ul>
    </div>
  );
}
