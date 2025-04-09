'use client'

import { useState } from "react";
import { FaVolumeHighIcon } from "@/Icons/Icons";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSending(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            "sender": "user123",
            "receiver": "user456",
            "text": message }),
      });

      if (!res.ok) {
        throw new Error("Failed to send the message");
      }

      // Reset the form after successful submission
      setMessage("");
      setError(null);
    } catch (err) {
      setError("Error sending message: ");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="bg-blue-800 justify-end fixed bottom-0 w-full">
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className=" p-2 border rounded"
            disabled={isSending}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white rounded disabled:bg-blue-300`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
