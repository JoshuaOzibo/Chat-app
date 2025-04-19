import { useSidebar } from "@/context/SidebarContext";
import Button from "../ui/customUi/button";
import { IoMdPaperPlaneIcon } from "@/Icons/Icons";

const RightBar = () => {
  const { isRightBarVisible } = useSidebar();

  return (
    <section
      className={`transform transition-all duration-500 ease-in-out overflow-hidden
        ${isRightBarVisible ? "w-[90px] opacity-100" : "w-0 opacity-0"}
        py-5 grid grid-row-2 text-center h-screen bg-yellow-500`}
    >
      <main
        className={`bg-red-500 space-y-20 transition-opacity duration-700
        ${isRightBarVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div>
          <h1>Apps</h1>
        </div>
        <div>
          <h1>Files</h1>
        </div>
        <div>
          <h1>Note</h1>
        </div>
        <div>
          <h1>Todo</h1>
        </div>
        <div>
          <h1>Remender</h1>
        </div>
      </main>

      <main
        className={`mt-15 space-y-5 transition-opacity duration-700
        ${isRightBarVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Button
          className="bg-[#ffdac5] p-2 rounded-full"
          value={<IoMdPaperPlaneIcon />}
          type="button"
        />
      </main>
    </section>
  );
};

export default RightBar;
