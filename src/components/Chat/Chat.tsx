'use client'

import { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import NoChatSelected from "../NoChatSelected/NoChatSelected";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<{
    _id: string;
    name: string;
    email: string;
    image: string;
  } | null>(null);

  return (
    <div className="flex w-full">
      <ChatSidebar onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      {selectedUser ? (
        <ChatWindow selectedUser={selectedUser} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <NoChatSelected />
        </div>
      )}
    </div>
  );
};

export default Chat;
