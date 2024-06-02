import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { CgList } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NavPage from './NavPage';

const MainDashboard = () => {
    return (
        <div className='mx-[3.2rem] my-10'>
            <div className="flex gap-[4rem]">
                <div className="flex-[0.23] max-h-fit h-full border shadow-lg sticky top-20">
                    <div className='flex flex-col gap-[1.2rem] child:flex child:items-center child:gap-[0.8rem] child:p-[0.8rem] child:rounded-sm bg-white p-[0.8rem] rounded-[0.6rem] child-hover:bg-gray-100  child:cursor-pointer h-full child:border-b'>
                        <Link to='/main'>
                            <AiOutlineDashboard />
                            <span className='text-[1.4rem]'>Dashboard</span>
                        </Link>
                        <Link to='/main/profile'>
                            <FaRegUser />
                            <span className='text-[1.4rem]'>Profile</span>
                        </Link>
                        <Link to='/main/bookings'>
                            <CgList />
                            <span className='text-[1.4rem]'>My Bookings</span>
                        </Link>
                        <Link to='/main/wishlist'>
                            <BsCardChecklist />
                            <span className='text-[1.4rem]'>My Wishlist</span>
                        </Link>
                        <Link to='/main/change-password'>
                            <BiSupport />
                            <span className='text-[1.4rem]'>Change Password</span>
                        </Link>
                        <div className=''>
                            <FiLogOut />
                            <span className='text-[1.4rem]'>Logout</span>
                        </div>
                    </div>
                </div>
                <div className='flex-[0.77]'>
                    <NavPage />
                </div>
            </div>
        </div>
    )
}

export default MainDashboard;
