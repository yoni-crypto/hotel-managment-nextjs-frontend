"use client"
import Image from 'next/image'
import { tasks } from '../lib/data.js';

const Tasks = () => {
    return (
        <div className='p-4 w-full' >
            <div className='flex flex-row items-center justify-between'>
                <h1 className='font-semibold text-lg text-gray-600'>Tasks</h1>
                <Image src='/blueadd.png' alt='tasks' width={30} height={30} className='cursor-pointer' />
            </div>
            {tasks.map((task, index) => (
                <div key={index} className='flex flex-col gap-2 odd:bg-pink-100 even:bg-blue-100 rounded-xl my-2'>
                    <div className='p-2  px-4'>
                        <div className='mt-2 flex flex-row items-center justify-between g'>
                            <h1 className=' text-sm text-gray-600'>{task.date}</h1>
                            <div className='flex flex-row items-center justify-center gap-2'>
                                <span className='bg-white text-gray-500 text-sm p-1 px-2 rounded-md'>{task.status}</span>
                                <Image src="/threedotb.png" alt='' width={20} height={20} className='cursor-pointer'/>
                            </div>
                        </div>
                        <span className='text-sm text-gray-600'>{task.title} {task.time}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tasks
