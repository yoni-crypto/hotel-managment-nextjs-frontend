"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { messages } from '@/lib/data'
const SidebarMenu = () => {

    const [selectedLink, setSelectedLink] = useState("/dashboard")
    

    return (
        <div className='mt-8 flex flex-col gap-4'>
            <Link href="/dashboard" onClick={() => setSelectedLink('/dashboard')} className={selectedLink === "/dashboard" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}  >
                <Image src="/home.png" alt='' width={20} height={20} />
                <span>Home</span>
            </Link>
            <Link href="/list/guests" onClick={() => setSelectedLink('/list/guests')} className={selectedLink === "/list/guests" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "} >
                <Image src="/guest.png" alt='' width={20} height={20} />
                <span>Guests</span>
            </Link>
            <Link href="/list/reservation" onClick={() => setSelectedLink('/list/reservation')} className={selectedLink === "/list/reservation" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/reservation.png" alt='' width={20} height={20} />
                <span>Reservations</span>
            </Link>
            <Link href="/list/room" onClick={() => setSelectedLink('/list/room')} className={selectedLink === "/list/room" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/room.png" alt='' width={20} height={20} />
                <span>Rooms</span>
            </Link>
            <Link href="/list/restaurant" onClick={() => setSelectedLink('/list/restaurant')} className={selectedLink === "/list/restaurant" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/restaurant.png" alt='' width={20} height={20} />
                <span>Restaurant</span>
            </Link>
            <Link href="/list/parking" onClick={() => setSelectedLink('/list/parking')} className={selectedLink === "/list/parking" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/parking.png" alt='' width={20} height={20} />
                <span>Parking</span>
            </Link>
            <Link href="/list/message" onClick={() => setSelectedLink('/list/message')} className={selectedLink === "/list/message" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/messages.png" alt='' width={20} height={20} />
                <div className='flex flex-row items-center justify-between w-full'>
                    <span>Messages</span>
                    <span className='px-1 rounded-full bg-red-600 text-white text-sm'>{messages.length}</span>
                </div>
            </Link>
            <Link href="/list/setting" onClick={() => setSelectedLink('/list/setting')} className={selectedLink === "/list/setting" ? "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 border-r-4 border-blue-700 bg-[#b1c8fa] " : "flex flex-row  gap-4 px-6 p-2 rounded-l-lg hover:bg-blue-50 "}>
                <Image src="/setting.png" alt='' width={20} height={20} />
                <span>Settings</span>
            </Link>
        </div>
    )
}

export default SidebarMenu
