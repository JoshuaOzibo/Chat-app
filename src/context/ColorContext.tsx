'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ColorPair {
  primary: string;
  light: string;
}

interface ColorContextType {
  primaryColor: ColorPair;
  chatBackground: string;
  isColorPickerOpen: boolean;
  setPrimaryColor: (colors: ColorPair) => void;
  setChatBackground: (color: string) => void;
  setIsColorPickerOpen: (isOpen: boolean) => void;
}

export const ColorContext = createContext<ColorContextType>({
  primaryColor: { primary: '#1c9dea', light: '#cfe9fb' },
  chatBackground: '#ffffff',
  isColorPickerOpen: false,
  setPrimaryColor: () => {},
  setChatBackground: () => {},
  setIsColorPickerOpen: () => {},
});

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState<ColorPair>({ 
    primary: '#1c9dea', 
    light: '#cfe9fb' 
  });
  const [chatBackground, setChatBackground] = useState('#ffffff');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  return (
    <ColorContext.Provider
      value={{
        primaryColor,
        chatBackground,
        isColorPickerOpen,
        setPrimaryColor,
        setChatBackground,
        setIsColorPickerOpen,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export function useColors() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
} 