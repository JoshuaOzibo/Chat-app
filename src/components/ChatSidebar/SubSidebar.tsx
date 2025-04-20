"use client";
import { signOut, useSession } from "next-auth/react";
import Button from "../ui/customUi/button";
import {
  IoIosStarIcon,
  HiClipboardDocumentListIcon,
  IoIosContactsIcon,
  FaBellIcon,
  CiSettingsIcon,
  IoMoonOutlineIcon,
  FaRegLightbulbIcon,
  MdOutlinePowerSettingsNewIcon,
} from "@/Icons/Icons";
import { useSidebar } from "@/context/SidebarContext";
import { useColors } from '@/context/ColorContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SubSidebar = () => {
  const { isSubSidebarVisible } = useSidebar();
  const { data: session } = useSession();
  const { primaryColor } = useColors();

  return (
    <main
      className={` flex border-r flex-col space-y-20 h-screen overflow-hidden
        transition-all duration-500 ease-in-out
        ${isSubSidebarVisible ? "w-[130px] opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="border-b-1">{/* img */}</div>
      <div className="flex justify-center w-full">
        <img 
          className="rounded-full h-[70px] w-[70px] object-cover" 
          style={{ borderColor: primaryColor.primary, borderWidth: '4px' }}
          src={session?.user?.image || '/default-avatar.png'} 
          alt={session?.user?.name || 'User avatar'} 
        />
      </div>
      <div className=" space-y-8 flex items-center flex-col">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<IoIosStarIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Favorites</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<HiClipboardDocumentListIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Chat History</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<IoIosContactsIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Contacts</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<FaBellIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<CiSettingsIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<IoMoonOutlineIcon color={primaryColor.primary}/>}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Dark Mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className=" space-y-8 py-10 flex items-center flex-col">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="bg-[#cfe9fb] p-2 rounded-full"
                  value={<MdOutlinePowerSettingsNewIcon color={primaryColor.primary} />}
                  type="button"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black text-white p-2 rounded shadow-md">
              <p>Sign Out</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
};

export default SubSidebar;
