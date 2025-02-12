"use client"
import React from 'react'
import Image from 'next/image'
import { rooms } from '@/lib/data'
import { useState,useEffect } from 'react'

const RoomList = () => {
    const [selectedRoom, setSelectedRoom] = useState(rooms[0])
    const [mainImage, setMainImage] = useState(selectedRoom.images[0])

    useEffect(()=>{
        setMainImage(selectedRoom.images[0])
    },[selectedRoom])
    return (
        <div className='bg-white rounded-xl p-4 w-full flex flex-row items-center gap-4'>
            <div   className='w-full xl:w-[55%] h-[720px] overflow-y-scroll custom-scrollbar p-2'>
                {rooms.map((room, index) => (
                    <div key={index} onClick={()=>setSelectedRoom(room)}   className={`cursor-pointer active:border-green-500 even:bg-[#f4f3ff] border border-gray-200 mb-2 rounded-2xl p-2 flex flex-row justify-start gap-6 ${
                        selectedRoom.name === room.name ? "border-green-500 border-2" : ""
                    }`}>
                        <div className=" self-start w-[250px]">
                            <Image src={room.images[0]} alt="" width={150} height={200} className="rounded-xl object-cover w-fit h-[180px]" />
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <div className="flex flex-row items-center justify-between w-full">
                                <div>
                                    <h2 className="text-xl font-bold">{room.name}</h2>
                                    <div className="flex flex-row items-center justify-start gap-4 mt-2">
                                        <div className="flex flex-row gap-1 items-center">
                                            <Image src="/area.png" alt="" width={16} height={16} />
                                            <span className="font-semibold text-sm text-gray-600">{room.size}</span>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <Image src="/bed.png" alt="" width={16} height={16} />
                                            <span className="font-semibold text-sm text-gray-600">{room.bed}</span>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <Image src="/2person.png" alt="" width={16} height={16} />
                                            <span className="font-semibold text-sm text-gray-600">{room.guests}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className={room.status === "Occupied" ? "text-[#2563eb] bg-blue-50 p-1 px-2 font-medium rounded-lg text-sm" : "text-green-500 bg-green-50 p-1 px-2 font-medium rounded-lg text-sm"}>{room.status}</span>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">{room.description}</span>
                            <div className="flex flex-row items-center justify-between">
                                <div className='text-sm text-gray-500'>Availability : <span className='text-sm font-semibold text-gray-800'>/{rooms.length} Rooms</span></div>
                                <div className="text-sm text-gray-400">
                                    <span className="font-semibold text-lg text-gray-900">{room.price}</span>/night
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className='hidden xl:block w-[45%] bg-[#f3f3f3] p-4 h-[720px] overflow-y-scroll custom-scrollbar rounded-2xl '>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-gray-700 font-semibold text-lg'>Room Detail</span>
                    <button className='bg-[#2563eb] p-2 px-4 text-white rounded-lg'>Edit</button>
                </div>
                <div className=''>
                    <div className=''>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <span className='text-2xl font-bold'>{selectedRoom.name}</span>
                            <span className={selectedRoom.status === "Occupied" ? "text-[#2563eb] bg-blue-50  px-2 font-medium text-sm rounded-lg" : "text-green-500 bg-green-50 text-sm px-2 font-medium rounded-lg"}>{selectedRoom.status}</span>
                        </div>
                        <span className='text-gray-900'><span className='text-gray-500 text-sm'>Occupied:</span> <span className='text-sm font-semibold text-gray-800'>/{rooms.length} Rooms</span></span>
                    </div>
                    <div className='mt-4'>
                        <Image src={mainImage} alt='' width={500} height={200} className='w-full h-[400px] rounded-xl' />
                        <div className='flex flex-row gap-4 rounded-lg overflow-x-scroll custom-scrollbar '>
                            {selectedRoom.images.map((image, index) => (
                                <Image key={index} onClick={() => setMainImage(selectedRoom.images[index])} src={image} alt='' width={200} height={200} className='h-[100px] max-w-[160px] mt-4 rounded-xl' />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-4 mt-2">
                        <div className="flex flex-row gap-1 items-center">
                            <Image src="/area.png" alt="" width={16} height={16} />
                            <span className="font-semibold text-sm text-gray-600">{selectedRoom.size}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <Image src="/bed.png" alt="" width={16} height={16} />
                            <span className="font-semibold text-sm text-gray-600">{selectedRoom.bed}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <Image src="/2person.png" alt="" width={16} height={16} />
                            <span className="font-semibold text-sm text-gray-600">{selectedRoom.guests}</span>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <span className='text-sm text-gray-500 my-4'>{selectedRoom.description}</span>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-lg font-medium text-gray-900'>Features</h2>
                        <div className='grid grid-cols-2 items-center justify-start mt-4'>
                            {selectedRoom.features.map((feature, index) => (
                                <div key={index} className='flex flex-row gap-4 mb-2 items-center justify-start'>
                                    <Image src="/tick.png" alt='' width={20} height={20} />
                                    <span className='text-gray-700'>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomList
