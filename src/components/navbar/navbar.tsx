import { Button } from "@/components/ui/button";
import { Logo } from "../icons";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";

export const Navbar = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {
  return (
    <header className={cn("top-0 sticky z-50", className)} {...props}>
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo width={55} height={30} />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button asChild>
              <a href="#join">Bergabung</a>
            </Button>
            <ThemeSwitcher />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};