import Image from 'next/image'
import React from 'react'
import BookingChart from '@/components/BookingChart'
import AdminBar from '@/components/AdminBar'
import BookingList from '@/components/BookingList'
import Tasks from '@/components/Tasks'
import RecentActivities from '@/components/RecentActivities'

const DashboardPage = () => {
  return (
    <div className='p-4 bg-[#f3f4ff]'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='hidden md:block'>
          <span className='font-semibold text-gray-600'>Hey Yonas,</span>
          <p className='font-medium text-sm text-gray-400'>Great serviece leaves a lasting impression.</p>
        </div>
        <div className='flex flex-row items-center  gap-4 ml-auto '>
          <button className='flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-3xl bg-white'>
            <Image src="/share.png" alt='' width={14} height={14} />
            <span className='text-sm text-gray-600'>Share</span>
          </button>
          <button className='flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-3xl bg-white'>
            <Image src="/export.png" alt='' width={14} height={14} />
            <span className='text-sm text-gray-600'>Export</span>
          </button>
          <button className='flex flex-row items-center justify-center gap-2 p-2 px-4 rounded-3xl bg-[#2563eb]'>
            <Image src="/whiteadd.png" alt='' width={14} height={14} />
            <span className='text-sm text-white'>Custom Widgets</span>
          </button>
        </div>
      </div>
      {/* card */}
      <div className=' grid grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-4 flex-wrap mt-6 '>
        <div className='bg-gradient-to-r from-[#2563eb] to-purple-600 p-4 rounded-xl w-full flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm text-white'>New Bookings</span>
            <Image src="/threedotw.png" alt='' width={20} height={20} />
          </div>
          <span className='text-4xl font-bold text-white '>840</span>
          <div className=' flex flex-row gap-2 items-center justify-start mt-4'>
            <div className='bg-white rounded-3xl p-1 px-2 flex flex-row items-center justify-center gap-2'>
              <Image src="/increase.png" alt='' width={12} height={14} />
              <span className='text-green-500 text-xs'>8.70%</span>
            </div>
            <span className='text-white text-xs'>from past week</span>
          </div>
        </div>
        <div className='bg-white p-4 rounded-xl w-full flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm text-gray-500'>Check-In</span>
            <Image src="/threedotb.png" alt='' width={20} height={20} />
          </div>
          <span className='text-4xl font-bold text-gray-700 '>231</span>
          <div className=' flex flex-row gap-2 items-center justify-start mt-4'>
            <div className='bg-blue-500 rounded-3xl p-1 px-2 flex flex-row items-center justify-center gap-2'>
              <Image src="/whiteincrease.png" alt='' width={12} height={14} />
              <span className='text-white text-xs'>4.20%</span>
            </div>
            <span className='text-gray-400 text-xs'>from past week</span>
          </div>
        </div>
        <div className='bg-white p-4 rounded-xl w-full flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm text-gray-500'>Check-Out</span>
            <Image src="/threedotb.png" alt='' width={20} height={20} />
          </div>
          <span className='text-4xl font-bold text-gray-700 '>132</span>
          <div className=' flex flex-row gap-2 items-center justify-start mt-4'>
            <div className='bg-pink-300 rounded-3xl p-1 px-2 flex flex-row items-center justify-center gap-2'>
              <Image src="/whitedecrease.png" alt='' width={12} height={14} />
              <span className='text-black text-xs'>1.07%</span>
            </div>
            <span className='text-gray-400 text-xs'>from past week</span>
          </div>
        </div>
        <div className='bg-white p-4 rounded-xl w-full flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm text-gray-500'>Room Available</span>
            <Image src="/threedotb.png" alt='' width={20} height={20} />
          </div>
          <span className='text-4xl font-bold text-gray-700 '>32</span>
          <div className=' flex flex-row gap-2 items-center justify-start mt-4'>
            <div className='bg-pink-300 rounded-3xl p-1 px-2 flex flex-row items-center justify-center gap-2'>
              <Image src="/whitedecrease.png" alt='' width={12} height={14} />
              <span className='text-black text-xs'>2.87%</span>
            </div>
            <span className='text-gray-400 text-xs'>from past week</span>
          </div>
        </div>
        <div className='hidden  bg-white p-4 rounded-xl w-full md:flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-sm text-gray-500'>Total Revenue</span>
            <Image src="/threedotb.png" alt='' width={20} height={20} />
          </div>
          <span className='text-4xl font-bold text-gray-700 '>$123,980</span>
          <div className=' flex flex-row gap-2 items-center justify-start mt-4'>
            <div className='bg-blue-500 rounded-3xl p-1 px-2 flex flex-row items-center justify-center gap-2'>
              <Image src="/whiteincrease.png" alt='' width={12} height={14} />
              <span className='text-white text-xs'>5.70%</span>
            </div>
            <span className='text-gray-400 text-xs '>from past week</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='mt-4 w-full xl:w-[64%]'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-[55%] h-[320px] bg-white rounded-xl p-4'>
              <div className=' flex flex-row justify-between items-center'>
                <span className='font-semibold text-gray-600 text-lg'>Booking by Platform</span>
                <Image src="/threedotb.png" alt='' width={20} height={20} />
              </div>
              <div className='flex items-center justify-center h-full w-full'>
                <BookingChart />
              </div>
            </div>
            <div className='w-full md:w-[45%] bg-white p-4 rounded-xl'>
              <AdminBar />
            </div>
          </div>
          <div className='w-full bg-white rounded-xl'></div>
          <BookingList />
        </div>
        <div className='w-full md:flex md:gap-4 md:w-full xl:block xl:w-[35%]'>
          <div className='w-full rounded-xl bg-white mt-4 h-[400px]'>
            <Tasks />
          </div>
          <div className='w-full rounded-xl bg-white mt-4 h-[620px] '>
            <RecentActivities/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage
