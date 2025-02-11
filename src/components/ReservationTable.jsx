import Image from 'next/image'
import React from 'react'
import { reservationList } from '@/lib/data'

const ReservationTable = () => {
    return (
        <div className='w-full bg-white rounded-xl mt-6 p-4'>
            <table className='w-full rounded-xl'>
                <thead className='bg-[#f4f3ff]'>
                    <tr>
                    <th className='text-left p-3 text-sm ' >Guest</th>
                    <th className='text-left p-3 text-sm'>Room</th>
                    <th className='text-left p-3 text-sm'>Request</th>
                    <th className='text-left p-3 text-sm'>Duration</th>
                    <th className='text-left p-3 text-sm'>Check-In/Out</th>
                    <th className='text-left p-3 text-sm'>Status</th>
                    <th className='text-left p-3 text-sm' colSpan={2}>Action</th>
                    </tr>
                </thead>

                {reservationList.map((reservation, index) => (
                    <tbody key={index} className='border-b border-gray-200'>
                        <tr>
                        <td className='p-2 font-sm text-gray-600'>
                            <div className='flex flex-col'>
                                <span className='text-md font-medium text-gray-800'>{reservation.guest}</span>
                                <span className='text-xs text-gray-500'>{reservation.reservation_id}</span>
                            </div>
                        </td>
                        <td className='p-2 text-sm text-gray-600'>{reservation.room} </td>
                        <td className='p-2 text-sm text-gray-600'>{reservation.request}</td>
                        <td className='p-2 text-sm text-gray-600'>{reservation.duration}</td>
                        <td className='p-2 text-sm text-gray-600'>{reservation.check_in} - {reservation.check_out}</td>
                        <td className='p-2 text-sm text-gray-600'><span className={reservation.status === "Confirmed" ? 'bg-green-500 text-white px-2 rounded-md p-1' : "bg-blue-500 text-white px-2 p-1 rounded-md"}>{reservation.status}</span></td>
                        <td className='p-2 text-sm text-gray-600 flex flex-row items-center justify-start gap-4'>
                            <Image src="/view.png" alt='' width={20} height={20} className='cursor-pointer'/>
                            <Image src="/edit.png" alt='' width={20} height={20} className='cursor-pointer'/>
                        </td>
                        <td className='p-2 text-sm text-gray-600'>
                            <div className='flex flex-row gap-4'>
                                {reservation.status === "Pending" ?
                                    <span className='bg-green-200 font-semibold text-green-500 px-2 rounded-lg cursor-pointer'>Confirm</span> :
                                    <span className='bg-pink-200 font-semibold text-red-500 px-2 rounded-lg cursor-pointer'>Cancel</span>
                                }
                            </div>
                        </td>
                        </tr>
                    </tbody>
                ))}

            </table>
            <div className='flex flex-row items-center justify-between mt-4 px-10'>
                <Image src="/previous.png" alt="" width={30} height={30} className='cursor-pointer' />
                <div className='flex flex-row items-center justify-center gap-2'>
                    <span className='px-2 bg-blue-100 rounded-full cursor-pointer'>1</span>
                    <span className='cursor-pointer'>2</span>
                    <span className='cursor-pointer'>3</span>
                    <span className=''>...</span>
                    <span className='cursor-pointer'>10</span>
                </div>
                <Image src="/next.png" alt="" width={30} height={30} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default ReservationTable
