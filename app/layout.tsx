import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "brcelso",
  description: "by celso",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10">
            <header>
              <div className="flex items-center justify-between">
                
                <Link
                href="/"
                >
                <Avatar>
                <AvatarImage  src={siteConfig.ogImage} />
                <AvatarFallback>BR</AvatarFallback>
                </Avatar>
                </Link>

                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-2">
                
                <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "w-7 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.vercel}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                <Icons.bone className="mr-2 h-3 w-3" />
                Home
              </Link>

              <Link
                href="/charts"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                Charts
              </Link>

              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.ibovespa}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                Ibovespa
              </Link>

              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                About
              </Link>

              <Link
                href="/links"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                Links
              </Link>

              <Link
                href="/fibo"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }))}>
                Fibo
              </Link>
                  
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
