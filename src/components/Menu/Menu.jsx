import React, { useState } from 'react';
import { AiTwotoneBank } from 'react-icons/ai';
import { BiHotel } from 'react-icons/bi';
import { BsBank, BsCaretRightSquare } from 'react-icons/bs';
import { FaCarAlt } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = (props) => {

    const { hide } = props

    const [anniverSary, setAnniverSary] = useState(false)
    const [birthdays, setBirthdays] = useState(false)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className={`bg-white w-full ${!hide && 'shadow-lg'} menu hidden lg:block`}>
            <ul className="flex items-center gap-[2rem] lg:gap-[4.3rem] text-[1.4rem] relative w-full justify-center whitespace-nowrap">
                <li className="" onMouseMove={() => setAnniverSary(true)} onMouseOut={() => setAnniverSary(false)} id="anniverSary">
                    <Link to={`/list/contractors`}>
                        <div className={`gap-[0.5rem] relative group ${anniverSary && 'border-b-2'} border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer`}>
                            <span className='text-blue-600 text-[1.6rem] mb-[0.3rem]'>
                                {/* <img src="/Images/Menu/menu_1.png" alt="" className='h-full w-full object-contain' /> */}
                                <AiTwotoneBank />
                            </span>
                            <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Contractors</h2>
                        </div>
                    </Link>
                </li>
                <li className="" onMouseMove={() => setBirthdays(true)} onMouseOut={() => setBirthdays(false)} id="birthdays">
                    <Link to="/vendor-form">
                        <div className={`gap-[0.5rem] group ${birthdays && 'border-b-2'} border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer`}>
                            <span className='text-pink-500 text-[1.6rem] mb-[0.3rem]'>
                                {/* <img src="/Images/Menu/menu_2.png" alt="" className='h-full w-full object-contain' /> */}
                                <BiHotel />
                            </span>
                            <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Rooms</h2>
                        </div>
                    </Link>
                </li>
                <li className='gap-[0.5rem] group hover:border-b-2 border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer'>
                    <span className='text-green-600 text-[1.6rem] mb-[0.3rem]'>
                        {/* <img src="/Images/Menu/bank.png" alt="" className='h-full w-full object-contain' /> */}
                        <BsBank />
                    </span>
                    <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Bank & Finance</h2>
                </li>
                <li className='gap-[0.5rem] group hover:border-b-2 border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer'>
                    <span className='text-orange-600 text-[1.6rem] mb-[0.3rem]'>
                        {/* <img src="/Images/Menu/house.png" alt="" className='h-full w-full object-contain' /> */}
                        <BsCaretRightSquare />
                    </span>
                    <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">House Keeping</h2>
                </li>
                <li className='gap-[0.5rem] group hover:border-b-2 border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer'>
                    <span className='text-[hotpink] text-[1.6rem] mb-[0.3rem]'>
                        {/* <img src="/Images/Menu/menu_5.png" alt="" className='h-full w-full object-contain' /> */}
                        <FaCarAlt />
                    </span>
                    <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Properties</h2>
                </li>
                <li className='gap-[0.5rem] group hover:border-b-2 border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer'>
                    <span className='text-lime-600 text-[1.6rem] mb-[0.3rem]'>
                        {/* <img src="/Images/Menu/menu_8.png" alt="" className='h-full w-full object-contain' /> */}
                        <MdOutlineMarkEmailUnread />
                    </span>
                    <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Affiliate Marketing</h2>
                </li>
                <li className='gap-[0.5rem] group hover:border-b-2 border-[#1E3D81] flex items-center h-[5.1rem] cursor-pointer'>
                    <span className='text-teal-600 text-[1.6rem] mb-[0.3rem]'>
                        {/* <img src="/Images/Menu/menu_7.png" alt="" className='h-full w-full object-contain' /> */}
                        <HiOutlineBookOpen />
                    </span>
                    <h2 className="group-hover:text-[#1E3D81] text-[1.5rem] font-medium">Education</h2>
                </li>
            </ul>
        </div>
    )
}

export default Menu