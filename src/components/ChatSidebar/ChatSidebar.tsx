import {AiOutlineAppstoreIcon, FiSearchIcon} from '@/Icons/Icons'

const ChatSidebar = () => {
  return (
    <>
      <section className="bg-red-500 max-w-[40%] min-w-[30%]">
        {/*  */}
        <main>
          <div>
            <h1>Recent Chats</h1>
            <p>Chat from your friends 😘</p>
          </div>

          {/* icon */}
          < AiOutlineAppstoreIcon />
        </main>

        <main>
          <div>
            <h2>Chat</h2>
            <p>Start New Conversation</p>
          </div>

          {/* icon */}
          < FiSearchIcon />
        </main>
      </section>
    </>
  );
};

export default ChatSidebar;
