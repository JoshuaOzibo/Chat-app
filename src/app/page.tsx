import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";  // Import authOptions instead of handler
import Chat from "@/components/Chat/Chat";

export default async function Home() {
  const session = await getServerSession(authOptions);  // Use authOptions here instead of handler

  if (!session) {
    redirect("/login");
  } else {
    redirect("/chat");  // Redirect authenticated users to the chat page
  }

  return (
    <>
      <Chat />
    </>
  );
}
