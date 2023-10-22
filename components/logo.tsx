import React from "react";
import Image from "next/image";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image
        src="/logo.svg"
        width={28}
        height={28}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={28}
        height={28}
        alt="Logo"
        className="hidden dark:block"
      />

      <div className={cn("font-semibold text-base", font.className)}>Hikki</div>
    </div>
  );
};
