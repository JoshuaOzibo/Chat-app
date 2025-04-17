import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectDB from '@/app/lib/Mongo';
import User from '@/models/User';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session?.user?.email) {
      console.log('No session or user email');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Get all users except the current user using email
    const users = await User.find({ 
      email: { $ne: session.user.email } // Filter by email instead of googleId
    }).select('name email image googleId');

    console.log('Found users:', users);

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error in /api/users:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch users' }, 
      { status: 500 }
    );
  }
} 