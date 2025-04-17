'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import socket from "@/app/lib/socket";
import {IoMdPaperPlaneIcon, TiMicrophoneOutlineIcon, TiPlusIcon, HiOutlineEmojiHappyIcon} from "@/Icons/Icons"
import Button from '@/components/ui/customUi/button';

interface ChatInputProps {
  receiverId: string;
}

export default function ChatInput({ receiverId }: ChatInputProps) {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !session?.user?.id) return;
  
    const tempMessage = {
      text: message,
      sender: session.user.id,
      receiverId: receiverId,
      createdAt: new Date().toISOString(), // Optional for local UI use
      pending: true, // Optional flag if you want to mark it as "sending"
    };
  
    // Emit message immediately for UI update
    // socket.emit("sendMessage", tempMessage);
  
    // Clear input immediately
    setMessage("");
  
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: message,
          receiverId: receiverId,
          sender: session.user.id,
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send message");
  
      const savedMessage = await response.json();
  
      // Optionally: Emit again with the saved message if needed
      socket.emit("sendMessage", savedMessage);
  
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message. Please try again.");
      // Optionally: Send a rollback or error state
    }
  };
  

  return (
    <div className="bg-blue-800 flex absolute bottom-0 w-full p-4">
      <div className="flex gap-3">
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <HiOutlineEmojiHappyIcon color="#ff8b4e" />} />
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <TiPlusIcon color="#ff8b4e" />} />

      </div>
      <form onSubmit={handleSubmit}  className=" relative w-full flex items-center">
        <input
          className="w-full outline-none mx-3 rounded" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSending}
          type="text" 
          placeholder="Write your message..."
        />
        <div className="flex gap-3">
        <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <TiMicrophoneOutlineIcon color="#ff8b4e" />} />
        <Button type="submit" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
        </div>
      </form>
    </div>
  );
}
