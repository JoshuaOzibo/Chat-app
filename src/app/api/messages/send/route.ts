// /app/api/messages/send/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { sendMessage } from "@/lib/controllers/messageController"; // assuming sendMessage is in a controller file
// import connectDB from "@/lib/db"; // custom DB connect util
// import { getServerSession } from "next-auth";
// import { authOptions } from "../../auth/[...nextauth]/route";

// export async function POST(req: NextRequest) {
//   await connectDB();
//   const session = await getServerSession(authOptions);
//   if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   const { receiverId, text } = await req.json();
//   const senderId = session.user.id;

//   const message = await sendMessage(senderId, receiverId, text);
//   return NextResponse.json({ message });
// }
