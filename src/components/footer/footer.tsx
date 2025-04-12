
import Link from 'next/link'
import { links } from './links'
import { siteConfig } from '@/config/site'
import { Discord, Facebook, Instagram } from '../icons'
import { Logo } from '../icons'

export const Footer = () => {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link href="/" aria-label="go home" className="mx-auto block size-fit">
                    <Logo width={200} height={100} />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map(({href, label}) => (
                        <Link key={href} href={href} className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label={"instagram"} className="text-muted-foreground hover:text-primary block">
                        <Instagram className='size-6'/>
                    </a>
                    <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label={"facebook"} className="text-muted-foreground hover:text-primary block">
                        <Facebook className='size-6'/>
                    </a>
                    <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" aria-label={"discord"} className="text-muted-foreground hover:text-primary block">
                        <Discord className='size-6'/>
                    </a>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} {siteConfig.title}, All rights reserved</span>
            </div>
        </footer>
    )
}

