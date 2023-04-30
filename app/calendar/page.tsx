"use client"

"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "@/components/icons"

//import { PromoVideo } from "@/components/promo-video"

//import DashboardPage from "@/app/examples/dashboard/page"
import TradingViewWidget from "@/app/charts/page"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"

export default function C() {
    return (
      
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="overflow-hidden rounded-lg container flex max-w-[64rem] flex-col items-center gap-4 text-center">
       
          <Calendar
          mode="single"
          
          className="rounded-md border" />
        </div>
        </section>
    )
}
            
       