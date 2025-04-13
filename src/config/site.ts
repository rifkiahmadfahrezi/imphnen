const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteConfig = {
   title: "IMPHNEN",
   description: "Komunitas ingin menjadi programmer handal namun enggan ngoding.",
   keyword: ["imphnen", "komunitas programmer", "ngoding"],
   url: SITE_URL,
   openGraph: `${SITE_URL}/og.jpg`,
   links: {
      facebook: "https://web.facebook.com/groups/programmerhandal/",
      discord: "https://discord.gg/imphnen",
      instagram: "#",
      github: "https://github.com/imphnen",
      shopee: "https://shopee.co.id/imphnen"
   }
}