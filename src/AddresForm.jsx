import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { BiRupee } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { ImArrowLeft2 } from 'react-icons/im';
import { MdOutlineClose } from 'react-icons/md';


const AddresForm = () => {

    const [startDate, setStartDate] = useState(new Date())

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    };

    return (
        <div className='space-y-5'>
            <div className="">
                <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    timeClassName={handleColor}
                    showDisabledMonthNavigation
                />
            </div>
            <div className='w-[450px] flex flex-col gap-[2rem] child:flex child:items-center bg-white'>
                <div className='justify-between px-[2rem] py-[0.8rem] border-b border-black'>
                    <ImArrowLeft2 />
                    <h2 className='text-[1.8rem] font-medium'>Select Shipping Method</h2>
                    <MdOutlineClose />
                </div>
                <div className='h-[250px] overflow-y-auto flex flex-col child:flex child:items-center gap-[1.2rem] child:w-full mx-[4rem]'>
                    <div className='justify-between h-12 rounded-[0.6rem] border border-slate-500 pl-[0.8rem]'>
                        <div className='flex items-center gap-[1.2rem]'>
                            <input type="radio" />
                            <div>
                                <h3>Morning Delivery</h3>
                                <p className='text-[1.2rem]'>Your gift is delivered between 7:00 - 9:00 AM</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-blue-600 text-white p-[0.8rem] font-medium h-full'><BiRupee /> <span>200</span></button>
                    </div>
                    <div className='justify-between h-12 rounded-[0.6rem] border border-slate-500 pl-[0.8rem]'>
                        <div className='flex items-center gap-[1.2rem]'>
                            <input type="radio" />
                            <div>
                                <h3>Morning Delivery</h3>
                                <p className='text-[1.2rem]'>Your gift is delivered between 7:00 - 9:00 AM</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-blue-600 text-white p-[0.8rem] font-medium h-full'><BiRupee /> <span>200</span></button>
                    </div>
                    <div className='justify-between h-12 rounded-[0.6rem] border border-slate-500 pl-[0.8rem]'>
                        <div className='flex items-center gap-[1.2rem]'>
                            <input type="radio" />
                            <div>
                                <h3>Morning Delivery</h3>
                                <p className='text-[1.2rem]'>Your gift is delivered between 7:00 - 9:00 AM</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-blue-600 text-white p-[0.8rem] font-medium h-full'><BiRupee /> <span>200</span></button>
                    </div>
                    <div className='justify-between h-12 rounded-[0.6rem] border border-slate-500 pl-[0.8rem]'>
                        <div className='flex items-center gap-[1.2rem]'>
                            <input type="radio" />
                            <div>
                                <h3>Morning Delivery</h3>
                                <p className='text-[1.2rem]'>Your gift is delivered between 7:00 - 9:00 AM</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-blue-600 text-white p-[0.8rem] font-medium h-full'><BiRupee /> <span>200</span></button>
                    </div>
                    <div className='justify-between h-12 rounded-[0.6rem] border border-slate-500 pl-[0.8rem]'>
                        <div className='flex items-center gap-[1.2rem]'>
                            <input type="radio" />
                            <div>
                                <h3>Morning Delivery</h3>
                                <p className='text-[1.2rem]'>Your gift is delivered between 7:00 - 9:00 AM</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-blue-600 text-white p-[0.8rem] font-medium h-full'><BiRupee /> <span>200</span></button>
                    </div>
                </div>
                <div className='bg-slate-300 p-[1.6rem] flex items-center gap-[0.8rem] text-[1.4rem]'>
                    <SlCalender />
                    <span className='underline'>Back to Calendar</span>
                </div>
            </div>
        </div>
    )
}

export default AddresForm