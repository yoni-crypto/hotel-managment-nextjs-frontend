"use client"
import Image from "next/image";

export default function AdminBar() {
    const totalRooms = 400;

    const occupiedPercentage = (286 / totalRooms) * 100;
    const reservedPercentage = (87 / totalRooms) * 100;
    const availablePercentage = (32 / totalRooms) * 100;
    const notReadyPercentage = (13 / totalRooms) * 100;

    return (
        <div className='flex flex-col justify-between h-[90%]'>
            <div>
                <div className='flex flex-row items-center justify-between'>
                    <h1>Room Availability</h1>
                    <Image src="/threedotb.png" alt=" " width={20} height={20}/>
                </div>

                <div className='mt-4 relative w-full h-16 rounded-lg overflow-hidden bg-white flex'>
                    <div
                        className='h-full bg-[#2562eb] rounded-l-lg'
                        style={{ width: `${occupiedPercentage - 1}%`, marginRight: '1%' }}
                    ></div>
                    <div
                        className='h-full bg-[#33b8e3]'
                        style={{ width: `${reservedPercentage - 1}%`, marginRight: '1%' }}
                    ></div>
                    <div
                        className='h-full bg-[#69a9be]'
                        style={{ width: `${availablePercentage - 1}%`, marginRight: '1%' }}
                    ></div>
                    <div
                        className='h-full bg-[#97cfe2] rounded-r-lg'
                        style={{ width: `${notReadyPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-2 bg-[#2562eb] h-full rounded-lg'></div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Occupied</span>
                        <span className='font-semibold text-lg'>286</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-2 bg-[#33b8e3] h-full rounded-lg'></div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Reserved</span>
                        <span className='font-semibold text-lg'>87</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-2 bg-[#69a9be] h-full rounded-lg'></div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Available</span>
                        <span className='font-semibold text-lg'>32</span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-2 bg-[#84d4ee] h-full rounded-lg'></div>
                    <div className='flex flex-col'>
                        <span className='text-gray-400'>Not Ready</span>
                        <span className='font-semibold text-lg'>13</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
