"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function C() {
    return (
      
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="overflow-hidden rounded-lg container flex max-w-[64rem] flex-col items-center gap-4 text-center">
       
          <Calendar />
        </div>
        </section>
    )
}
            
       