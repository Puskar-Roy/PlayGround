import React from "react";
import { currentProfile } from "../../lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "../../lib/db";
import NavigationAction from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "..//ui/scroll-area";
import Navigationitem from "./navigation-item";
import { ModeToggle } from '../theme-toogle';
import { UserButton } from '@clerk/nextjs'

const Navigationsidebar = async () => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect("/");
  }
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  console.log(servers);

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full ">
        {servers.map((s) => (
          <div className="mb-4" key={s.id}>
            <Navigationitem id={s.id} name={s.name} imageUrl={s.imageUrl} />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
          <ModeToggle/>
          <UserButton afterSignOutUrl="/" appearance={{elements:{
            avatarBox:"h-[48px] w-[48px]"
          }}}/>
      </div>
    </div>
  );
};

export default Navigationsidebar;
