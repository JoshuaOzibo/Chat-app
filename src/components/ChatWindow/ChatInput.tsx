'use client';

import { useState, useEffect } from "react";
import socket from "@/app/lib/socket";
import {IoMdPaperPlaneIcon} from "@/Icons/Icons"
import Button from '@/components/ui/customUi/button'

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log(" Connected to socket:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error(" Connection error:", err);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSending(true);

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "Joshua",
          receiver: "Jenny",
          text: message,
        }),
      });

      // Now emit structured message object
      socket.emit("sendMessage", {
        sender: "Joshua",
        text: message,
      });

      setMessage("");
      setError(null);
    } catch (err) {
      setError("Error sending message");
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
          disabled={isSending} type="text" 
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
