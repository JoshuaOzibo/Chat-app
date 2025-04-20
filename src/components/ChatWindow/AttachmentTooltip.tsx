'use client';

import {
    GrGalleryIcon,
  MdOutlineCameraAltIcon,
  IoMdCodeIcon,
  CiLocationOnIcon,
  GrAttachmentIcon,
  IoIosContactsIcon,
  HiClipboardDocumentListIcon,
  TiPlusIcon
} from "@/Icons/Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Button from '@/components/ui/customUi/button';
import { useState } from 'react';

interface AttachmentTooltipProps {
  primaryColor: {
    primary: string;
    light: string;
  };
}

export default function AttachmentTooltip({ primaryColor }: AttachmentTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const attachmentOptions = [
    { icon: <GrGalleryIcon color={primaryColor.primary} />, label: 'Gallery' },
    { icon: <MdOutlineCameraAltIcon color={primaryColor.primary} />, label: 'Camera' },
    { icon: <IoMdCodeIcon color={primaryColor.primary} />, label: 'Code Snippet' },
    { icon: <IoIosContactsIcon color={primaryColor.primary} />, label: 'Contact' },
    { icon: <CiLocationOnIcon color={primaryColor.primary} />, label: 'Location' },
    { icon: <HiClipboardDocumentListIcon color={primaryColor.primary} />, label: 'Document' },
    { icon: <GrAttachmentIcon color={primaryColor.primary} />, label: 'Attach' },
  ];

  const handleOptionClick = (label: string) => {
    console.log(`Selected: ${label}`);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button" 
          className="bg-[#cfe9fb] cursor-pointer p-2 rounded-full hover:bg-[#bde3f9]" 
        >
          <TiPlusIcon color={primaryColor.primary} />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        align="start"
        className="bg-white p-3 rounded-lg shadow-lg grid grid-cols-4 gap-3 w-[320px] border"
        sideOffset={5}
      >
        {attachmentOptions.map((option, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => handleOptionClick(option.label)}
          >
            <div className="p-2">{option.icon}</div>
            <span className="text-xs text-gray-600">{option.label}</span>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
} 