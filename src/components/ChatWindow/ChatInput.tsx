'use client';

import { useState, useEffect } from "react";
import socket from "@/app/lib/socket";

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
    <div className="bg-blue-800 fixed bottom-0 w-full p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          className="w-full border rounded px-2 py-1"
          disabled={isSending}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded disabled:bg-blue-300"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
