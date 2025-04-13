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

    await connectDB();
    
    // Get conversations this user is part of
    const conversations = await Conversation.find({
      participants: session.user.id
    });
    
    // Get messages from these conversations
    const messages = await Message.find({
      conversationId: { $in: conversations.map(c => c._id) }
    }).sort({ createdAt: -1 }).limit(50);

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

    // Find or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [session.user.id, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [session.user.id, receiverId]
      });
    }

    // Create message
    const message = await Message.create({
      conversationId: conversation._id,
      sender: session.user.id,
      text
    });

    // Update conversation's lastMessage
    await Conversation.findByIdAndUpdate(conversation._id, {
      lastMessage: message._id,
      updatedAt: new Date()
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}