import React, { useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import { FaEye, FaRegUser } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMessage2 } from 'react-icons/tb';
import { Link } from 'react-router-dom'
import SendEnquiry from './SendEnquiry';


const InfoBox = (props) => {
    const [openEnquiry, setOpenEnquiry] = useState(false)
    const { Img, mainTitle, smallTitle, hideEnquiryBtn, hideTags, bottomDesc, catyOne, catyTwo, catyThree, catyFour } = props?.item
    // const { image, name, smallTitle, hideEnquiryBtn, hideTags, bottomDesc, catyOne, catyTwo, catyThree, catyFour } = props?.item
    const location = window.location.pathname
    return (
        <div className='flex p-2 md:p-4 gap-4 md:gap-8 relative'>
            <div className='relative sm:h-fit'>
                <img loading='lazy' src={Img} alt="" className='h-full sm:h-auto max-w-[130px] sm:max-w-[200px] md:max-w-[240px] object-cover rounded-[0.6rem]' />
                <span className='absolute top-3 flex items-center justify-center left-3 text-black hover:scale-105 cursor-pointer text-[1.8rem] bg-white rounded-full h-[3.2rem] w-[3.2rem]'><BsHeart /></span>
                <img loading='lazy' src="/Images/verified.png" alt="" className='absolute bottom-3 right-3 h-[3.2rem] object-cover' />
            </div>
            <div className={`flex flex-col gap-6 justify-evenly`}>
                <div className={`flex flex-col gap-4 sm:gap-8 ${location === "/cart" && 'mr-[9.6rem]'}`}>
                    <div>
                        <h2 className='text-[2rem] md:text-[1.8rem] font-medium leading-[1.4]'>{mainTitle}</h2>
                        <span className="text-[1.6rem] md:text-[1.2rem] text-slate-500">{smallTitle}</span>
                    </div>
                    <div className='space-y-[1rem]'>
                        <div className='flex flex-col text-[1.2rem] gap-[0.4rem]'>
                            <div className='flex items-center gap-[0.6rem]'>
                                <span className='flex items-center bg-[#108605] text-white py-[0.1rem] px-[0.6rem] rounded-[0.5rem] gap-[0.6rem]'>
                                    <span className='text-[1.7rem] md:text-[1.4rem] font-medium'>4.5</span>
                                    <span className='flex text-yellow-500 font-medium items-center gap-[0.4rem] md:text-[1.4rem] text-[1.7rem]'>
                                        <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar className='text-white' />
                                    </span>
                                </span>
                                <span className='md:text-[1.4rem] text-[1.7rem] font-medium'>15 Ratings</span>
                            </div>
                            <span className='text-[1.4rem] text-green-600'>{bottomDesc}</span>
                        </div>
                    </div>
                    <div className={`${hideTags ? 'hidden' : 'flex'} items-center max-w-[26rem] md:max-w-fit md:flex-wrap overflow-x-auto gap-4 sm:gap-6 child:border child:rounded-full custom-scrollbar child:border-slate-300 child:px-[1.5rem] text-[1.6rem] md:text-[1.2rem] child:py-[0.3rem] child-hover:bg-slate-200 child:cursor-pointer`}>
                        <span>{catyOne}</span>
                        <span>{catyTwo}</span>
                        <span>{catyThree}</span>
                        <span>{catyFour}</span>
                        <span>{catyOne}</span>
                        <span>{catyTwo}</span>
                        <span>{catyThree}</span>
                        <span>{catyFour}</span>
                    </div>
                </div>
                {!(location === "/cart") &&
                    <div className='flex gap-[1rem] md:gap-[2rem] text-[1.8rem] md:text-[1.4rem] whitespace-nowrap'>
                        <Link to="/details" className='relative group'>
                            <button className='btn py-[0.5rem] px-[2rem] ring ring-slate-100'>View More</button>
                            <div className="absolute bottom-[-1rem] left-0 right-0 flex flex-col items-center transition-all duration-100 ease-in scale-0 group-hover:scale-100">
                                <span className="relative z-10 text-sm leading-none text-white px-[10px] py-[6px] rounded-[6px] whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
                                <div className="w-3 h-3 mt-[-2.5rem] rotate-45 bg-black"></div>
                            </div>
                        </Link>
                        <button className={`${hideEnquiryBtn && 'hidden'} btn bg-[#2E3F6E] py-[0.5rem] px-[2rem] ring ring-slate-100`} onClick={() => setOpenEnquiry(true)}>Send Enquiry</button>
                        <button className='btn py-[0.5rem] px-[2rem] bg-white text-black ring ring-slate-100 hidden md:flex items-center gap-[5px]'><RiWhatsappFill className='text-green-600 text-[16px]' />  Chat</button>
                    </div>
                }
            </div>

            <div className='hidden md:block absolute top-0 right-0 max-w-[80px]' style={{ transform: 'scale(-1, -1)' }}>
                <img src="/Images/sponsor_tag.png" alt="tag" />
            </div>

            <div className='hidden md:flex items-center gap-[6px] bg-gray-200 rounded-l-full p-[6px] absolute bottom-[2rem] right-0 max-w-[160px]'>
                <span className='bg-gray-700 rounded-full p-[4px]'>
                    <FaEye className='text-[18px] text-white animate-pulse' />
                </span>
                <span className='text-[12px] font-medium text-gray-800'>17 Profile views</span>
            </div>

            {openEnquiry && <SendEnquiry setOpenEnquiry={setOpenEnquiry} />}
        </div>
    )
}

export default InfoBox