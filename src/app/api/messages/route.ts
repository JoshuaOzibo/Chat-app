// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/app/lib/Mongo';
import Message from '@/models/Message';
import { authOptions } from '../auth/[...nextauth]/route';
import { encryptMessage, decryptMessage, isEncrypted } from '@/app/lib/encryption';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    

    
    // Get all messages where user is either sender or receiver
    const messages = await Message.find({
      $or: [
        { sender: session.user.id },
        { receiver: session.user.id },
        { sender: session.user.email },
        { receiver: session.user.email }
      ]
    }).sort({ createdAt: -1 });

    // Safely decrypt messages, handling both encrypted and unencrypted messages
    const processedMessages = messages.map(message => {
      const messageObj = message.toObject();
      try {
        messageObj.text = decryptMessage(messageObj.text);
      } catch (error) {
        console.error('Error decrypting message:', error);
        // Keep original text if decryption fails
      }
      return messageObj;
    });

    // console.log('Found messages:', processedMessages);
    return NextResponse.json(processedMessages);
  } catch (error) {
    // console.error('Error fetching messages:', error);
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

    // console.log('Creating message:', {
    //   sender: session.user.id,
    //   senderEmail: session.user.email,
    //   receiver: receiverId,
    //   text
    // });

    // Always encrypt new messages
    const encryptedText = encryptMessage(text);

    const message = await Message.create({
      sender: session.user.id,
      senderEmail: session.user.email,
      receiver: receiverId,
      text: encryptedText,
    });

    // Return decrypted message to sender
    const messageObject = message.toObject();
    messageObject.text = text; // Send back original text to sender

    return NextResponse.json(messageObject);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}