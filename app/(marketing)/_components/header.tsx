"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Header = () => {
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
      <Button>
        Join Hikki Beta
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};
