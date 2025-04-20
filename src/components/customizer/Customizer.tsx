"use client";
import { useColors } from '@/context/ColorContext';

const Customizer = () => {
  const { setPrimaryColor, setChatBackground, isColorPickerOpen } = useColors();

  const primaryColors = [
    '#1c9dea', '#3a62b8', '#064c3c', '#9b4aff', 
    '#00d3cb', '#ff5b92', '#ff803c'
  ];

  const backgroundColors = [
    '#eff7fe', '#c9e2fb', '#e2ecf8', '#fdf7e6',
    '#c67760', '#4f65aa'
  ];

  return (
    <div className={`fixed top-20 h-screen right-0 z-50 transition-transform duration-300 ${
      isColorPickerOpen ? 'translate-x-0' : 'translate-x-[calc(100%)]'
    }`}>
      <div className="bg-white p-6 rounded-l-md shadow-lg min-w-[300px]">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">Customizer</h1>
          <p className="text-gray-600">Real Time Customize</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Choose color</h2>
          <div className="grid grid-cols-4 gap-3">
            {primaryColors.map((color) => (
              <button
                key={color}
                onClick={() => setPrimaryColor(color)}
                className="w-12 h-12 rounded-md transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Chat Wallpaper</h3>
          <div className="grid grid-cols-3 gap-3">
            {backgroundColors.map((color) => (
              <button
                key={color}
                onClick={() => setChatBackground(color)}
                className="w-12 h-12 rounded-md transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
