"use client";
import { AiOutlineAppstoreIcon, FiSearchIcon } from "@/Icons/Icons";
import SubSidebar from "./SubSidebar";
import ContactItem from "./ContactItem";
import { useSidebar } from "@/context/SidebarContext";
import { useColors } from "@/context/ColorContext";
import Button from "@/components/ui/customUi/button";

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface ChatSidebarProps {
  onSelectUser: (user: User) => void;
  selectedUser: User | null;
}

const ChatSidebar = ({ onSelectUser, selectedUser }: ChatSidebarProps) => {
  const { toggleSubSidebar, isSubSidebarVisible } = useSidebar();
  const { primaryColor } = useColors();

  return (
    <section
      className={` flex h-screen border-r transition-all duration-500 ease-in-out
      ${
        isSubSidebarVisible
          ? "lg:w-[600px] md:w-[550px]"
          : "lg:w-[470px] md:w-[420px]"
      } 
      w-[300px]`}
    >
      <SubSidebar />
      <main className="w-full">
        <div className="px-2 mt-10 space-y-5">
          <main className=" flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black">Recent Chats</h1>
              <p>Chat from your friends 😘</p>
            </div>
            <Button
              className="cursor-pointer p-1 rounded-full"
              onClick={toggleSubSidebar}
              value={
                <AiOutlineAppstoreIcon color={primaryColor.primary} size={20} />
              }
            />
          </main>

          <main className=" flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">Chat</h2>
              <p>Start New Conversation</p>
            </div>
            <Button
              className="cursor-pointer p-1 rounded-full"
              onClick={toggleSubSidebar}
              value={<FiSearchIcon color={primaryColor.primary} size={20} />}
            />
          </main>
        </div>

        <main className="my-5">
          <ContactItem
            onSelectUser={onSelectUser}
            selectedUser={selectedUser}
          />
        </main>
      </main>
    </section>
  );
};

export default ChatSidebar;
