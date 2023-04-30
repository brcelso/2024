"use client"

import "@/styles/globals.css"
import { TailwindIndicator } from "@/components/tailwind-indicator"
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
      
      
          <Calendar />
       
    )
}
            
       