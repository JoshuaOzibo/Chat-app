'use client'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import socket from '@/app/lib/socket';

interface MessageProps {
    message: {
        _id: string;
        text: string;
    }
}

const SenderMessage = ({ message }: MessageProps) => {
    return (
        <div className="flex items-start justify-end">
            <div className="max-w-[70%]">
                <div className="bg-blue-600 rounded-br-none rounded-2xl px-4 py-2 text-white">
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
    );
};

export default SenderMessage;
