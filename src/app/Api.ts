// app/api/messages/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongo";
import Message from "@/models/Message";

export async function GET() {
  await connectDB();
//   const messages = await Message.find({});
//   return NextResponse.json(messages);
}
