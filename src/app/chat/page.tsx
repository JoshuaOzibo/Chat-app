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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat History</h1>
      <ul className="space-y-2">
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
