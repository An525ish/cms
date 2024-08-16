'use client';

import { ReactNode } from 'react';
import AppSidebar from '@/components/app-sidebar/AppSidebar';
import { SidebarProvider } from '@/contexts/sidebarContext';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="h-[calc(100vh-64px)] w-full overflow-y-auto p-4 scrollbar-hide">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
