import React from 'react';
import Sidebar from './Sidebar';

const Booking = () => {
    return (
        <div className="mx-[3.2rem] my-10">
            <div className="flex gap-[4rem]">
                <Sidebar />
                <div className='flex-[0.77]'>
                    <div className='bg-white p-[2rem] space-y-5 rounded-[0.6rem] shadow-lg'>
                        <h2 className='text-[2rem] border-b-2 border-red-700 max-w-max'>My Bookings</h2>
                        <div>
                            <table className='w-full flex flex-col gap-[1.2rem] border shadow-lg rounded-[0.8rem]'>
                                <thead className='bg-[#0083CB] p-[1.2rem] rounded-t-lg'>
                                    <tr className='flex items-center justify-between w-full child:font-medium text-white text-[1.6rem] tracking-[1px]'>
                                        <th>Order Id</th>
                                        <th>Order Date</th>
                                        <th>Order Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="flex flex-col w-full child:px-[1.2rem] child:py-[0.8rem] text-[1.4rem] text-gray-700 [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray-200">
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                    <tr className="flex items-center justify-between w-full">
                                        <td>SK-2</td>
                                        <td>20/04/2022</td>
                                        <td>10:00</td>
                                        <td>View Details</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking