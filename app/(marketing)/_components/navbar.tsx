"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center">
        <Button className="" variant={"ghost"} size="sm">
          Login
        </Button>
        <Button className="" variant={"ghost"} size="sm">
          Sign-up
        </Button>
      </div>
      <ModeToggle />
    </div>
  );
};