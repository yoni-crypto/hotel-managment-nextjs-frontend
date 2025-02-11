import React from 'react'
import Image from 'next/image'
import FoodList from '@/components/FoodList'

const RestaurantPage = () => {
  return (
    <div className='w-full h-full bg-[#f3f3f3] p-4 py-6'>
      <div className=' flex flex-row items-center justify-between '>
        <h1 className='text-xl font-semibold'>Restaurant</h1>
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row items-center justify-center gap-2 bg-white px-2 rounded-3xl'>
            <Image src="/search.png" alt='' width={18} height={18} />
            <input type='text' placeholder='Search Food' className='bg-transparent outline-none p-2 text-gray-500 text-sm' />
          </div>
          <select name="" id="" className='p-2 rounded-lg text-sm outline-none'>
            <option value="">All Type</option>
            <option value="">Available</option>
            <option value="">Occupied</option>
          </select>
          <button className='bg-[#2563eb] rounded-lg text-white text-sm p-2 flex flex-row items-center justify-center gap-4'>
            <Image src="/whiteadd.png" alt='' width={20} height={20} />
            <span>Add Menu</span>
          </button>
        </div>
      </div>
      <div className=' mt-4 '>
        <FoodList/>
      </div>
    </div>
  )
}

export default RestaurantPage
