import Image from 'next/image'
import React from 'react'
import ReservationTable from '@/components/ReservationTable'

const ReservationPage = () => {
  return (
    <div className='bg-[#f3f3f3] p-6 w-full h-screen'>
        <div className=' flex flex-row items-center justify-between '>
            <h1 className='hidden md:block text-xl font-semibold'>Reservation List</h1>
            <div className='ml-auto flex flex-row items-center gap-4'>
                <div className='flex flex-row items-center justify-center gap-2 bg-white px-2 rounded-3xl'>
                    <Image src="/search.png" alt='' width={18} height={18}/>
                    <input type='text' placeholder='Search guest,status ,etc' className='bg-transparent outline-none p-2 text-gray-500 text-sm'/>
                </div>
                <select name="" id="" className='p-2 rounded-lg text-sm outline-none'>
                    <option value="">All Status</option>
                    <option value="">Confirmed</option>
                    <option value="">Pending</option>
                </select>
                <button className='bg-[#2563eb] rounded-lg text-white text-sm p-2 flex flex-row items-center justify-center gap-4'>
                    <Image src="/whiteadd.png" alt='' width={20} height={20}/>
                    <span>Add Booking</span>
                </button>
            </div>
        </div>
        <ReservationTable/>
    </div>
  )
}

export default ReservationPage
