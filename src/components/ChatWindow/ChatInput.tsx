'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import socket from "@/app/lib/socket";
import {IoMdPaperPlaneIcon} from "@/Icons/Icons"
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

    setIsSending(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          receiverId,
          text: message,
        }),
      });

      const newMessage = await response.json();

      // Emit to socket
      socket.emit("sendMessage", {
        ...newMessage,
        sender: session.user.id
      });

      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-blue-800 flex absolute bottom-0 w-full p-4">
      <div className="flex gap-3">
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
      <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />

      </div>
      <form onSubmit={handleSubmit} className=" relative w-full flex items-center">
        <input
          className="w-full outline-none mx-3 rounded" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSending}
          type="text" 
          placeholder="Write your message..."
        />
        <div className="flex gap-3">
        <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
        <Button type="submit" className="bg-[#ffdac5] p-2 rounded-full" value={ <IoMdPaperPlaneIcon color="#ff8b4e" />} />
        </div>
      </form>
    </div>
  );
}
