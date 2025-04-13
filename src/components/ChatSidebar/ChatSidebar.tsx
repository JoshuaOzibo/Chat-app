"use client";
import { AiOutlineAppstoreIcon, FiSearchIcon } from "@/Icons/Icons";
import SubSidebar from "./SubSidebar";
import ContactItem from "./ContactItem";

const ChatSidebar = () => {
  return (
    <>
      <section className="bg-red-500 flex lg:w-[600px] md:w-[550px] w-[300px]">
        {/* subsidebar */}
        <SubSidebar />
        <main className="w-full">
          <div className="px-2 space-y-2">
            <main className="bg-yellow-800 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black">Recent Chats</h1>
                <p>Chat from your friends 😘</p>
              </div>

              {/* icon */}
              <AiOutlineAppstoreIcon size={25} />
            </main>

            <main className="bg-yellow-800 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black">Chat</h2>
                <p>Start New Conversation</p>
              </div>

              {/* icon */}
              <FiSearchIcon size={25} />
            </main>
          </div>

          {/* main chat */}
          <main className=" my-5 overflow-y-scroll">
            <ContactItem />
          </main>
        </main>
      </section>
    </>
  );
};

export default ChatSidebar;
