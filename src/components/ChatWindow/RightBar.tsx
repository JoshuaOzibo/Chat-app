import { useSidebar } from "@/context/SidebarContext";
import Button from "../ui/customUi/button";
import {
  AiOutlineAppstoreIcon,
  FaRegFileIcon,
  CgNotesIcon,
  FcTodoListIcon,
  LuClockIcon,
  CiSettingsIcon,
} from "@/Icons/Icons";
import { useColors } from '@/context/ColorContext';

const RightBar = () => {
  const { isRightBarVisible } = useSidebar();
  const {setIsColorPickerOpen} = useColors();

  return (
    <section
      className={`transform transition-all duration-500 ease-in-out overflow-hidden
        ${isRightBarVisible ? "w-[90px] opacity-100" : "w-0 opacity-0"}
        py-5 grid grid-row-2 text-center h-screen`}
    >
      <main
        className={` py-5 space-y-16 transition-opacity duration-700
        ${isRightBarVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="space-y-2">
          <Button
            className="bg-[#cfe9fb] p-2 rounded-full"
            value={<AiOutlineAppstoreIcon />}
            type="button"
          />
          <h1>Apps</h1>
        </div>
        <div className="space-y-2">
          <Button
            className="bg-[#cfe9fb] p-2 rounded-full"
            value={<FaRegFileIcon />}
            type="button"
          />
          <h1>Files</h1>
        </div>
        <div className="space-y-2">
          <Button
            className="bg-[#cfe9fb] p-2 rounded-full"
            value={<CgNotesIcon />}
            type="button"
          />
          <h1>Note</h1>
        </div>
        <div className="space-y-2">
          <Button
            className="bg-[#cfe9fb] p-2 rounded-full"
            value={<FcTodoListIcon />}
            type="button"
          />
          <h1>Todo</h1>
        </div>
        <div className="space-y-2">
          <Button
            className="bg-[#cfe9fb] p-2 rounded-full"
            value={<LuClockIcon />}
            type="button"
          />
          <h1>Remender</h1>
        </div>
      </main>

      <main
        className={`mt-15 space-y-5 transition-opacity duration-700
        ${isRightBarVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Button
          onClick={() => setIsColorPickerOpen((prev) => !prev)}
          className="bg-[#cfe9fb] p-2 rounded-full"
          value={<CiSettingsIcon />}
          type="button"
        />
      </main>
    </section>
  );
};

export default RightBar;
