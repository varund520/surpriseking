import React, { useRef, useState } from 'react';
import CustomSelect from '../../components/CustomSelect';
import { RiSearch2Line } from 'react-icons/ri';

const VendorForm = () => {

    const initialState = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }

    const inputRef = useRef(null);
    const [inputs, setInputs] = useState(initialState);
    // const [weekDay, setWeekDay] = useState({ days: '' });
    const [weekDay, setWeekDay] = useState([]);

    const handleOnchange = (e, text, input) => {
        text = e.target.value;
        input = e.target.name;

        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]



    const selectWeekDays = (item) => {
        const storeDays = weekDay;
        setWeekDay(oldArray => [...oldArray, item]);
        if (weekDay.includes(item)) {
            setWeekDay(storeDays.filter(day => day !== item))
        }
    }

    console.log(weekDay)

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-300 w-full form_wrapper'>
            <div className='flex gap-20 justify-center'>
                <div className='flex-[0.2]'>
                    <video autoPlay muted loop className='w-full' src="/Video/vendor__form.mp4"></video>
                </div>
                <div className='flex-[0.4]'>
                <h3 className='text-[20px]'>Enter Your Business Details</h3>

                <div className='space-y-4 mt-6'>
                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="name" name="name" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='name' className={`transition-all duration-200 ease-linear`}>Business Name</label>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="pincode" name="pincode" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='pincode' className={`transition-all duration-200 ease-linear`}>Pincode</label>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="building" name="building" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='building' className={`transition-all duration-200 ease-linear`}>Block Number / Building Name</label>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="street" name="street" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='street' className={`transition-all duration-200 ease-linear`}>Street / Colony Name</label>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="area" name="area" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='area' className={`transition-all duration-200 ease-linear`}>Area</label>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="landmark" name="landmark" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='landmark' className={`transition-all duration-200 ease-linear`}>Landmark</label>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='cm_input'>
                            <input ref={inputRef} type="text" id="city" name="city" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                            <label for='city' className={`transition-all duration-200 ease-linear`}>City</label>
                        </div>

                        <div className='cm_input'>
                            <input ref={inputRef} type="text" id="state" name="state" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                            <label for='state' className={`transition-all duration-200 ease-linear`}>State</label>
                        </div>
                    </div>
                </div>

                <button className="btn py-[4px] w-full mt-6 text-[14px]">Save and Continue</button>
            </div>

                {/* <div className='flex-[0.4]'>
                <h3 className='text-[20px]'>Add Contact Details</h3>

                <div className='space-y-4 mt-6'>
                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="contact" name="contact" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='contact' className={`transition-all duration-200 ease-linear`}>Contact Person</label>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex items-center justify-center gap-4 border rounded-[6px] w-44 py-[3px] bg-white'>
                            <img src="/Images/india.png" alt="flag" />
                            <span className='text-[14px]'>+91</span>
                        </div>
                        <div className='cm_input'>
                            <input ref={inputRef} type="text" id="pincode" name="pincode" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                            <label for='pincode' className={`transition-all duration-200 ease-linear`}>Mobile Number</label>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex items-center justify-center gap-4 border rounded-[6px] w-44 py-[3px] bg-white'>
                            <img src="/Images/india.png" alt="" />
                            <span className='text-[14px]'>+91</span>
                        </div>
                        <div className='cm_input'>
                            <input ref={inputRef} type="text" id="building" name="building" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                            <label for='building' className={`transition-all duration-200 ease-linear`}>WhatAapp Number</label>
                        </div>
                    </div>

                    <div className='cm_input'>
                        <input ref={inputRef} type="text" id="email" name="email" className='h-[50px] px-[15px] pt-[15px] text-[14px]' onChange={handleOnchange} required />
                        <label for='email' className={`transition-all duration-200 ease-linear`}>Email</label>
                    </div>

                </div>

                <button className="btn py-[8px] w-full mt-6 text-[14px]">Save and Continue</button>
            </div> */}

                {/* <div className='flex-[0.4] flex flex-col justify-between'>
                    <div>
                        <h3 className='text-[20px] mb-1'>Add Business Timings</h3>
                        <span className='text-[14px]'>Let your customers know when you are open for business</span>

                        <div className='mt-10'>
                            <h4 className='text-[16px]'>Select Days of the Week</h4>

                            <div className='my-3 child:rounded-full child:cursor-pointer child:border flex items-center child:flex child:items-center child:justify-center gap-[10px] child:text-[12px] child:w-[38px] child:h-[38px]'>
                                {weekDays.map((item, index) =>
                                    <span key={index} className={`${weekDay.includes(item) ? 'bg-red-400 text-white' : 'bg-white'}`} onClick={() => selectWeekDays(item)}>{item}</span>
                                )}
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="checkbox" />
                                <span className='text-[13px]'>Select All Days</span>
                            </div>

                            <div className='flex items-center gap-4 mt-8'>
                                <CustomSelect options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]} />

                                <CustomSelect options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]} />
                            </div>

                        </div>
                    </div>

                    <button className="btn py-[8px] w-full mt-6 text-[14px]">Save and Continue</button>
                </div> */}

                {/* <div className='flex-[0.4] flex flex-col justify-between'>
                    <div>
                        <h3 className='text-[20px] mb-1'>Add Business Category</h3>
                        <span className='text-[14px]'>Choose the right business categories so your customer can easily find you</span>

                        <div className='mt-4 border rounded-[6px] flex items-center gap-3 bg-white p-4'>
                            <RiSearch2Line className='text-[14px] text-gray-600' />
                            <input type="text" placeholder='Type Business Category' className='text-[14px] w-full p-1' />
                        </div>
                    </div>
                </div> */}

                {/* <div className='flex-[0.4] flex flex-col justify-between'>
                    <div>
                        <h3 className='text-[20px] mb-1'>Suggested Categories</h3>

                        <div className='border rounded-[6px] py-3 px-3 mb-3'>
                            <input type="checkbox" />
                            <span>Car Rental</span>
                        </div>

                        <span className='text-[14px]'>Here are a few more categories to consider based on your selected category.</span>

                        <div>
                            <div>
                                <input type="checkbox" />
                                <span>Category-01</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Category-02</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Category-03</span>
                            </div>
                        </div>
                    </div>

                    <button className="btn py-[8px] w-full mt-6 text-[14px]">Save and Continue</button>
                </div> */}

            </div>
        </div>
    )
}

export default VendorForm;