import { ModeToggle } from "@/components/theme-toogle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="">
      This is Protected Route!
      <UserButton afterSignOutUrl="/" />
      <ModeToggle/>
    </div>
  );
}
