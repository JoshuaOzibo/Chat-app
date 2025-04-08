import CurrentUserId from "@/components/ChatWindow/CurrentUserId";
import RightBar from "@/components/ChatWindow/RightBar";
export default function ChatWindow() {
  return (
    <>
      <section>
        <CurrentUserId />

        <RightBar />
      </section>
    </>
  );
}
