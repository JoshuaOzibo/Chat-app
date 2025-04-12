"use client";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";

export default function ChatPage() {
  return (
    <div className="p-4 relative mt-32">
      <SenderMessage />
      <ReceiverMessage />
    </div>
  );
}
