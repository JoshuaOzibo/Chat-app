"use client";
import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
import socket from '@/app/lib/socket';

interface MessageType {
  _id: string;
  sender: string;
  senderEmail: string;
  senderName: string;
  text: string;
  receiver: string;
  createdAt: string;
}

interface ChatProps {
  isTyping: boolean;
}

export default function ChatPage({ isTyping }: ChatProps) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [socketConnected, setSocketConnected] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      const sortedMessages = data.sort((a: MessageType, b: MessageType) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      setMessages(sortedMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, []);

  useEffect(() => {
    if (!session?.user?.id) return;

    // Initial fetch
    fetchMessages();

    // Socket setup
    socket.emit("setup", session.user.id);
    
    socket.on("connected", () => {
      setSocketConnected(true);
    });

    socket.on('new_message', (newMessage: MessageType) => {
      console.log('Received new message:', newMessage);
      setMessages(prev => {
        // Check if message already exists
        const messageExists = prev.some(msg => msg._id === newMessage._id);
        if (messageExists) {
          return prev;
        }
        return [...prev, newMessage];
      });
    });

    // Cleanup
    return () => {
      socket.off("connected");
      socket.off("new_message");
    };
  }, [session, fetchMessages]);

  return (
    <div className="flex flex-col space-y-4 p-4 pt-32 pb-24 overflow-y-auto h-screen">
      {messages.map((message) => (
        message.sender === session?.user?.id ? (
          <SenderMessage key={message._id} message={message} />
        ) : (
          <ReceiverMessage key={message._id} message={{
            ...message,
            senderName: message.senderEmail.split('@')[0]
          }} />
        )
      ))}
      {isTyping && (
        <ReceiverMessage 
          message={{
            _id: 'typing-indicator',
            senderEmail: '',
            text: '...',
            isTyping: true,
            senderName: 'User',
            createdAt: new Date().toISOString()
          }} 
        />
      )}
    </div>
  );
}
