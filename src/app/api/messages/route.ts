// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/app/lib/Mongo';
import Message from '@/models/Message';
import Conversation from '@/models/Conversation';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Current user:', session.user);
    await connectDB();
    
    // Get all messages where user is either sender or receiver
    const messages = await Message.find({
      $or: [
        { sender: session.user.id },
        { receiver: session.user.id }
      ]
    }).sort({ createdAt: -1 });

    console.log('Found messages:', messages);
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { receiverId, text } = await req.json();

    const message = await Message.create({
      sender: session.user.id,
      receiver: receiverId,
      text,
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}