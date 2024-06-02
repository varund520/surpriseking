import React from 'react'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { TbMessage2 } from 'react-icons/tb';

const EnquiryForm = () => {
    return (
        <div className='z-10 hidden lg:block bg-white shadow-2xl border rounded-[0.8rem] overflow-hidden my-[1.2rem] sticky top-[8rem] pb-[2rem]'>
            <div className='flex flex-col items-center gap-[1.6rem]'>
                <h2 className='font-medium text-[1.8rem] w-full text-center bg-[#5f2fad] p-[1.2rem] text-white'>Quick Enquiry</h2>
                <div className='child:flex child:flex-col flex flex-col gap-[1.6rem] w-full px-[2rem] text-[1.6rem]'>
                    <div className='relative'>
                        <AiOutlineUser className='absolute top-[1.2rem] left-[1.2rem] text-blue-600' />
                        <input type="text" className='px-[1.2rem] py-[0.8rem] pl-[3.6rem] rounded-full bg-gray-100 placeholder:text-[1.4rem] border-none outline-none' placeholder='Enter Your Name' />
                    </div>
                    <div className='relative'>
                        <AiOutlineMail className='absolute top-3 left-3 text-blue-600' />
                        <input type="text" className='px-[1.2rem] py-[0.8rem] pl-[3.6rem] rounded-full bg-gray-100 placeholder:text-[1.4rem] border-none outline-none' placeholder='Enter a valid Email address' />
                    </div>
                    <div className='relative'>
                        <TbMessage2 className='absolute top-3 left-3 text-blue-600' />
                        <textarea name="" id="" cols="30" rows="5" placeholder="Enter your message" className='px-[1.2rem] pl-[3.6rem] rounded-[0.8rem] py-[0.8rem] bg-gray-100 border-none outline-none placeholder:text-[1.4rem]'></textarea>
                    </div>
                </div>
                <button className='btn bg-[#2e3f6e] text-[1.4rem] w-[17.6rem] h-[3.6rem]'>Submit Your Request</button>
            </div>
        </div>
    )
}

export default EnquiryForm