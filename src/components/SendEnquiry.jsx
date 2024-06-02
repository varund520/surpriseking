import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import { TbMessage2 } from 'react-icons/tb'

const SendEnquiry = (props) => {

    const { setOpenEnquiry } = props

    return (
        <div className='bg-black bg-opacity-40 backdrop-blur-[1px] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[11]'>
            <div className='relative bg-white max-w-fit p-12 flex gap-[2rem] items-center rounded-[1.2rem]'>
                {/* <div className='relative hidden md:block'>
            <img loading='lazy' src="/Images/ListPage/Form__bg.webp" alt="" className='max-h-[50rem] scale-x-[-1]' />
            <div className='absolute bottom-[0.8rem] left-[0.4rem] flex items-center gap-[1.2rem] child:bg-black child:p-[0.8rem] child:rounded-[0.8rem] child:bg-opacity-50 text-white text-[1.6rem]'>
                <div>
                    <h2>Happy Customers</h2>
                    <span className='font-medium'>10,000+ in Pen India</span>
                </div>
                <div>
                    <h2>Regular Searches</h2>
                    <span className='font-medium'>5000+ New Categories</span>
                </div>
            </div>
        </div> */}
                <div className='flex flex-col gap-[2rem] items-center'>
                    <div className='flex flex-col items-center space-y-[5px]'>
                        <h2 className='text-[2.5rem] md:text-[1.8rem] font-medium'>Send Enquiry</h2>
                        <span className='text-[2rem] md:text-[1.6rem]'>Please fill your basic few detail</span>
                    </div>
                    <div className='child:flex child:flex-col flex flex-col gap-[1.6rem] w-full md:px-[2rem]'>
                        <div>
                            {/* <h2 className='text-gray-500 font-medium text-[2rem] md:text-[1.4rem]'>Full Name</h2> */}
                            <div className='flex items-center gap-[1.2rem] text-[1.6rem] h-[40px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                <FaRegUser className='text-gray-500 text-[16px]' />
                                <input type="text" placeholder='Full Name' className='pl-[2px] text-[2rem] md:text-[1.4rem] border-slate-300 h-full outline-none w-full placeholder:text-[2rem] md:placeholder:text-[1.4rem] bg-transparent' />
                            </div>
                        </div>
                        <div>
                            {/* <h2 className='text-gray-500 font-medium text-[2rem] md:text-[1.4rem]'>Contact Number</h2> */}
                            <div className='flex items-center gap-[1.2rem] text-[1.6rem] h-[40px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                <FiSmartphone className='text-gray-500 text-[16px]' />
                                <input type="text" placeholder='Contact Number' className='pl-[2px] text-[2rem] md:text-[1.4rem] border-slate-300 h-full outline-none w-full placeholder:text-[2rem] md:placeholder:text-[1.4rem] bg-transparent ' />
                            </div>
                        </div>
                        <div className='relative'>
                            {/* <h2 className='text-gray-500 font-medium text-[2rem] md:text-[1.4rem]'>Message</h2> */}
                            <TbMessage2 className='absolute top-[13px] md:top-[3.6rem] left-[1.2rem] text-gray-500 text-[16px] md:text-[1.6rem]' />
                            <textarea name="" id="" cols="30" rows="4" placeholder="Enter your message" className='mt-[0.6rem] px-[1.2rem] pl-[35px] rounded-[0.8rem] py-[0.8rem] bg-gray-100 border-none outline-none placeholder:text-[2rem] md:placeholder:text-[1.4rem] text-[2rem] md:text-[1.6rem]'></textarea>
                        </div>
                    </div>
                    <button className='mt-[10px] btn w-full p-[1rem] bg-[#2E3F6E] rounded-[0.6rem] text-[2rem] md:text-[1.6rem]'>Enquiry Now</button>
                </div>
                <button className='absolute top-[-5px] text-[14px] right-[-5px] bg-slate-200 rounded-full p-[0.8rem]' onClick={() => setOpenEnquiry(false)}><MdOutlineClose /></button>
            </div>
        </div>
    )
}

export default SendEnquiry