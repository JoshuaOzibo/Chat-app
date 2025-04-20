'use client'

import { Badge } from "@/components/ui/badge";
import { FaVolumeHighIcon } from "@/Icons/Icons";
import {
  FiSearchIcon,
  IoCallOutlineIcon,
  MdOutlineVideocamIcon,
  AiOutlineAppstoreIcon,
  CiMenuKebabIcon,
} from "@/Icons/Icons";
import Button from "@/components/ui/customUi/button";
import { useSidebar } from "@/context/SidebarContext";
import { useColors } from '@/context/ColorContext';



interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface CurrentChattingUserProps {
  user: User;
}

const CurrentChattingUser = ({ user }: CurrentChattingUserProps) => {
  const { toggleRightBar } = useSidebar();
  const { primaryColor } = useColors();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleRightBar();
  };

  return (
    <>
      <section className="bg-blue-500 flex space-x-5 absolute items-center xl:w-[55%] rounded-md lg:w-[72%] w-[90%] py-6 px-10 top-5 left-1/2 -translate-x-1/2">
        <main className="flex items-center gap-3">
          {/* <img src="" alt="" /> */}
          <img className="w-[50px] h-[50px] rounded-lg" src={user.image} alt="img src" />
          <div>
          <h1 className="font-medium text-sm">{user.name}</h1>
          <Badge variant="outline" className="bg-red-700 -py-2">
            Active
          </Badge>
          </div>
        </main>

        <div className="h-8 w-[1px] bg-gray-300/50" />

        <main className="flex justify-between items-center flex-1">
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              className="bg-[#cfe9fb] p-[5px] rounded-full"
              value={<FaVolumeHighIcon color={primaryColor.primary} />}
            />
            <Button
              type="button"
              className="bg-[#cfe9fb] p-[5px] rounded-full"
              value={<FiSearchIcon color={primaryColor.primary} />}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              className="bg-[#cfe9fb] p-[5px] rounded-full"
              value={<IoCallOutlineIcon color={primaryColor.primary} />}
            />
            <Button
              type="button"
              className="bg-[#cfe9fb] p-[5px] rounded-full"
              value={<MdOutlineVideocamIcon color={primaryColor.primary} />}
            />
            <Button
              type="button"
              className="bg-[#cfe9fb] cursor-pointer p-[5px] rounded-full"
              value={<AiOutlineAppstoreIcon color={primaryColor.primary} />}
              onClick={handleClick}
            />
            <Button
              type="button"
              className="hover:bg-[#cfe9fb] p-[5px] rounded-full"
              value={<CiMenuKebabIcon color={primaryColor.primary} />}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default CurrentChattingUser;
