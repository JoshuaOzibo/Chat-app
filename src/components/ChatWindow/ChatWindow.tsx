import CurrentUserId from "@/components/ChatWindow/CurrentUserId";
import RightBar from "@/components/ChatWindow/RightBar";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <>
      <section className=" w-full h-screen bg-gray-600">
        <CurrentUserId />


        <ChatInput />
        <RightBar />
      </section>
    </>
  );
}
