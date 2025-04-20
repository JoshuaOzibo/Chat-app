import { signOut, useSession } from "next-auth/react";
import Button from "../ui/customUi/button";
import {
  IoMdPaperPlaneIcon,
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

const SubSidebar = () => {
  const { isSubSidebarVisible } = useSidebar();
  const { data: session } = useSession();

  return (
    <main
      className={` flex border-r flex-col space-y-20 h-screen overflow-hidden
        transition-all duration-500 ease-in-out
        ${isSubSidebarVisible ? "w-[130px] opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="border-b-1">{/* img */}</div>
      <div className="flex justify-center w-full">
        <img 
          className="border-4 border-[#1c9dea] rounded-full h-[70px] w-[70px] object-cover" 
          src={session?.user?.image || '/default-avatar.png'} 
          alt={session?.user?.name || 'User avatar'} 
        />
      </div>
      <div className=" space-y-8 flex items-center flex-col">
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<IoIosStarIcon />}
          type="button"
        />
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<HiClipboardDocumentListIcon />}
          type="button"
        />
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<IoIosContactsIcon />}
          type="button"
        />
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<FaBellIcon />}
          type="button"
        />
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<CiSettingsIcon />}
          type="button"
        />
        <Button
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<IoMoonOutlineIcon />}
          type="button"
        />
      </div>

      <div className=" space-y-8 py-10 flex items-center flex-col">
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<MdOutlinePowerSettingsNewIcon />}
          type="button"
        />
      </div>
    </main>
  );
};

export default SubSidebar;
