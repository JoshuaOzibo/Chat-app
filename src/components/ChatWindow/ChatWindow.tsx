"use client";

import CurrentChattingUser from "@/components/ChatWindow/CurrentChattingUser";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";
export default function ChatWindow() {
  return (
    <>
      <section className="bg-amber-500 relative flex justify-between w-full">
        <main className="bg-emerald-700 relative w-full">
          <CurrentChattingUser />

          <Chat />

          <ChatInput />
        </main>
        <main className="bg-lime-800">
          <RightBar />
        </main>
      </section>
    </>
  );
}

/**
 * <section className=" w-full h-screen bg-gray-600">
        
        <RightBar />
      </section>
 */
