import React from "react";
import Image from "next/image";

import { Lekton } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lekton({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image src="/logo.svg" width={28} height={28} alt="Logo" />
      <div className={cn("font-semibold text-base", font.className)}>Hikki</div>
    </div>
  );
};
