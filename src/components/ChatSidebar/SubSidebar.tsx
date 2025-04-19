import { signOut } from "next-auth/react";
import Button from "../ui/customUi/button";
import { IoMdPaperPlaneIcon } from "@/Icons/Icons";
import { useSidebar } from "@/context/SidebarContext";

const SubSidebar = () => {
  const { isSubSidebarVisible } = useSidebar();

  return (
    <main 
      className={`bg-blue-900 left-20 flex flex-col space-y-20 h-full
        transition-transform duration-300 ease-in-out
        ${isSubSidebarVisible ? 'translate-x-0 w-[130px]' : '-translate-x-20 w-0'}`}
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
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
        
      </div>

      <div className=" space-y-8 py-10 flex items-center flex-col">
      <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign Out
      </button>
      </div>
    </main>
  );
};

export default SubSidebar;
