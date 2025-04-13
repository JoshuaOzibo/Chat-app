"use client";

import CurrentChattingUser from "@/components/ChatWindow/CurrentChattingUser";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";

export default function ChatWindow() {
  // For testing, use the ID of your second user account
  const selectedUserId = "67facdd5c733d51b2e863e27"; // Replace with actual user ID

  return (
    <section className="bg-amber-500 overflow-hidden relative flex justify-between w-full">
      <main className="bg-emerald-700 relative w-full">
        <CurrentChattingUser />
        <Chat />
        <ChatInput receiverId={selectedUserId} />
      </main>
      <main className="bg-lime-800">
        <RightBar />
      </main>
    </section>
  );
}

