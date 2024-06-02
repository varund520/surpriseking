import React, { useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { FcGoogle } from 'react-icons/fc'
import { motion } from "framer-motion"
import { MdOutlineClose } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { TiArrowBackOutline } from 'react-icons/ti'

const Login = (props) => {

    const { showLogin, handleShowLogin } = props;

    const [showOtp, setShowOtp] = useState(false);
    const [sendOtp, setSensOtp] = useState(false);

    const show = {
        opacity: 1,
        // display: "block",
        y: 0,
        duration: 3
    };

    const hide = {
        opacity: 0,
        // display: 'none',
        y: 100,
        duration: 3
        // transitionEnd: {
        //     display: "none"
        // }
    };

    return (
        <motion.div animate={showLogin ? show : hide}>
            <div className='fixed top-0 bottom-0 left-0 right-0 hidden md:flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-[1px]'>
                <div className='mx-[15.8rem] h-[70vh] w-[40%] rounded-2xl overflow-hidden'>
                    <div className='relative flex flex-col h-full items-center justify-center gap-[1.6rem] bg-white text-black p-10'>
                        <div className='absolute top-[1.6rem] z-[2] right-[1.6rem] hover:bg-gray-100 cursor-pointer bg-gray-200 rounded-full p-[0.6rem]' onClick={handleShowLogin}>
                            <MdOutlineClose />
                        </div>

                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-in ${showOtp ? '-translate-x-full' : 'translate-x-0'}`}>
                            {/* <form action='otp' method='post' className={`flex-col items-center gap-[1.6rem]`}> */}
                            <div action='otp' method='post' className={`flex-col items-center gap-[1.6rem]`}>
                                <h2 className='text-[2.2rem] font-medium tracking-wider text-center'>Login to your account</h2>

                                <div className='flex flex-col gap-[1.6rem]'>
                                    <button className='btn flex mt-5 items-center gap-[0.8rem] border hover:bg-slate-100 border-black h-[5rem] rounded-xl w-[32rem] justify-center text-black bg-white text-[1.6rem]'><FcGoogle className='text-[1.8rem]' />Continue with Google</button>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-16 h-px bg-slate-500' /> <p className='text-[1.6rem]'>or continue with mobile number</p> <div className='w-16 h-px bg-slate-500' />
                                    </div>

                                    <div className='flex mt-5 flex-col gap-10 items-center w-full p-[0.8rem] rounded-[0.6rem] text-[1.6rem]'>
                                        <div className='flex items-center border-b-[1px] pb-1 gap-4 border-slate-400 w-[32rem]'>
                                            <img src="https://cdn-icons-png.flaticon.com/512/321/321238.png" alt="" className='h-10 object-contain mr-5' />
                                            <span>+91</span> <input type="text" inputMode='numeric' placeholder='Mobile Number' className='w-full pr-1 outline-none border-none' />
                                        </div>
                                        <button className="btn flex items-center justify-center gap-[1.2rem] hover:bg-slate-100 w-[32rem] rounded-xl h-[5rem] text-[1.6rem]" onClick={() => setShowOtp(true)}>Login With OTP<BsArrowRight /></button>
                                    </div>
                                </div>

                                <div className='text-[1.3rem] text-center mt-4'>
                                    <p>By logging in, you agree to the following</p>
                                </div>
                            </div>
                        </div>

                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-in ${showOtp ? 'translate-x-0' : 'translate-x-full'}`}>
                            <span className='absolute top-[1.6rem] left-[1.6rem] cursor-pointer rounded-full p-2 hover:bg-gray-200' onClick={() => setShowOtp(false)}>
                                <TiArrowBackOutline className='text-[16px] text-gray-500' />
                            </span>
                            <form method='post' action='otp' className={`${showOtp ? 'translate-x-0 block' : 'translate-x-full hidden'} transition-all duration-200 ease-in`}>
                                <h3 className='text-[20px] font-medium mb-10 text-center'>Login to Surprise King</h3>
                                <p className='text-[14px]'>Enter OTP sent to Registered Email & Mobile</p>

                                <div className='mt-4 mb-8 text-[16px] child:text-center child:outline-none flex gap-[10px] child:border child:max-w-[40px] child:p-3 child:rounded-[6px]'>
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                </div>

                                <button className='btn w-full h-[5rem] flex items-center justify-center gap-4 rounded-[6px]' onClick={() => setSensOtp(true)}>

                                    <span className={`text-[16px] ${sendOtp ? 'hidden' : 'block'}`}>Proceed</span>

                                    <div class={`spinner-box ${sendOtp ? 'flex' : 'hidden'}`}>
                                        <div class="pulse-container">
                                            <div class="pulse-bubble pulse-bubble-1"></div>
                                            <div class="pulse-bubble pulse-bubble-2"></div>
                                            <div class="pulse-bubble pulse-bubble-3"></div>
                                        </div>
                                    </div>

                                </button>

                                <div className='mt-4 font-medium'>
                                    <span>OTP not received ? </span>
                                    <span className='text-sky-600 cursor-pointer'>Send Again</span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='block md:hidden fixed inset-0 z-[3] bg-black bg-opacity-30 backdrop-blur-[1px]'>
                <div className='bg-white absolute bottom-0 left-0 right-0 top-[35%] overflow-hidden rounded-t-[30px]'>
                    <div className='flex items-center justify-between p-[15px] px-[20px] bg-[#EFF5FF]'>
                        <h4 className='text-[18px] text-[#172B4D]'>Sign-in to Surprise</h4>
                        <span onClick={() => {
                            handleShowLogin()
                        }}>
                            <CgCloseO className='text-slate-600 text-[22px]' />
                        </span>
                    </div>

                    <div className='flex relative'>
                        <div className={`px-[20px] space-y-[23px] mt-[20px] pb-[30px] absolute inset-0 transition-all duration-200 ease-in ${showOtp ? '-translate-x-full' : 'translate-x-0'}`}>
                            <p className='text-[14px] text-slate-700'>
                                For a more personalised experience, sign in with your registered mobile number
                            </p>

                            <div className='border rounded-[6px] flex items-center gap-[10px] h-[50px] px-[10px]'>
                                <img src="/Images/india.png" alt="india-flag" className='pr-[15px] border-r' />
                                <span className='text-[16px] text-gray-700'>+91</span>
                                <input type="number" placeholder='Enter Mobile Number'
                                    className='border-none outline-none text-[16px] text-black h-full w-full' />
                            </div>

                            <div className='flex flex-col gap-[15px] font-medium'>
                                <button className='bg-blue-700 text-white text-[16px] p-[10px] rounded-[6px]' onClick={() => setShowOtp(true)}>Sign in with OTP</button>
                                <button className='text-blue-800 text-[14px]'>Sign in with Password</button>
                            </div>

                            <div className='flex items-center gap-[10px]'>
                                <span className='h-[1px] bg-[#b3bac5] w-full'></span>
                                <span className='text-[16px] text-black'>or</span>
                                <span className='h-[1px] bg-[#b3bac5] w-full'></span>
                            </div>


                            <div className='p-[10px] flex items-center border rounded-[6px]'>
                                <span><FcGoogle className='text-[20px]' /> </span>
                                <span className='text-[14px] font-medium text-black w-full text-center'>
                                    Sign in with Google
                                </span>
                            </div>
                        </div>

                        <div className={`${showOtp ? 'translate-x-' : 'translate-x-full'} px-[20px] mt-[20px] absolute inset-0 transition-all duration-200 ease-in`}>
                            <h3 className='text-[20px] font-medium mb-10'>Login to Surprise King</h3>
                            <p className='text-[14px]'>Enter OTP sent to Registered Email & Mobile</p>

                            <div className='mt-4 mb-8 text-[16px] child:text-center child:outline-none flex gap-[10px] child:border child:max-w-[40px] child:p-3 child:rounded-[6px]'>
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                                <input type="number" />
                            </div>

                            <button className='mt-[20px] btn w-full h-[5rem] flex items-center justify-center gap-4 rounded-[6px] bg-[#1B1DC7]' onClick={() => setSensOtp(true)}>

                                <span className={`text-[16px] ${sendOtp ? 'hidden' : 'block'}`}>Proceed</span>

                                <div class={`spinner-box ${sendOtp ? 'flex' : 'hidden'}`}>
                                    <div class="pulse-container">
                                        <div class="pulse-bubble pulse-bubble-1"></div>
                                        <div class="pulse-bubble pulse-bubble-2"></div>
                                        <div class="pulse-bubble pulse-bubble-3"></div>
                                    </div>
                                </div>

                            </button>

                            <div className='mt-4 font-medium text-[14px]'>
                                <span>OTP not received ? </span>
                                <span className='text-sky-600 cursor-pointer'>Send Again</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Login