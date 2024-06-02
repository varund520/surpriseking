import React from 'react'
import { InQueryData } from '../data/data'

// currently not in use
const InquirySection = () => {
    return (
        <div>
            <div className='flex items-center justify-center mx-5 my-10'>
                <div className='flex-[0.2] flex flex-col items-center justify-center bg-[#102A44] p-[2rem] rounded-xl h-[400px]'>
                    <div className='w-52 space-y-3'>
                        <h1 className='text-3xl font-medium text-white'>Bring nature into your home</h1>
                        <p className='text-[#C1BFBF]'>Every day of your life is a special occasion.</p>
                        <button className='px-[2rem] py-[0.8rem] rounded-full text-[1.4rem] font-medium bg-white'>Book Now</button>
                    </div>
                </div>
                <div className='flex-[0.8]'>
                    <div className='flex items-center justify-around child:h-[400px] child:w-[300px]'>
                        {InQueryData.map((item, i) =>
                            <div key={i} className='relative child:rounded-3xl'>
                                <div className='absolute top-10 left-5 bg-white flex flex-col items-center justify-around gap-[2rem] p-[1.2rem]'>
                                    <img src={item.Img} alt="" className='w-[25.6rem] h-32 object-cover rounded-3xl' />
                                    <p className='text-center text-[1.4rem] text-[#8F8F8F]'>{item.desc}</p>
                                    <span className='text-[1.4rem]'>1000 Views</span>
                                </div>
                                <div className='absolute top-28 bg-[#022279] flex flex-col text-white justify-end items-center w-[318px] h-[200px] z-[-1] pb-[0.8rem]'>
                                    <p>Request A Quote</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InquirySection