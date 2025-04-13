"use client";

import { useSession } from 'next-auth/react';
import CurrentChattingUser from "@/components/ChatWindow/CurrentChattingUser";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";

export default function ChatWindow() {
  const { data: session } = useSession();
  
  // For testing, use the email of the other user
  const receiverEmail = session?.user?.email === "joshuamichaelozibo@gmail.com" 
    ? "joshuamichaelchinedu@gmail.com" 
    : "joshuamichaelozibo@gmail.com";

  return (
    <section className="bg-amber-500 overflow-hidden relative flex justify-between w-full">
      <main className="bg-emerald-700 relative w-full">
        <CurrentChattingUser />
        <div className="flex-1 overflow-hidden">
          <Chat />
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

