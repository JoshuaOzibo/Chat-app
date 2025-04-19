'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isSubSidebarVisible: boolean;
  isRightBarVisible: boolean;
  toggleSubSidebar: () => void;
  toggleRightBar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSubSidebarVisible, setIsSubSidebarVisible] = useState(true);
  const [isRightBarVisible, setIsRightBarVisible] = useState(true);

  const toggleSubSidebar = () => {
    setIsSubSidebarVisible(prev => !prev);
  };

  const toggleRightBar = () => {
    setIsRightBarVisible(prev => {
      const newValue = !prev;
      return newValue;
    });
  };

  return (
    <SidebarContext.Provider value={{ 
      isSubSidebarVisible, 
      isRightBarVisible,
      toggleSubSidebar, 
      toggleRightBar 
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
} 