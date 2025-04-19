"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import CurrentChattingUser from "./CurrentChattingUser";
import RightBar from "./RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";
import socket from "@/app/lib/socket";
import NoChatSelected from "../NoChatSelected/NoChatSelected";
import EmptyChat from "../emptyChat.tsx/EmptyChat";

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface ChatWindowProps {
  selectedUser: User | null;
}

export default function ChatWindow({ selectedUser }: ChatWindowProps) {
  const { data: session } = useSession();
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const fetchMessages = async () => {
    if (!selectedUser || !session?.user?.id) return;
    
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedUser, session?.user?.id]);

  useEffect(() => {
    socket.on('new_message', (newMessage: any) => {
      setMessages(prev => [...prev, newMessage]);
    });

    socket.on("userTyping", (data) => {
      if (data.senderId !== session?.user?.id) {
        setIsTyping(true);
      }
    });

    socket.on("userStoppedTyping", (data) => {
      if (data.senderId !== session?.user?.id) {
        setIsTyping(false);
      }
    });

    return () => {
      socket.off('new_message');
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [session]);

  const handleNewMessage = (message: any) => {
    setMessages(prev => [...prev, message]);
  };

  return (
    <section className=" overflow-hidden relative flex justify-between w-full">
      {selectedUser ? (
        <main className="bg-[#cfe9fb] relative w-full">
          <CurrentChattingUser user={selectedUser} />
          <div className="flex-1 overflow-hidden">
            {messages.length > 0 ? (
              <Chat isTyping={isTyping} />
            ) : (
              <EmptyChat />
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <ChatInput 
              receiverId={selectedUser.email}
              onMessageSent={handleNewMessage}
            />
          </div>
        </main>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <NoChatSelected />
        </div>
      )}
      <RightBar />
    </section>
  );
}
