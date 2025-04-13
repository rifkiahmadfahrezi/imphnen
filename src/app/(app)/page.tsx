import { Hero, About, MarqueeMember, Merchandises, CallToActionJoin } from "@/components/page/home"

export default function Home() {
  return (
    <>
      <div className="h-16 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] border-y"/>
      <Hero />
      <MarqueeMember />
      <About />
      <div className="h-16 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] border-y"/>
      <Merchandises />
      <div className="h-16 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] border-y"/>
      <CallToActionJoin />
    </>
  )
}