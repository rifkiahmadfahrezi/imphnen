import { cn } from "@/lib/utils";
import { Marquee } from "@/components/animation/marquee";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  BottomLeftCorner,
  BottomRightCorner,
  TopLeftCorner,
  TopRightCorner
} from "@/components/ui/corners"

const reviews = [
  {
    name: "Sandhika galih",
    channel: "Web programming unpas",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Eko kurniawan khannedy",
    channel: "Programmer zaman now",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "M haidar hanif",
    channel: "bearmentor.com",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Ahmad rosid",
    channel: "ngooding",
    img: "https://avatar.vercel.sh/john",
  },
];


export function MarqueeMember() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
      <h2 className="mb-2 opacity-75">Para sepuh IMPHNEN</h2>
      <Marquee pauseOnHover className="[--duration:30s] isolate">
        {reviews.map(({ name, channel, img }) => (
            <figure key={channel} className={cn(
                  // i % 2 !== 0 ? "rotate-6" : "-rotate-6", 
                  "hover:rotate-0 transition duration-200",
                  "hover:scale-110 hover:z-40 relative",
                  "not-hover:opacity-75 group relative"
                )}>
              <BottomLeftCorner className="border-foreground/75" />
              <BottomRightCorner className="border-foreground/75" />
              <TopLeftCorner className="border-foreground/75" />
              <TopRightCorner className="border-foreground/75" />
              <Card className="flex flex-row items-center gap-2 px-4 rounded scale-90 hover:scale-110">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    <CardTitle>{name}</CardTitle>
                  </figcaption>
                  <p className="text-xs font-medium dark:text-white/40">{channel}</p>
                </div>
              </Card>
            </figure>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
