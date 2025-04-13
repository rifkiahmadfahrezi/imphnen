import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Discord, Facebook, Instagram, GitHub } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { TextAnimate, BlurFade } from '@/components/animation'

export function CallToActionJoin() {
    return (
        <section id='join' className="py-20 px-3 text-foreground">
         <div className="text-center">
         <TextAnimate once as={"h2"} className="text-balance text-2xl font-semibold lg:text-3xl">Belajar Bareng, Ketawa Bareng, Error Bareng</TextAnimate>
         <TextAnimate once as={"p"} className="mt-4 max-w-lg mx-auto">Kamu nggak harus jago buat gabung. Yang penting kuat mental, siap di-roasting, dan suka ngoding walau cuma niat.</TextAnimate>

         <BlurFade inView className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild variant={"default"} size="lg">
               <Link target='_blank' href={siteConfig.links.discord}>
                  <Discord />
                  <span>Gabung di discord</span>
               </Link>
            </Button>
            <Button asChild variant={"default"} size="lg">
               <Link target='_blank' href={siteConfig.links.facebook}>
                  <Facebook />
                  <span>Gabung di facebook</span>
               </Link>
            </Button>
            <Button asChild variant={"default"} size="lg">
               <Link target='_blank' href={siteConfig.links.instagram}>
                  <Instagram />
                  <span>Gabung di instagram</span>
               </Link>
            </Button>
            <Button asChild variant={"default"} size="lg">
               <Link target='_blank' href={siteConfig.links.github}>
                  <GitHub />
                  <span>Gabung di github</span>
               </Link>
            </Button>
         </BlurFade>
      </div>
        </section>
    )
}