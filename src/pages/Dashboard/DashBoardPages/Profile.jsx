import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import Sidebar from './Sidebar';

const Profile = () => {
  return (
    <div className="mx-[3.2rem] my-10">
      <div className="flex gap-[4rem]">
        <Sidebar />
        <div className='flex-[0.77]'>
          <div className='bg-white p-[2rem] space-y-5 rounded-[0.6rem] shadow-lg'>
            <h2 className='text-[2rem] border-b-2 border-red-700 max-w-max'>My Profile</h2>
            <div className='grid grid-cols-2 gap-[2rem]'>
              <div className='space-y-5'>
                <div>
                  <h2 className='text-gray-500 font-medium text-[1.4rem]'>Full Name</h2>
                  <div className='flex items-center gap-[1.2rem] border h-[4rem] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                    <FaRegUser className='text-blue-600 text-[1.6rem]' />
                    <input type="text" placeholder='Full Name' className='border-l pl-[0.8rem] text-[1.4rem] border-slate-300 h-full outline-none w-full placeholder:text-[1.4rem] bg-transparent' />
                  </div>
                </div>
                <div>
                  <h2 className='text-gray-500 font-medium text-[1.4rem]'>Contact Number</h2>
                  <div className='flex items-center gap-[1.2rem] border h-[4rem] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                    <FiSmartphone className='text-blue-600 text-[1.6rem]' />
                    <input type="text" placeholder='Contact Number' className='border-l pl-[0.8rem] text-[1.4rem] border-slate-300 h-full outline-none w-full placeholder:text-[1.4rem] bg-transparent ' />
                  </div>
                </div>
              </div>
              <div>
                <h2 className='text-gray-500 font-medium text-[1.4rem]'>Contact Number</h2>
                <div className='flex items-center gap-[1.2rem] border h-[4rem] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                  <FiSmartphone className='text-blue-600 text-[1.6rem]' />
                  <input type="text" placeholder='Contact Number' className='border-l pl-[0.8rem] text-[1.4rem] border-slate-300 h-full outline-none w-full placeholder:text-[1.4rem] bg-transparent ' />
                </div>
              </div>
            </div>
            <button className='btn w-[16rem] h-[4rem] text-[1.6rem]'>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile