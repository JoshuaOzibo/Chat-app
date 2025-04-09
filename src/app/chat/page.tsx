// app/chat/page.tsx (Server Component)
import connectDB from '@/app/lib/Mongo';
import Message from '@/models/Message';

export default async function ChatPage() {
  await connectDB();
  const messages = await Message.find().lean();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat History</h1>
      <ul className="space-y-2">
        {messages.map((msg: any) => (
          <li key={msg._id}>
            <strong>{msg.sender}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
