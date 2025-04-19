import { signOut } from "next-auth/react";
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

  return (
    <main
      className={`bg-blue-900 flex flex-col space-y-20 h-full overflow-hidden
        transition-all duration-500 ease-in-out
        ${isSubSidebarVisible ? "w-[130px] opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="border-b-1">{/* img */}</div>
      <div className="flex justify-center w-full">
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
      </div>
      <div className=" space-y-8 bg-amber-700 flex items-center flex-col">
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoIosStarIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<HiClipboardDocumentListIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoIosContactsIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<FaBellIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<CiSettingsIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMoonOutlineIcon />}
          type="button"
        />
      </div>

      <div className=" space-y-8 py-10 flex items-center flex-col">
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<MdOutlinePowerSettingsNewIcon />}
          type="button"
        />
      </div>
    </main>
  );
};

export default SubSidebar;
