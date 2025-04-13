import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Discord, Facebook, Instagram, GitHub } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { BorderBeam } from '@/components/animation'

export function CallToActionJoin() {
    return (
        <section id='join' className="py-16 px-3">
         <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2 max-w-screen-lg mx-auto">
         <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]">
            
         </div>
         <div className="aspect-video bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
            <div
               className="size-full overflow-hidden rounded-2xl border w-full shadow-md grid place-items-center bg-secondary">
                <div className="text-center">
                    <h2 className="text-balance text-2xl font-semibold lg:text-3xl">Belajar Bareng, Ketawa Bareng, Error Bareng</h2>
                    <p className="mt-4 max-w-md mx-auto">Kamu nggak harus jago buat gabung. Yang penting kuat mental, siap di-roasting, dan suka ngoding walau cuma niat.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild variant={"outline"} size="lg">
                           <Link href={siteConfig.links.discord}>
                              <Discord />
                              <span>Gabung di discord</span>
                           </Link>
                        </Button>
                        <Button asChild variant={"outline"} size="lg">
                           <Link href={siteConfig.links.facebook}>
                              <Facebook />
                              <span>Gabung di facebook</span>
                           </Link>
                        </Button>
                        <Button asChild variant={"outline"} size="lg">
                           <Link href={siteConfig.links.instagram}>
                              <Instagram />
                              <span>Gabung di instagram</span>
                           </Link>
                        </Button>
                        <Button asChild variant={"outline"} size="lg">
                           <Link href={siteConfig.links.github}>
                              <GitHub />
                              <span>Gabung di github</span>
                           </Link>
                        </Button>
                    </div>
                </div>
            </div>
         </div>
         <BorderBeam
               duration={10}
               size={200}
               className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
         />
      </div>
        </section>
    )
}