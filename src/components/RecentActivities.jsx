import React from 'react'
import { recentActivities } from '../lib/data'
import Image from 'next/image'

const RecentActivities = () => {
    return (
        <div className='p-4 flex flex-col gap-2'>
            <div className='flex flex-row items-center justify-between mb-4'>
                <h1 className="text-lg font-semibold">Recent Activities ({recentActivities.length})</h1>
                <select className="bg-[#f4f3ff] p-2 rounded-md text-sm outline-none">
                    <option value="">Popular</option>
                    <option value="">Latest</option>
                </select>
            </div>

            <div className="max-h-[500px] overflow-y-auto  rounded-md shadow-sm custom-scrollbar">
                {recentActivities.map((activity, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center gap-4 p-3 ${index % 2 === 1 ? 'bg-white' : 'bg-blue-50'}`}
                    >
                        <Image src="/tick.png" alt="" width={24} height={24} />
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-500 text-xs">{activity.date}</span>
                            <span className="font-medium text-gray-700 text-sm">{activity.title} ({activity.time})</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivities
