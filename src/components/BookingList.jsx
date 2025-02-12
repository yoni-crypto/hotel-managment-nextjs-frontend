import React from 'react'
import Image from 'next/image'
import { bookingData } from '../lib/data.js'

const BookingList = () => {
    return (
        <div className=' mt-4 bg-white p-4 rounded-xl'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='hidden md:block'>Booking List</h1>
                <div className=' ml-auto flex flex-row items-center gap-4'>
                    <div className=' flex flex-row items-center justify-center gap-2 bg-blue-100 px-2 rounded-3xl'>
                        <Image src="/search.png" alt="" width={20} height={20} />
                        <input type="text" placeholder='Search guest,status,etc' className='bg-transparent outline-none p-2 px-2  text-gray-400 text-sm' />
                    </div>
                    <select name="" id="" className='bg-[#2563eb] text-white p-2 rounded-lg outline-none text-sm'>
                        <option value="">All Status</option>
                        <option value="">Pending</option>
                        <option value="Checked-in">Checked-in</option>
                    </select>
                </div>
            </div>
            <table className="w-full rounded-lg mt-4">
                <thead className="bg-[#f4f3ff] rounded-xl p-2 ">
                    <tr>
                        <th className=" px-4 py-3 text-left text-sm">Booking ID</th>
                        <th className=" px-4 py-3 text-left text-sm">Guest Name</th>
                        <th className="hidden md:table-cell px-4 py-3 text-left text-sm">Room Type</th>
                        <th className="hidden md:table-cell px-4 py-3 text-left text-sm">Room Number</th>
                        <th className="hidden lg:table-cell px-4 py-3 text-left text-sm ">Duration</th>
                        <th className="hidden xl:table-cell px-4 py-3 text-left text-sm">Check-In & Check-Out</th>
                        <th className=" px-4 py-3 text-left text-sm">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.length === 0 ?
                        <tr className='py-8  border-b border-gray-200'>
                            <td className=" px-4 py-4 text-sm" colSpan={8}>No Bookings</td>
                        </tr> :
                        <>
                            {bookingData.map((booking, index) => (
                                <tr key={index} className='border-b border-gray-200'>
                                    <td className="px-4 py-4 text-sm text-gray-600">{booking.bookingId}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{booking.guestName}</td>
                                    <td className="hidden md:table-cell px-4 py-4 text-sm text-gray-600">{booking.roomType}</td>
                                    <td className="hidden md:table-cell px-4 py-4 text-sm text-gray-600">{booking.roomNumber}</td>
                                    <td className="hidden lg:table-cell px-4 py-4 text-sm text-gray-600">{booking.duration}</td>
                                    <td className="hidden xl:table-cell px-4 py-4 text-sm text-gray-600">{booking.checkIn} - {booking.checkOut}</td>
                                    <td className=" px-2 my-4 text-sm text-gray-600 font-semibold">
                                        <span className={`px-2 py-1 rounded-md  ${booking.status === "Checked-in" ? "bg-green-500 text-white text-xs 2xl:text-sm" : "text-blue-500 text-xs 2xl:text-sm"}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </>}
                </tbody>
            </table>
            <div className='flex flex-row items-center justify-between mt-4 px-10'>
                <Image src="/previous.png" alt="" width={30} height={30} className='cursor-pointer'/>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <span className='px-2 bg-blue-100 rounded-full cursor-pointer'>1</span>
                    <span className='cursor-pointer'>2</span>
                    <span className='cursor-pointer'>3</span>
                    <span className=''>...</span>
                    <span className='cursor-pointer'>10</span>
                </div>
                <Image src="/next.png" alt="" width={30} height={30} className='cursor-pointer'/>

            </div>


        </div>
    )
}

export default BookingList
