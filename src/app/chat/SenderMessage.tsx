'use client'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import socket from '@/app/lib/socket';

interface MessageType {
    _id: string;
    sender: string;
    text: string;
    receiver: string;
}

const SenderMessage = () => {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        if (!session?.user?.id) return;

        const fetchMessages = async () => {
            const res = await fetch('/api/messages');
            const data = await res.json();
            // Only show messages sent by current user
            setMessages(data.filter((msg: MessageType) => msg.sender === session.user.id));
        };

        fetchMessages();

        socket.on('new_message', (newMessage: MessageType) => {
            if (newMessage.sender === session.user.id) {
                setMessages((prev) => [...prev, newMessage]);
            }
        });

        return () => {
            socket.off('new_message');
        };
    }, [session]);

    return (
        <ul className="space-y-2 absolute mx-10 right-0">
            {messages.map((msg, index) => (
                <li className='bg-blue-900 rounded-br-2xl rounded-l-2xl px-3 py-2 text-white flex' key={msg._id || index}>
                    {msg.text}
                </li>
            ))}
        </ul>
    );
};

export default SenderMessage;
