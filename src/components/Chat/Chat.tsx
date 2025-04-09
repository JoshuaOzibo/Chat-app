import ChatWindow from "../ChatWindow/ChatWindow";
import ChatSidebar from "../ChatSidebar/ChatSidebar";

const Chat = () => {
  return (
    <div className="flex w-full">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
