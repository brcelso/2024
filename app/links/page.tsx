"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
    return (
      
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="overflow-hidden rounded-lg container flex max-w-[64rem] flex-col items-center gap-4 text-center">
       
        {/*<Avatar>
        <AvatarImage src="https://github.com/brcelso.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
              <Link href="/charts" className={cn(buttonVariants({ size: "lg" }))}>
                Charts
              </Link>
  
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }))}>
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Link>
              
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.vercel}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }))}>
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Vercel
              </Link>
  
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.twitter}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }))}>
                <Icons.twitter className="mr-2 h-4 w-4" />
                Twitter
              </Link>
  
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.whatsapp}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }))}>
                <Icons.whatsapp className="mr-2 h-4 w-4" />
                WhatsApp
              </Link>
  
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.instagram}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }))}>
                <Icons.instagram className="mr-2 h-4 w-4" />
                Instagram
              </Link>
              
               </div>
              </section>   
    )
  }