'use client';
import { useState } from 'react';
import { CiMenuKebabIcon } from "@/Icons/Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MessageOptionsProps {
  messageId: string;
}

const MessageOptions = ({ messageId }: MessageOptionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    // Handle edit functionality
    console.log('Edit message:', messageId);
    setIsOpen(false);
  };

  const handleDelete = () => {
    // Handle delete functionality
    console.log('Delete message:', messageId);
    setIsOpen(false);
  };

  return (
    <div className="inline-flex items-center">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <CiMenuKebabIcon className="text-gray-200" size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-32 p-1 bg-white shadow-lg rounded-lg border"
          align="end"
        >
          <button 
            onClick={handleEdit}
            className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 rounded"
          >
            Edit
          </button>
          <button 
            onClick={handleDelete}
            className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 text-red-500 rounded"
          >
            Delete
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MessageOptions; 