import Image from "next/image";
import { BlurFade } from "@/components/animation";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

const products = [
   {
      title: "Merch pack 1",
      price: 175000,
      image: "/merch/1-merch.webp",
      link: siteConfig.links.shopee
   },
   {
      title: "Merch pack 2",
      link: siteConfig.links.shopee,
      price: 200000,
      image: "/merch/2-merch.webp"
   },
   {
      title: "Merch pack 3",
      link: siteConfig.links.shopee,
      price: 575000,
      image: "/merch/3-merch.webp"
   },
   {
      title: "Mini merch pack",
      link: siteConfig.links.shopee,
      price: 90000,
      image: "/merch/4-merch.webp"
   },
]
 export const Merchandises = () => {
   return (
     <section id="merchandise" className="min-h-screen flex items-center justify-center py-12">
       <div className="w-full flex flex-col items-center space-y-10">
         <BlurFade inView className="text-center space-y-2.5">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
               Official merchendise IMPHNEN
            </h2>
            <p className="max-w-2xl opacity-75 mx-auto">Merch ini lahir dari jiwa-jiwa penuh motivasi tapi minim implementasi. Pas banget buat kamu yang lebih sering nge-roasting teknologi daripada ngulik dokumentasi.</p>
         </BlurFade>
         <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
           {products.map(({ title, price, image, link}) => (
             <BlurFade inView key={title} className="flex flex-col text-start group">
               <figure className="mb-5 sm:mb-6 w-full aspect-square overflow-hidden" >
                  <a href={link} target="_blank">
                     <Image className="group-hover:scale-95 transition duration-150" src={image} width={300} height={300} alt={title} />
                     <span className="sr-only">View product</span>
                  </a>
               </figure>
               <span className="text-xs">{formatCurrency(price)}</span>
               <h3 className="text-xl font-medium tracking-tight">
                  <a href={link} target="_blank">
                  {title}
                  </a>
               </h3>
             </BlurFade>
           ))}
         </div>
         <Button asChild variant={"outline"} >
            <a
               target="_blank"
               href={siteConfig.links.shopee}>
               Lihat koleksi lainnya <ArrowUpRight className="size-3" />
            </a>
         </Button>

       </div>
     </section>
   );
 };

 