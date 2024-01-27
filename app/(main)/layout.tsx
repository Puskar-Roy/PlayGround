import React from "react";
import Navigationsidebar from '../../components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hideen md:flex h-full w-[72px] z-30 fixed flex-col inset-y-0">
        <Navigationsidebar/>
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
