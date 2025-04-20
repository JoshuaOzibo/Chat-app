import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  primaryColor: string;
  chatBackground: string;
  isColorPickerOpen: boolean;
  setPrimaryColor: (color: string) => void;
  setChatBackground: (color: string) => void;
  toggleColorPicker: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState('#1c9dea');
  const [chatBackground, setChatBackground] = useState('#eff7fe');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const toggleColorPicker = () => {
    setIsColorPickerOpen(prev => !prev);
  };

  return (
    <ColorContext.Provider value={{ 
      primaryColor, 
      chatBackground, 
      isColorPickerOpen,
      setPrimaryColor, 
      setChatBackground,
      toggleColorPicker 
    }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColors() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
} 