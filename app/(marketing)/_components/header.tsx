"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { Arrow } from "@radix-ui/react-dropdown-menu";

export const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your notes and tasks, structured. Welcome to <br />
        <span className="font-bold">Hikki</span>
      </h1>
      <h2 className="text-base sm:text-xl md:text-2xl font-medium">
        Hikki is the only tool you need to organize your notes and tasks. It
        combines the simplicity of a note-taking app with the power of a project
        management tool.
      </h2>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="large" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button variant={"link"} size="default">
          <Link href="/documents" className="flex items-center">
            Join workspace <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button size="sm" variant={"link"}>
              Sign up <ArrowRight size={16} className="ml-2" />
            </Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};
