import React from 'react';
import Sidebar from './Sidebar';

const ChangePass = () => {
    return (
        <div className="mx-[3.2rem] my-10">
            <div className="flex gap-[4rem]">
                <Sidebar />
                <div className='flex-[0.77]'>
                    <div className='bg-white p-[2rem] space-y-5 rounded-[0.6rem] shadow-lg'>
                        <h2 className='text-[2rem] border-b-2 border-red-700 max-w-max'>Change Password</h2>
                        <div className='flex flex-col gap-[2rem]'>
                            <div>
                                <h2 className='text-gray-500 font-medium text-[1.4rem]'>Current Password</h2>
                                <input type="password" placeholder='Current Password' className='mt-[0.6rem] text-[1.6rem] rounded-[0.6rem] outline-none shadow-md border bg-[#F9F9F9] p-[0.8rem] px-[1.2rem] w-full placeholder:text-[1.4rem] ' />
                            </div>
                            <div>
                                <h2 className='text-gray-500 font-medium text-[1.4rem]'>New Password</h2>
                                <input type="password" placeholder='New Password' className='mt-[0.6rem] text-[1.6rem] rounded-[0.6rem] outline-none shadow-md border bg-[#F9F9F9] p-[0.8rem] px-[1.2rem] w-full placeholder:text-[1.4rem]  ' />
                            </div>
                            <div>
                                <h2 className='text-gray-500 font-medium text-[1.4rem]'>Confirm New Password</h2>
                                <input type="password" placeholder='Confirm New Password' className='mt-[0.6rem] text-[1.6rem] rounded-[0.6rem] outline-none shadow-md border bg-[#F9F9F9] p-[0.8rem] px-[1.2rem] w-full placeholder:text-[1.4rem] ' />
                            </div>
                        </div>
                        <button className='btn w-[17.6rem] h-[4rem] bg-[#2E3F6E] text-[1.6rem]'>Update Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePass;

