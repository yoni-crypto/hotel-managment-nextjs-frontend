"use client"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import SidebarMenu from "@/components/SidebarMenu"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="h-screen flex">
                    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] px-2">
                        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
                            <Image src="/hotel.png" alt="logo" width={48} height={48} />
                            <span className="hidden lg:block font-bold">YoHotel</span>
                        </Link>
                        <SidebarMenu/>
                    </div>
                    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#fff] overflow-scroll flex flex-col ">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}