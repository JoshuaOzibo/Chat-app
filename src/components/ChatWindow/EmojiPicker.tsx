"use client";

import dynamic from 'next/dynamic';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { HiOutlineEmojiHappyIcon } from "@/Icons/Icons";

// Dynamically import Picker to avoid SSR issues
const Picker = dynamic(() => import('@emoji-mart/react'), {
  ssr: false,
});

interface EmojiPickerProps {
  primaryColor: {
    primary: string;
    light: string;
  };
  onEmojiSelect: (emoji: string) => void;
}

export default function EmojiPicker({
  primaryColor,
  onEmojiSelect,
}: EmojiPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    onEmojiSelect(emoji.native);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="bg-[#cfe9fb] cursor-pointer p-2 rounded-full hover:bg-[#bde3f9]"
        >
          <HiOutlineEmojiHappyIcon color={primaryColor.primary} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto p-0 border-none"
        sideOffset={5}
      >
        {isOpen && (
          <Picker
            data={async () => {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_EMOJI_URL}`
              );
              return response.json();
            }}
            onEmojiSelect={handleEmojiSelect}
            theme="light"
            set="native"
            previewPosition="none"
            skinTonePosition="none"
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
