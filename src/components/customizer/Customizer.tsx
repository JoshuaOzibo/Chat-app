"use client";

const Customizer = () => {
  return (
    <section>
      <main>
        <div>
          <h1>Customizer</h1>
          <p>Real Time Customize</p>
        </div>

        <div>
          <h2>Choose color</h2>
          {/* colors */}
          <div>
            <div className="w-[100px] h-[100px] bg-[#1c9dea] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#3a62b8] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#064c3c] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#9b4aff] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#00d3cb] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#ff5b92] rounded-md"></div>
            <div className="w-[100px] h-[100px] bg-[#ff803c] rounded-md"></div>
          </div>
        </div>

        <div>
          <h3>Chat Wallpaper</h3>
          {/* colors */}
          <div>
            <div className="w-[100px] h-[100px] bg-[#eff7fe] rounded-md" ></div>
            <div className="w-[100px] h-[100px] bg-[#c9e2fb] rounded-md" ></div>
            <div className="w-[100px] h-[100px] bg-[#e2ecf8] rounded-md" ></div>
            <div className="w-[100px] h-[100px] bg-[#fdf7e6] rounded-md" ></div>
            <div className="w-[100px] h-[100px] bg-[#c67760] rounded-md" ></div>
            <div className="w-[100px] h-[100px] bg-[#4f65aa] rounded-md" ></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Customizer;
