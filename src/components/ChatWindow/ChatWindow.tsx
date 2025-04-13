"use client";

import CurrentChattingUser from "@/components/ChatWindow/CurrentChattingUser";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";
import Chat from "@/app/chat/page";

export default function ChatWindow() {
  // TODO: Replace with actual selected user ID from your chat state management
  const selectedUserId = "temp-receiver-id";

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

