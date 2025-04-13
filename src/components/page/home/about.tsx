import { Users, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import { TextAnimate, BlurFade } from '@/components/animation'
import { NumberTicker } from '@/components/animation'

export const About = () => {
    return (
        <section id='tentang' className="py-16 md:py-32">
            <div className="mx-auto max-w-screen-xl space-y-8 px-6 md:space-y-16">
                <TextAnimate as={"h2"} once className="relative z-10 max-w-xl text-5xl font-medium lg:text-6xl">Komunitas ngoding anti boring.</TextAnimate>
                <BlurFade className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>IMPHNEN lahir dari keresahan bersama para programmer   yang terlalu sering disambut error, tutorial yang ngebosenin, dan semangat ngoding yang entah ke mana. Sekitar tahun 2023, sekelompok programmer anti-mainstream memutuskan untuk membentuk sebuah wadah bernama IMPHNEN.</p>
                        <p>Nama IMPHNEN sendiri adalah singkatan dari &quot;Ingin Menjadi Programmer Handal, Namun Enggan Ngoding&quot; — sebuah pernyataan jujur dan satir tentang perjuangan kami: pengen jago, tapi... ya, nanti dulu ngodingnya.
                        </p>
               <        p>
                        Di balik kemalasan itu, kami percaya: belajar ngoding nggak harus serius melulu. Bisa santai, lucu, dan tetap bikin skill naik level (meski pelan-pelan).</p>
                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Users className="size-4" />
                                    <h3 className="text-sm font-medium">+<NumberTicker value={170} />rb</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Member expert dibidang scroll fesnuk</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <LayoutDashboard className="size-4" />
                                    <h3 className="text-sm font-medium">+<NumberTicker value={30} /></h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Repository open-source hasil <span className='line-through opacity-75'>vibe coding</span> kerjasama antar member.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-54% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/banner.png" className="rounded-[12px] h-full object-right" alt="payments illustration dark" width={1207} height={929} />
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}