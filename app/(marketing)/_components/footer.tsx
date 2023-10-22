import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="dark:bg-[#1f1f1f] flex items-center w-full p-6 bg-background z-50">
      <Button variant={"link"}>
        <Logo />
      </Button>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center text-muted-foreground">
        <Button className="" variant={"ghost"} size="sm">
          Privacy Policy
        </Button>
        <Button className="" variant={"ghost"} size="sm">
          Terms of Service
        </Button>
      </div>
    </footer>
  );
};
