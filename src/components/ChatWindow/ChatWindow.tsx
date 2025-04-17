"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import CurrentChattingUser from "@/components/ChatWindow/CurrentChattingUser";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";
import socket from "@/app/lib/socket";

export default function ChatWindow() {
  const { data: session } = useSession();
  const [isTyping, setIsTyping] = useState(false);
  
  // For testing, use the email of the other user
  const receiverEmail = session?.user?.email === "joshuamichaelozibo@gmail.com" 
    ? "joshuamichaelchinedu@gmail.com" 
    : "joshuamichaelozibo@gmail.com";

  useEffect(() => {
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
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [session]);

  return (
    <section className="bg-amber-500 overflow-hidden relative flex justify-between w-full">
      <main className="bg-emerald-700 relative w-full">
        <CurrentChattingUser />
        <div className="flex-1 overflow-hidden">
          <Chat isTyping={isTyping} />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ChatInput receiverId={receiverEmail} />
        </div>
      </main>
      <aside className=" bg-amber-800 right-0 flex justify-end">
        <RightBar />
      </aside>
    </section>
  );
}

