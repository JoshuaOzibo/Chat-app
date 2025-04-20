'use client'

import { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import { ColorProvider } from "@/context/ColorContext";
import Customizer from "../customizer/Customizer";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<{
    _id: string;
    name: string;
    email: string;
    image: string;
  } | null>(null);

  return (
    <ColorProvider>
      <SidebarProvider>
        <div className="flex w-full">
          <ChatSidebar onSelectUser={setSelectedUser} selectedUser={selectedUser} />
          <ChatWindow selectedUser={selectedUser} />
          <Customizer />
        </div>
      </SidebarProvider>
    </ColorProvider>
  );
};

export default Chat;
