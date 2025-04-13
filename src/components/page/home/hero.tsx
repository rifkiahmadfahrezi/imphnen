import { Button } from "@/components/ui/button";
import { TextAnimate, BlurFade } from "@/components/animation";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
    <div className="flex items-center justify-center px-6 py-28">
      <div className="text-center max-w-2xl">
          <TextAnimate as={"h1"} className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold" once animation="blurInDown" duration={.3}>
            Komunitas programmer yang anti baper.
          </TextAnimate>
        <TextAnimate className="mt-6 text-[17px] md:text-lg text-foreground/75" as={"p"} once animation="blurInDown" delay={.3} duration={.3}>
          Tempat nongkrongnya programmer yang suka scroll fesnuk daripada ngoding — tapi masih mau ngikutin drama didunia programming.
        </TextAnimate>
        <div className="mt-12 flex items-center justify-center gap-4">
        <BlurFade>
          <Button asChild size="lg" className="rounded-full text-md h-10">
            <Link href={"#join"}>
              <span>Ayo</span>
              <span className="line-through">scroll fesnuk</span>
              <span>gabung!</span>
            </Link>
          </Button>
        </BlurFade>
        </div>
      </div>
    </div>
    </>
  );
};
