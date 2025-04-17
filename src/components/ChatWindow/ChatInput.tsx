'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import socket from "@/app/lib/socket";
import {IoMdPaperPlaneIcon, TiMicrophoneOutlineIcon, TiPlusIcon, HiOutlineEmojiHappyIcon} from "@/Icons/Icons"
import Button from '@/components/ui/customUi/button';

interface ChatInputProps {
  receiverId: string;
  onMessageSent: (message: any) => void;
}

export default function ChatInput({ receiverId, onMessageSent }: ChatInputProps) {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const emitTyping = () => {
    if (session?.user?.id) {
      socket.emit("typing", {
        senderId: session.user.id,
        receiverId: receiverId
      });
    }
  };

  const emitStopTyping = () => {
    if (session?.user?.id) {
      socket.emit("stopTyping", {
        senderId: session.user.id,
        receiverId: receiverId
      });
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);

    // Clear existing timeout
    if (typingTimeout) clearTimeout(typingTimeout);

    // Emit typing event
    emitTyping();

    // Set new timeout
    const timeout = setTimeout(() => {
      emitStopTyping();
    }, 2000);

    setTypingTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      emitStopTyping();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !session?.user?.id) return;
  
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: message,
          receiverId: receiverId,
          sender: session.user.id,
          createdAt: new Date().toISOString(),
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send message");
  
      const savedMessage = await response.json();
      onMessageSent(savedMessage);
      socket.emit("sendMessage", savedMessage);
      setMessage("");
      emitStopTyping();
  
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-blue-800 flex absolute bottom-0 w-full p-4">
      <div className="flex gap-3">
        <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={<IoMdPaperPlaneIcon color="#ff8b4e" />} />
        <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={<HiOutlineEmojiHappyIcon color="#ff8b4e" />} />
        <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={<TiPlusIcon color="#ff8b4e" />} />
      </div>
      <form onSubmit={handleSubmit} className="relative w-full flex items-center">
        <input
          className="w-full outline-none mx-3 rounded" 
          value={message}
          onChange={handleTyping}
          disabled={isSending}
          type="text" 
          placeholder="Write your message..."
        />
        <div className="flex gap-3">
          <Button type="button" className="bg-[#ffdac5] p-2 rounded-full" value={<TiMicrophoneOutlineIcon color="#ff8b4e" />} />
          <Button type="submit" className="bg-[#ffdac5] p-2 rounded-full" value={<IoMdPaperPlaneIcon color="#ff8b4e" />} />
        </div>
      </form>
    </div>
  );
}
