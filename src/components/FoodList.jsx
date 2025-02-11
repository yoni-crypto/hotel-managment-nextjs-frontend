"use client"
import { foods, orders } from '@/lib/data'
import Image from 'next/image'
import React, { useState } from 'react'

const FoodList = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    const [orderType, setOrderType] = useState('Active')

    return (
        <div className='w-full flex flex-row items-center gap-4 '>
            <div className='w-[65%] bg-white rounded-2xl p-4'>
                <div className='flex flex-row gap-2 justify-between '>
                    <div onClick={() => setActiveCategory('All')} className={activeCategory === "All" ? '  border-2 cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : ' border-2 cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/allcat.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>All</span>
                    </div>
                    <div onClick={() => setActiveCategory('Pizza')} className={activeCategory === "Pizza" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/pizza.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Pizza</span>
                    </div>
                    <div onClick={() => setActiveCategory('Drinks')} className={activeCategory === "Drinks" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/drink.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Drinks</span>
                    </div>
                    <div onClick={() => setActiveCategory('Sushi')} className={activeCategory === "Sushi" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/sushi.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Sushi</span>
                    </div>
                    <div onClick={() => setActiveCategory('Burger')} className={activeCategory === "Burger" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/burger.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Burger</span>
                    </div>
                    <div onClick={() => setActiveCategory('Desert')} className={activeCategory === "Desert" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/dessert.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Dessert</span>
                    </div>
                    <div onClick={() => setActiveCategory('Pasta')} className={activeCategory === "Pasta" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/pasta.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Pasta</span>
                    </div>
                    <div onClick={() => setActiveCategory('Momos')} className={activeCategory === "Momos" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/momos.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Momos</span>
                    </div>
                    <div onClick={() => setActiveCategory('Tacos')} className={activeCategory === "Tacos" ? 'border-2  cursor-pointer p-2 px-4 border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2 px-4  rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        <Image src="/tacos.png" alt='' width={20} height={20} />
                        <span className='text-sm font-medium'>Tacos</span>
                    </div>
                    <div onClick={() => setActiveCategory('')} className={activeCategory === "" ? 'border-2  cursor-pointer p-2  border-blue-500 rounded-lg flex flex-col gap-2 items-center justify-center' : 'border-2  cursor-pointer border-gray-100 p-2   rounded-lg flex flex-col gap-2 items-center justify-center'}>
                        {/* <Image src="/add.png" alt='' width={20} height={20}/> */}
                        <span className='text-sm font-medium'>ViewList</span>
                    </div>
                </div>
                <div className='mt-6 bg-white h-[620px] overflow-y-scroll custom-scrollbar'>
                    <div className='grid grid-cols-3 items-center justify-between   '>
                        {foods.map((food, index) => (
                            <div key={index} className='bg-[#f4f3ff] m-4 p-4 rounded-lg w-200 flex flex-col gap-3'>
                                <div className='w-full h-[150px] bg-white '>
                                    <Image src={food.image} alt='' width={200} height={100} className='h-[150px] object-cover w-full rounded-lg' />
                                </div>
                                <div className='flex flex-row items-center justify-between'>
                                    <span>{food.name}</span>
                                    <div className='flex flex-row items-center gap-2'>
                                        <Image src="/star.png" alt='' width={20} height={20} />
                                        <span>{food.rating}</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-between'>
                                    <div className='flex flex-col gap-1 '>
                                        <span className='text-sm text-gray-400'>price</span>
                                        <span className='text-sm font-semibold'>${food.price}</span>
                                    </div>
                                    <Image src="/edit2.png" alt='' width={30} height={30} className='cursor-pointer' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-[35%] bg-white rounded-2xl p-4 '>
                <h1 className='text-lg font-semibold'>Orders</h1>
                <div className='flex flex-row items-center gap-4 mt-4'>
                    <button onClick={() => setOrderType('Active')} className={orderType === "Active" ? "bg-[#2563eb] text-white p-2 rounded-lg text-sm" : " text-sm p-2 border border-[#2563eb] text-[#2563eb] rounded-lg"}>Active</button>
                    <button onClick={() => setOrderType('Past')} className={orderType === "Past" ? "bg-[#2563eb] text-white p-2 rounded-lg text-sm" : "text-sm p-2 border border-[#2563eb] text-[#2563eb] rounded-lg"}>Past</button>
                    <button onClick={() => setOrderType('Cancled')} className={orderType === "Cancled" ? "bg-[#2563eb] text-white p-2 rounded-lg text-sm" : "text-sm p-2 border border-[#2563eb] text-[#2563eb] rounded-lg"}>Cancled</button>
                </div>
                <div className='w-full h-[610px] overflow-y-scroll custom-scrollbar mt-4'>
                    {orders.map((order, index) => (
                        <div key={index} className='mb-4 w-full'>
                            <div className='flex flex-row items-center gap-6 w-full'>
                                <Image src={order.image} alt='' width={144} height={144} className='h-[100px] w-[100px] object-cover rounded-lg ' />
                                <div className='flex flex-col w-full pr-4'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <span className='text-gray-600 text-sm'>#{order.id}</span>
                                        <span className='text-sm font-bold text-gray-800'>${order.price}</span>
                                    </div>
                                    <span className='text-lg font-semibold'>{order.name} ({order.quantity})</span>
                                    <span className='flex flex-row items-center gap-2 mt-4 text-[#2563eb] text-sm'>
                                        <Image src="/location.png" alt='' width={20} height={20}/>
                                        {order.address}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodList
