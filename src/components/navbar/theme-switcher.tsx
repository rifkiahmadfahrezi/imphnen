"use client"

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

export const ThemeSwitcher = ({
   className,
   ...props
} : React.ComponentProps<typeof Button>) => {
   const { theme, setTheme } = useTheme()

   return (
      <Button 
         onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
         }}
         size={"icon"}
         variant={"outline"}
         {...props}>
         {
            theme === "dark" ? (
              <>
                <SunIcon />
                <span className="sr-only">Switch to light mode</span>
              </>
            ) : (
              <>
                <MoonIcon />
                <span className="sr-only">Switch to dark mode</span>
              </>
            )
         }
      </Button>
   )
};
