"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { navbarMenus } from "./menus";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";
import Link from "next/link";

export const NavigationSheet = () => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    console.log(open)
  }, [open])
  return (
    <Sheet defaultOpen={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col px-3 mt-10">
          {navbarMenus.map((menu) => (
            <li key={menu.label} className="py-2">
              {menu.url && (
                <Button
                  asChild
                  className="w-full justify-start"
                  
                  variant={"ghost"}
                >
                  <Link 
                    onClick={() => setOpen(false)} 
                    href={menu.url}>{menu.label}</Link>
                </Button>
              )}
              {menu.items && (
                <Collapsible>
                  <CollapsibleTrigger asChild className="w-full justify-start">
                    <Button variant={"ghost"} className="w-full justify-start">
                      <span>{menu.label}</span>
                      <ChevronDown />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="flex flex-col bg-secondary rounded mt-1">
                      {menu.items.map((item) => (
                        <li key={item.title} className=" ml-5 py-2">
                          <Button onClick={() => setOpen(false)} asChild variant={"ghost"}>
                            <Link href={item.url}>{item.title}</Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};