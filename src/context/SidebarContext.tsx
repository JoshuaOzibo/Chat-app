'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isSubSidebarVisible: boolean;
  toggleSubSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSubSidebarVisible, setIsSubSidebarVisible] = useState(true);

  const toggleSubSidebar = () => {
    setIsSubSidebarVisible(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSubSidebarVisible, toggleSubSidebar }}>
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