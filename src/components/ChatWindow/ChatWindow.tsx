"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import CurrentChattingUser from "./CurrentChattingUser";
import RightBar from "./RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";
import socket from "@/app/lib/socket";
import NoChatSelected from "../NoChatSelected/NoChatSelected";

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
      {selectedUser ? (
        <main className="bg-emerald-700 relative w-full">
          <CurrentChattingUser user={selectedUser} />
          <div className="flex-1 overflow-hidden">
            <Chat isTyping={isTyping} />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <ChatInput receiverId={selectedUser.email} />
          </div>
        </main>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <NoChatSelected />
        </div>
      )}
      <aside className="bg-amber-800 right-0 flex justify-end">
        <RightBar />
      </aside>
    </section>
  );
}
