"use client";
import { AiOutlineAppstoreIcon, FiSearchIcon } from "@/Icons/Icons";
import SubSidebar from "./SubSidebar";
import ContactItem from "./ContactItem";
import { useSidebar } from "@/context/SidebarContext";

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

  return (
    <section className={`bg-red-500 flex transition-all duration-500 ease-in-out
      ${isSubSidebarVisible ? 'lg:w-[600px] md:w-[550px]' : 'lg:w-[470px] md:w-[420px]'} 
      w-[300px]`}>
      <SubSidebar />
      <main className="w-full">
        <div className="px-2 space-y-2">
          <main className="bg-yellow-800 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">Recent Chats</h1>
              <p>Chat from your friends 😘</p>
            </div>
            <button onClick={toggleSubSidebar} className="cursor-pointer">
              <AiOutlineAppstoreIcon size={25} />
            </button>
          </main>

          <main className="bg-yellow-800 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">Chat</h2>
              <p>Start New Conversation</p>
            </div>
            <FiSearchIcon size={25} />
          </main>
        </div>

        <main className="my-5 overflow-y-scroll">
          <ContactItem onSelectUser={onSelectUser} selectedUser={selectedUser} />
        </main>
      </main>
    </section>
  );
};

export default ChatSidebar;
