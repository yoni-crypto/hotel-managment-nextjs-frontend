"use client"
import { messages } from '@/lib/data'
import Image from 'next/image'
import React, { useState } from 'react'

const MessagePage = () => {
  const [selectedChat, setSelectedChat] = useState(messages[0])

  return (
    <div className='w-full h-full bg-[#f3f3f3] p-4 py-6'>
      <div className=' flex flex-row items-center justify-between '>
        <h1 className='text-xl font-semibold'>Message</h1>
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row items-center justify-center gap-2 bg-white px-2 rounded-3xl'>
            <Image src="/search.png" alt='' width={18} height={18} />
            <input type='text' placeholder='Search Message' className='bg-transparent outline-none p-2 text-gray-500 text-sm' />
          </div>
        </div>
      </div>
      <div className='w-full mt-4 flex flex-row gap-4'>
        <div className='w-[30%] bg-white rounded-xl p-4 h-[750px] overflow-y-scroll custom-scrollbar'>
          <div className='w-full'>
            {messages.map((message, index) => (
              <div key={index} onClick={() => setSelectedChat(messages[index])} className={selectedChat.id === message.id ? 'flex flex-row items-center gap-4 w-full bg-blue-50 hover:bg-blue-50 cursor-pointer mb-2 p-2 rounded-lg' : 'flex flex-row items-center gap-4 w-full hover:bg-blue-50 cursor-pointer mb-2 p-2 rounded-lg'}>
                <Image src={message.avatar} alt='' width={80} height={80} className='rounded-full h-10 w-10' />
                <div className='w-full flex flex-col gap-2'>
                  <div className='flex flex-row items-center justify-between '>
                    <span className='text-sm font-bold'>{message.sender}</span>
                    <span className='text-sm text-gray-500'>{message.time}</span>
                  </div>
                  <span className='text-sm text-gray-400 flex flex-row items-center justify-between'>
                    {message.preview.length > 50 ? message.preview.slice(0, 50) + "..." : message.preview}
                    <span>{message.unread === true ? <span className='bg-red-500 text-white text-sm rounded-full  px-2'>1</span> : ""}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-white w-[70%] rounded-xl  h-[750px] flex flex-col'>
          <div className=' flex flex-row gap-2 p-2 rounded-t-xl items-center w-full bg-blue-100 z-50'>
            <Image src={selectedChat.avatar} alt='' width={100} height={100} className='h-10 w-10 rounded-full' />
            <div className='flex flex-col gap-1 '>
              <span className='text-sm font-bold'>{selectedChat.sender}</span>
              <span className='text-xs text-gray-500'>last seen recently</span>
            </div>
          </div>
          <div className=' w-full p-4 flex flex-col space-y-4 h-[700px] overflow-y-scroll customscrollbar'>
            {selectedChat.chat.map((chat, index) => (
              <div key={index} className={`flex items-center gap-3 ${chat.from === 'System' ? 'justify-end' : 'justify-start'}`}>
                {chat.from !== 'System' && (
                  <Image src={chat.avatar} alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                )}
                <div className=''>
                  <div className={`p-3 rounded-lg max-w-sm text-sm ${chat.from !== 'System' ? 'bg-blue-100 text-gray-800' : 'bg-[#5a8af1] text-white'}`}>
                    <span>{chat.text}</span>
                  </div>
                  <div className={`text-xs text-gray-500 ${chat.from === "System" ? "text-right" : "text-left"} mt-1`}>{chat.time}</div>
                </div>
                {chat.from === 'System' && (
                  <Image src={chat.avatar} alt='' width={200} height={40} className='w-10 h-10 rounded-full' />
                )}
              </div>
            ))}
          </div>
          <div className='p-4'>
            <div className='flex flex-row items-center justify-between gap-2 bg-blue-100 rounded-3xl p-2 px-4 w-full'>
              <input type='text' placeholder='Write a Message' className='bg-transparent w-[95%] outline-none text-sm text-gray-600 ' />
              <Image src="/send.png" alt='' width={30} height={30} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MessagePage
