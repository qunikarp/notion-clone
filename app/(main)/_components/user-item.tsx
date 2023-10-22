"use client";
import { useUser } from "@clerk/clerk-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";

export const UserItem = () => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="w-5 h-5">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>{user?.firstName}</AvatarFallback>
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.firstName}&apos;s workspace
            </span>
          </div>
          <ChevronsLeftRight className="w-4 h-4 ml-2 rotate-90 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        forceMount
        alignOffset={11}
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
