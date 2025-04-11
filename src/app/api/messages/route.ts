// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/Mongo';
import Message from '@/models/Message';

export async function GET() {
  await connectDB();
  const messages = await Message.find().lean();
  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newMessage = await Message.create(body);
  return NextResponse.json(newMessage);
}