import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between p-4 w-full '>
            <div className='hidden md:block w-2/3'>
                <div className='flex flex-row items-center justify-between gap-2 p-3 bg-[#f4f3ff] w-[80%]  rounded-3xl'>
                    <Image src='/search.png' alt='' width={20} height={20} className='' />
                    <input type="text" placeholder='Search anything' className='text-gray-500 text-sm px-2 w-full rounded-3xl bg-transparent outline-none' />
                </div>
            </div>
            <div className='w-1/3 flex justify-end ml-auto'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <div className='bg-gray-200 rounded-full p-1 flex items-center justify-center'>
                        <Image src="/notification.png" alt='' width={25} height={25} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='flex justify-center items-center '>
                            <Image src="/user.png" alt='' width={40} height={40} />
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-gray-600 font-xs '>Yonas</span>
                            <span className='text-gray-300 text-xs'>Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
