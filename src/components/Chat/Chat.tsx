import ChatWindow from "../ChatWindow/ChatWindow";
import ChatSidebar from "../ChatSidebar/ChatSidebar";

const Chat = () => {
  return (
    <div className="flex w-full bg-amber-700">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
