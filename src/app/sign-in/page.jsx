"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
    }
    return (
        <div className='flex flex-row bg-white w-screen h-screen justify-between'>
            <div className='flex flex-col p-8 md:p-16 lg:p-24 2xl:px-48 gap-10 bg-[#f4f3ff] w-full md:w-[49%]  mb-8'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src="/hotel.png" alt='' width={36} height={36}  />
                    <div className='flex flex-col '>
                        <h1 className='font-bold text-lg xl:text-3xl'>OASIS</h1>
                        <p className='text-gray-400 text-sm'>HOTEL & BAR</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-lg lg:text-2xl font-bold text-gray-600'>Welcome Back to EstateVista!</h2>
                    <p className='text-sm text-gray-400 mt-1 '>Sign in your account</p>
                    <form onSubmit={onSubmit} className='flex flex-col gap-8 mt-8'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-gray-500 font-semibold text-sm'>Your Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 xl:w-4/5  p-2 rounded-3xl border-2 border-transparent   focus:border-[#2562eb] outline-none" required />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <label htmlFor="password" className='text-gray-500 font-semibold text-sm'>Password</label>
                            <input type="password" id='password' name='password' className='w-full px-4 xl:w-4/5 p-2 rounded-3xl border-2 border-transparent   focus:border-[#2562eb] outline-none' required />
                        </div>
                        <div className='flex flex-row items-center justify-between  w-full lg:w-4/5'>
                            <div className='flex flex-row gap-2'>
                                <input type="checkbox" id='remember' required />
                                <label htmlFor="remember" className='font-semibold text-sm lg:text-medium text-gray-500'>Remember me</label>
                            </div>
                            <div className=''>
                                <Link href="/forgot-password" className='font-semibold text-sm lg:font-medium text-[#2562eb]'>Forgot Password?</Link>
                            </div>
                        </div>
                        <button type='submit' className='iw-full lg:w-4/5 bg-[#2562eb] text-white rounded-3xl p-2 font-medium'>Log In</button>
                    </form>
                    <div className='flex flex-row mt-8 items-center justify-center w-full lg:w-4/5 gap-2'>
                        <hr className='w-[45%] border-1 border-gray-300' />Or <hr className='w-[45%] border-1 border-gray-300' />
                    </div>
                    <div className=' flex flex-col lg:flex-row items-center justify-between w-full lg:w-4/5 mt-4 gap-4'>
                        <button className='flex flex-row items-center justify-center p-2 gap-2 border rounded-3xl w-full'>
                            <Image src="/google.png" alt='' width={18} height={18} />
                            <span className='text-xs text-gray-400 '>Continue with Google</span>
                        </button>
                        <button className='flex flex-row items-center justify-center p-2 gap-2 border rounded-3xl w-full'>
                            <Image src="/apple.png" alt='' width={18} height={18} />
                            <span className='text-xs text-gray-400 '>Continue with Apple</span>
                        </button>
                    </div>
                    <span className='w-full lg:w-4/5 mt-8 text-gray-400 text-sm flex items-center justify-center'>Don't have any account? <Link href="/" className='text-[#2562eb]'>Sign up</Link></span>

                </div>
            </div>
            <div className="hidden md:block md:w-[49%] bg-white lg:w-[49%] h-screen">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-xl px-4"> 
                        <div className="flex flex-row gap-1 w-full xl:w-[500px]">
                            <Image
                                src="/ho1.avif"
                                alt=""
                                width={500}
                                height={500}
                                className="rounded-3xl w-3/5 md:w-1/2 lg:w-[60%] xl:w-[300px] h-auto"
                            />
                            <div className="flex flex-col gap-1 w-2/5 md:w-1/2 lg:w-[40%] xl:w-[200px]">
                                <Image
                                    src="/ho2.avif"
                                    alt=""
                                    width={248}
                                    height={125}
                                    className="rounded-3xl w-full h-auto"
                                />
                                <Image
                                    src="/ho3.avif"
                                    alt=""
                                    width={248}
                                    height={125}
                                    className="rounded-3xl w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row gap-1 mt-1 w-full h-20 xl:w-[500px]">
                            <Image
                                src="/ho4.avif"
                                alt=""
                                width={500}
                                height={20}
                                className="w-4/5 md:w-[70%] xl:w-[400px] rounded-3xl h-auto"
                            />
                            <Image
                                src="/ho5.avif"
                                alt=""
                                width={500}
                                height={20}
                                className="w-1/5 md:w-[30%] xl:w-[100px] rounded-3xl h-auto"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center mt-5 gap-5 px-4">
                            <span className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                                Find Your Perfect Stay and <br />Book with Confidence
                            </span>
                            <p className="text-center text-gray-500 text-sm md:text-base xl:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                Sunt at iste quis molestias quibusdam minus <br />
                                dolores id magnam deserunt.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
