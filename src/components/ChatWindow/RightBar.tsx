import { useSidebar } from "@/context/SidebarContext";

const RightBar = () => {
  const { isRightBarVisible } = useSidebar();
  
  console.log('RightBar rendered, visibility:', isRightBarVisible);

  return (
    <section 
      className={`transform transition-all duration-700 ease-in-out overflow-hidden
        ${isRightBarVisible ? 'w-[90px] opacity-100' : 'w-0 opacity-0'}
        py-5 grid grid-row-2 text-center h-screen bg-yellow-500`}
    >
      <main className={`bg-red-500 space-y-20 transition-opacity duration-700
        ${isRightBarVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1>Apps</h1>
        <h1>Files</h1>
        <h1>Note</h1>
        <h1>Todo</h1>
        <h1>Remender</h1>
      </main>

      <main className={`mt-15 space-y-5 transition-opacity duration-700
        ${isRightBarVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1>Todo</h1>
        <h1>Remender</h1>
      </main>
    </section>
  );
};

export default RightBar;
