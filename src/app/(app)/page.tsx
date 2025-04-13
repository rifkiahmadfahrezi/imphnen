import { Hero, About, MarqueeMember, Merchandises, CallToActionJoin } from "@/components/page/home"
import { Shade } from "@/components/ui/shade"

export default function Home() {
  return (
    <>
      <Shade corners={["top-left", "top-right"]} cornerClass="border-foreground/75 border-t-0 h-12" className="h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:from-background after:to-transparent after:inset-0 after:absolute" />
      <Hero />
      <MarqueeMember />
      <Shade  className="mt-10 border-y" />
      <About />
      <Shade className="border-y" />
      <Merchandises />
      <Shade className="border-y" />
      <CallToActionJoin />
      <Shade corners={["bottom-left", "bottom-right"]} cornerClass="border-foreground/75 border-b-0 h-12" className="h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:to-background after:from-transparent after:inset-0 after:absolute" />
    </>
  )
}