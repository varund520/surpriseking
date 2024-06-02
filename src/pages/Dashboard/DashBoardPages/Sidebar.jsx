import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dashboardItem } from '../../../components/Header/data';

const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="flex-[0.23] max-h-fit h-full border shadow-lg sticky top-20">

            <div className='flex flex-col gap-1 items-center p-3'>
                <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" alt="" className='rounded-full object-cover h-[90px] w-[90px] border-2 border-white outline-4 outline-[#00000012]' />
                <span className='text-[18px] font-medium'>John Smith</span>
                <span className='text-[14px] text-[#68616D]'>Member Since Sep 2021</span>
            </div>

            <div className='flex flex-col child:flex child:items-center child:gap-[1.2rem] child:p-[1.2rem] child:rounded-sm bg-[#F7F7FF] border border-[#edecf8] p-[0.8rem] rounded-[0.6rem] child-hover:bg-gray-100  child:cursor-pointer h-fulllist-none'>
                {dashboardItem.map((item, i) =>
                    <Link key={i} to={`/account/${item.pathName}`} className='text-[1.6rem]' onClick={() => setShowMenu(false)}>
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                )}
                {/* <Link to='/account/dashboard'>
                    <AiOutlineDashboard />
                    <span className='text-[1.4rem]'>Dashboard</span>
                </Link>
                <Link to='/account/profile'>
                    <FaRegUser />
                    <span className='text-[1.4rem]'>Profile</span>
                </Link>
                <Link to='/account/bookings'>
                    <CgList />
                    <span className='text-[1.4rem]'>My Bookings</span>
                </Link>
                <Link to='/account/wishlist'>
                    <BsCardChecklist />
                    <span className='text-[1.4rem]'>My Wishlist</span>
                </Link>
                <Link to='/account/change-password'>
                    <BiSupport />
                    <span className='text-[1.4rem]'>Change Password</span>
                </Link>
                <div className=''>
                    <FiLogOut />
                    <span className='text-[1.4rem]'>Logout</span>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar