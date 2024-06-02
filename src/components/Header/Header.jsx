import { motion } from "framer-motion";
import React, { useState } from 'react';
import DatalistInput from 'react-datalist-input';
import transition from "react-element-popper/animations/transition";
import { AiFillHeart, AiOutlineQuestionCircle, AiTwotoneStar } from 'react-icons/ai';
import { BsBank, BsCaretLeftFill, BsCaretRightFill, BsEmojiSmileFill, BsGraphUp, BsPlusSquare } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';
import { CiCalendarDate } from 'react-icons/ci';
import { FaChevronLeft, FaChevronRight, FaPlaceOfWorship, FaRegUser, FaRegUserCircle } from 'react-icons/fa';
import { FiEdit, FiSearch, FiSmartphone } from 'react-icons/fi';
import { GoBell } from 'react-icons/go';
import { IoIosLogOut, IoLogoAndroid, IoMdClose, IoMdLocate } from 'react-icons/io';
import { MdMenu, MdOutlineClose, MdOutlineMarkEmailRead, MdOutlinePassword, MdOutlineShareLocation, MdOutlineSupportAgent } from 'react-icons/md';
import { RiBuilding4Line, RiHome4Line, RiLoginBoxLine } from 'react-icons/ri';
import { TbCake, TbMessage2 } from 'react-icons/tb';
import { TfiMenuAlt } from 'react-icons/tfi';
import { VscSettingsGear } from 'react-icons/vsc';
import DatePicker from 'react-multi-date-picker';
import { Link } from 'react-router-dom';
import { options } from '../../data/data';
import { boxData } from '../../pages/List/data';
import InfoBox from '../InfoBox';
import Login from '../Modals/Login';
import { mobileFirstNav, mobileInnerNav, profileData, profileOpt } from './data';
import './header.css';

const Header = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [showOption, setShowOption] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)
    const [mobileNavId, setMobileNavId] = useState('')
    const [profileId, setProfileId] = useState('')
    const [openAddressForm, setOpenAddressForm] = useState('')
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showMobileInnerNav, setShowMobileInnerNav] = useState(false)
    const [profilePic, setProfilePic] = useState(false)
    const [openRatingForm, setOpenRatingForm] = useState(false)
    const [openFeedBackForm, setOpenFeedBackForm] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const [ratingVal, setRatingVal] = useState(1)

    const { showBottomForm } = props

    const positionY = window.scrollY
    const location = window.location.pathname

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePic(URL.createObjectURL(event.target.files[0]))
        }
    }

    const handleProfilePic = () => {
        document.getElementById('profile_pic').click();
    }

    const handleShowLogin = () => {
        setShowLogin(false)
    }

    const handleProfileClick = (item) => {
        setProfileId(item.id)

        if (item.id === 'rating') {
            setOpenRatingForm(true)
        }
        else if (item.id === 'feedback') {
            setOpenFeedBackForm(true)
        }
        else {
            setShowMobileInnerNav(true)
        }
    }

    const fixedBg = () => {
        document.body.style.overflow = 'hidden';
        console.log('fixed')
    }

    const unFixedBg = () => {
        document.body.style.overflow = 'unset';
        console.log('unfixed')
    }

    const closeMobileMenu = () => {
        setShowMobileMenu(false)
        document.body.style.overflow = 'unset';
    }

    const closeProfileMenu = () => {
        setShowMenu(false)
        document.body.style.overflow = 'unset';
    }

    return (
        <header className="sticky flex items-center justify-between top-0 z-40 h-[7rem] md:h-[6.4rem] bg-[#593B8A] py-[1.2rem] left-0 right-0 w-full">
            <div className="flex items-center justify-between mx-[1rem] lg:mx-[3.2rem] w-full">
                <div className="flex items-center gap-[1rem]">
                    <span className='text-[3rem] cursor-pointer block lg:hidden text-white' onClick={() => {
                        setShowMobileMenu(true)
                        fixedBg()
                    }}>
                        <CgMenuLeft />
                    </span>
                    <Link to="/" className="">
                        <img loading='lazy' src="https://infotechindia.co.in/dummy-logo.png" alt="Surprise King" title="Surprise King" className="cursor-pointer h-[4rem]" />
                    </Link>
                </div>

                {((location === "/" && (positionY > 350)) || (location !== "/")) &&
                    < div className="w-[45rem] relative header hidden xl:block">
                        {showModal && <div className='w-screen h-screen fixed top-0 left-0 right-0 bg-opacity-50 bg-black z-[-1] backdrop-blur-[1px]' />}
                        <div className={`flex items-center child:flex child:items-center h-[3.8rem] w-full bg-white rounded-full ${showOption && 'rounded-bl-lg'}`}>
                            <div className='flex-[0.24] relative border-r pl-[1rem]'>
                                <DatalistInput
                                    className='absolute top-[2px]'
                                    placeholder="Ahemedabad"
                                    // value={value}
                                    // setValue={setValue}
                                    // onSelect={(item) => handleOption(item)}
                                    items={options}
                                    onClick={() => setShowOption(!(showOption))}
                                />
                                <FaPlaceOfWorship className={`text-gray-400 mr-[0.8rem] absolute right-0`} />
                            </div>
                            <div className="flex-[0.76] relative p-1 pl-[0.5rem] text-[1.4rem] text-black" onBlur={() => setShowModal(false)}>
                                <input type="text" placeholder="Search for locality, landmark, project or builder" className="outline-none border-none w-full mr-[0.8rem] placeholder:text-[1.2rem]" onClick={() => setShowModal(true)} />
                                <button className='btn py-[0.5rem] px-[2rem] mr-[2px]'>Search</button>
                            </div>
                        </div>
                        {showModal &&
                            <div className='flex flex-col items-start w-[48rem] p-[1.2rem] absolute top-[4.8rem] left-0 right-0 space-y-5 bg-[#ECECEC] rounded-[0.6rem]'>
                                <div className='space-y-3 w-full p-[0.4rem]'>
                                    <p className='text-[1.4rem] text-black ml-1'>Check out most popular serches</p>
                                    <div className='flex items-center justify-start flex-wrap gap-[1.6rem] child:px-[2rem] child:py-[0.6rem] child:whitespace-nowrap child:cursor-pointer text-[#C98200] child:bg-[#FFE2AD] child:rounded-2xl child:text-[1.4rem]'>
                                        <div className='hover:bg-yellow-100'>East Campus</div>
                                        <div className='hover:bg-yellow-100'>West Campus</div>
                                        <div className='hover:bg-yellow-100'>North Campus</div>
                                    </div>
                                </div>
                                <div className='bg-white space-y-1 rounded-[0.6rem] w-full p-[1.2rem]'>
                                    <p className='font-medium text-md text-black text-[1.6rem]'>Choose The Product You Are Applying For</p>
                                    <div>
                                        <ul className="grid grid-cols-2 gap-[0.4rem] child:flex child:items-center child:gap-[1.2rem] text-[1.4rem] text-[#4E4E4E] px-[2rem]">
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                            <li>
                                                <img loading='lazy' src="/Images/Menu/menu_5.png" alt="" className='h-[1.6rem]' />
                                                <p className='hover:bg-gray-100 p-[0.8rem] rounded-sm cursor-pointer'>Savings Account</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
                <div className="flex items-center justify-end">
                    <ul className="flex items-center space-x-[1.2rem] md:space-x-[1.8rem] text-white mr-[2rem] sm:mr-[3.2rem]">
                        <li className='md:hidden block'>
                            <FiSearch className='text-[20px]' />
                        </li>
                        <li className='block'>
                            <IoLogoAndroid className='text-[23px] android_icon' />
                        </li>
                        <li className='relative block' onClick={() => {
                            if (window.innerWidth < 720) {
                                setShowNotifications(true)
                            }
                        }}>
                            <GoBell className='text-[17px]' />
                            <span className='absolute top-[-4px] right-[-4px] bg-red-500 h-[13px] w-[13px] flex_center rounded-full text-[10px]'>3</span>
                        </li>
                        {/* <li className='hidden sm:block'>
                            <div className="flex items-center gap-[0.4rem] cursor-pointer" onClick={showBottomForm} >
                                <MdOutlineSupportAgent className="text-[2.5rem] md:text-[2rem]" />
                                <span className="text-[2rem] md:text-[1.6rem]">Support</span>
                            </div>
                        </li> */}
                        <li className="md:flex items-center gap-[0.4rem] hidden">
                            <BsGraphUp className='text-[1.6rem]' />
                            <span className="text-[1.6rem]">Free Listing</span>
                        </li>
                        <li className="items-center gap-[0.4rem] hidden" onClick={() => {
                            setShowLogin(true)
                            fixedBg()
                        }}>
                            <RiLoginBoxLine className='text-[2.5rem] md:text-[2rem]' />
                            <span className="text-[2rem] md:text-[1.6rem]">Login</span>
                        </li>
                    </ul>
                    <div className='flex items-center gap-[1.6rem] text-white'>
                        <div className="space-x-2 hidden sm:block text-[1.4rem] hover:bg-white border-2 border-white rounded-full hover:text-black hover:rounded-full active:scale-95 transition-all duration-75 ease-in" onClick={() => setShowLogin(true)}>
                            <button className='px-[2rem] py-[0.8rem] font-medium'>Login / Signup</button>
                        </div>
                        <div className='border-2 border-gray-400 rounded-full flex items-center gap-[6px] px-[10px] py-[4px]'>
                            <span className='cursor-pointer' onClick={() => setShowSideBar(true)}>
                                <MdMenu className='text-[2.4rem]' />
                            </span>
                            <span className='cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                                <FaRegUserCircle className='text-[2.5rem] md:text-[2rem]' />
                            </span>
                        </div>
                    </div>

                    {showSideBar &&
                        <div className='fixed top-0 bottom-0 left-0 right-0 hidden md:flex items-center justify-end bg-black bg-opacity-50 backdrop-blur-[1px]'>
                            <motion.div initial={{ x: 40 }} whileInView={{ x: 0 }} style={{ height: 'calc(100vh - 6.5rem)' }} className={`max-w-lg w-full bg-white rounded-xl mt-[6.5rem] p-[1rem] relative overflow-y-auto hide_scrollbar`}>

                                <span className='absolute top-[2rem] right-[2rem] text-slate-600 text-[1.8rem]' onClick={() => setShowSideBar(false)}><MdOutlineClose /></span>

                                <div className='flex gap-[1.6rem] my-[2rem]'>
                                    <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[7rem] w-[7rem] rounded-full object-cover' />
                                    <div className='flex flex-col'>
                                        <h2 className='text-[1.8rem] text-black'>Mukesh Kumar</h2>
                                        <p className='text-[1.2rem] text-slate-600'>Web And Application Developer at Unicode Solutions Techno PVT Ltd</p>
                                        <span className='mt-[1rem] text-blue-900 text-[1.2rem] font-medium'>View & Update Profile</span>
                                    </div>
                                </div>

                                <hr />

                                <div>
                                    <div className='flex items-center justify-between mt-[1.6rem] mb-[1rem] mx-[1.2rem]'>
                                        <span className='text-black font-medium text-[1.3rem]'>Your profile performance</span>
                                        <span className='text-slate-400'>Last 90 days</span>
                                    </div>

                                    <ul className='text-slate-700 flex flex-col gap-[1.8rem] my-[2rem] mx-[1.2rem] text-[1.3rem] child:flex child:items-center child:gap-[1rem]'>
                                        <Link to={'/account/dashboard'} onClick={() => setShowSideBar(false)}>
                                            <TfiMenuAlt /> Dashboard
                                        </Link>
                                        {profileData?.slice(0, 5)?.map((item, index) =>
                                            <li><TfiMenuAlt /> {item?.opt}</li>
                                        )}
                                        <hr />
                                        {profileData?.slice(5, profileData.length)?.map((item, index) =>
                                            <li><TfiMenuAlt /> {item?.opt}</li>
                                        )}
                                        <li> <TfiMenuAlt /> Naukri Blog</li>
                                        <li> <VscSettingsGear /> Settins</li>
                                        <li> <AiOutlineQuestionCircle /> FAQs</li>
                                        <li> <IoIosLogOut /> Logout</li>
                                    </ul>

                                </div>
                            </motion.div>
                        </div>
                    }

                    <div className={`${showMenu ? 'translate-x-0' : 'translate-x-full'} block md:hidden transition-transform duration-500 ease-out fixed top-0 left-0 bottom-0 w-full`}>
                        <div className='bg-[#E6E5E5] p-[10px] h-full overflow-x-hidden overflow-y-auto'>

                            <div className='bg-[#2E3F6E] rounded-[20px] p-[2rem] h-[10rem] flex items-center justify-between'>
                                <div className='flex gap-[10px] text-white'>
                                    <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[7rem] w-[7rem] rounded-full object-cover' />
                                    <div className=''>
                                        <h4 className='text-[16px]'>Manav</h4>
                                        <span className='text-[14px]'>manav@gmail.com</span>
                                    </div>
                                </div>
                                <span className='text-[14px] bg-slate-100 p-[10px] rounded-[13px] cursor-pointer text-gray-600' onClick={closeProfileMenu}>
                                    <BsCaretRightFill />
                                </span>
                            </div>

                            <div className='mt-[10px]'>
                                <h4 className='text-[#6d6d6d] text-[10px] font-medium pl-[5px]'>NAVIGATION</h4>
                                <div className='mt-[4px]'>
                                    <div className='child:bg-white child:shadow-md child:px-[15px] child:py-[8px] child:rounded-[15px] flex flex-col gap-[6px]'>
                                        {profileOpt?.map((item, index) =>
                                            <div className='flex items-center justify-between' key={index}
                                                onClick={() => handleProfileClick(item)}>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center gap-[11px]'>
                                                        <span className='h-[32px] w-[32px] flex items-center justify-center text-white bg-[#593B8A] rounded-full'>{item?.icon}</span>
                                                        <h5 className='text-[14px] font-medium text-gray-800'>{item?.opt}</h5>
                                                    </div>

                                                    {item.opt === 'Your Profile' &&
                                                        <span className='mr-[10px] bg-yellow-200 text-yellow-700 text-[14px] rounded-[6px] px-[6px] py-[2px]'>
                                                            60% completed
                                                        </span>
                                                    }

                                                    {item.opt === 'Your Rating' &&
                                                        <span className='mr-[10px] flex items-center gap-[4px] bg-[#108605] text-white text-[14px] rounded-[6px] px-[6px] py-[2px]'>
                                                            4.3 <AiTwotoneStar />
                                                        </span>
                                                    }
                                                </div>
                                                <FaChevronRight className='text-[14px] text-gray-700' />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={`${showMobileInnerNav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-linear absolute inset-0 bg-[#f6f1ff] p-[10px] flex flex-col`}>
                                {profileId === 'profile' &&
                                    <>
                                        <div className='flex items-center gap-[10px]' onClick={() => setShowMobileInnerNav(false)}>
                                            <span><FaChevronLeft className='text-gray-700 text-[14px]' /></span>
                                            <span className='text-[18px] text-gray-800 font-medium'>Your Profile</span>
                                        </div>

                                        <div className='flex-1 flex flex-col justify-between'>
                                            <div className='relative mt-[40px] bg-white rounded-[10px] p-[15px] shadow-md'>

                                                <div className='absolute w-fit top-[-50px] bg-white rounded-full p-[13px] left-0 right-0 m-auto'>
                                                    <div className='relative w-fit' onClick={handleProfilePic}>
                                                        <div>
                                                            <input type="file" onChange={onImageChange} id='profile_pic' hidden />
                                                            <img alt="preview image" src={profilePic || 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'} className='h-[100px] w-[100px] object-cover rounded-full' />
                                                        </div>
                                                        <span className='absolute bottom-[4px] right-0 bg-white p-[4px] rounded-full shadow-sm'>
                                                            <FiEdit className='text-[14px] text-gray-700' />
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className='gap-[16px] mt-[90px] text-[16px] flex flex-col items-center'>
                                                    <div className='child:flex child:flex-col flex flex-col gap-[1.6rem] w-full md:px-[2rem]'>
                                                        <div>
                                                            <div className='flex items-center gap-[1.2rem] h-[40px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                                <FaRegUser className='text-gray-500 text-[16px]' />
                                                                <input type="text" placeholder='Name' className='pl-[2px] border-slate-300 h-full outline-none w-full bg-transparent' />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex items-center gap-[1.2rem] h-[40px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                                <FiSmartphone className='text-gray-500 text-[16px]' />
                                                                <input type="text" placeholder='Mobile' className='pl-[2px] border-slate-300 h-full outline-none w-full bg-transparent ' />
                                                            </div>
                                                        </div>
                                                        <div className='relative'>
                                                            <div className='flex items-center gap-[1.2rem] h-[40px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                                <MdOutlineMarkEmailRead className='text-gray-500 text-[16px]' />
                                                                <input type="email" placeholder='Your email' className='pl-[2px] border-slate-300 h-full outline-none w-full bg-transparent ' />
                                                            </div>
                                                        </div>
                                                        <div className='relative'>
                                                            <span className='absolute top-0 bottom-0 m-auto text-gray-500 pl-[8px] text-[16px] flex_center'>
                                                                <CiCalendarDate />
                                                            </span>
                                                            <DatePicker placeholder='Date of birth' containerClassName='pl-[35px] rounded-[6px] px-[10px] py-[8px] bg-[#F9F9F9]' inputClass='text-gray-800 w-full border-none outline-none bg-transparent' animations={[transition()]} />
                                                        </div>
                                                        <div className='relative'>
                                                            <span className='absolute top-0 bottom-0 m-auto text-gray-500 pl-[8px] text-[16px] flex_center'>
                                                                <CiCalendarDate />
                                                            </span>
                                                            <DatePicker placeholder='Anniversary' containerClassName='pl-[35px] rounded-[6px] px-[10px] py-[8px] bg-[#F9F9F9]' inputClass='text-gray-800 w-full outline-none outline-none bg-transparent' animations={[transition()]} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='hidden flex-col gap-[16px] mt-[90px] text-[16px]'>
                                                    <div className='border rounded-[6px] px-[10px] py-[8px]'>
                                                        <input type="text" placeholder='Name' className='w-full border-none outline-none text-gray-800' defaultValue="Manav" />
                                                    </div>
                                                    <div className='border rounded-[6px] px-[10px] py-[8px]'>
                                                        <input type="number" placeholder='Mobile' className='w-full border-none outline-none text-gray-800' />
                                                    </div>
                                                    <div className='border rounded-[6px] px-[10px] py-[8px]'>
                                                        <input type="email" placeholder='Your email' className='w-full border-none outline-none text-gray-800' />
                                                    </div>
                                                    <DatePicker placeholder='Date of birth' containerClassName='border rounded-[6px] px-[10px] py-[8px]' inputClass='text-gray-800 w-full border-none outline-none' animations={[transition()]} />
                                                    <DatePicker placeholder='Anniversary' containerClassName='border rounded-[6px] px-[10px] py-[8px]' inputClass='text-gray-800 w-full outline-none outline-none' animations={[transition()]} />

                                                    {/* {mobileInnerNav?.filter(item => item?.id === mobileNavId)[0]?.childCaty?.map((InnerNav, index) =>
                                                <Link to='/list/category-one'>
                                                    <div className='flex items-center gap-[11px]' key={index} onClick={closeMobileMenu}>
                                                        <span className='h-[32px] w-[32px] flex items-center justify-center bg-blue-700 rounded-full'><BsBank className='text-[14px]' /></span>
                                                        <h5 className='text-[14px] font-medium text-gray-800'>{InnerNav?.title}</h5>
                                                    </div>
                                                </Link>
                                            )} */}
                                                </div>
                                            </div>

                                            <div>
                                                <button className='rounded-[6px] p-[10px] btn w-full bg-gray-200 text-slate-500 text-[14px]'>
                                                    Update Profile
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }

                                {profileId === 'address' &&
                                    <>
                                        <div>
                                            <div className='flex items-center gap-[10px]' onClick={() => setShowMobileInnerNav(false)}>
                                                <span><FaChevronLeft className='text-gray-700 text-[14px]' /></span>
                                                <span className='text-[18px] text-gray-800 font-medium'>My Addresses</span>
                                            </div>

                                            <div className='mt-[20px] space-y-[20px]'>
                                                <div className='flex_between text-red-900 bg-white rounded-[10px] px-[20px] py-[8px]' onClick={() => setOpenAddressForm(true)}>
                                                    <span className='text-[16px] font-medium'>Add Address</span>
                                                    <BsPlusSquare className='text-[18px]' />
                                                </div>

                                                <div>
                                                    <div className='flex_center mb-[20px]'>
                                                        <span className='h-[1px] w-full bg-gray-300' />
                                                        <span className='text-[14px] font-medium whitespace-nowrap text-gray-600 px-[4px]'>SAVED ADDRESSES</span>
                                                        <span className='h-[1px] w-full bg-gray-300' />
                                                    </div>

                                                    <div className='space-y-[10px]'>
                                                        {[0, 1, 2].map((item, index) =>
                                                            <div className='flex_start gap-[10px] bg-white px-[15px] py-[10px] rounded-[10px] shadow-sm' key={index}>
                                                                <div>
                                                                    <RiHome4Line className='text-[18px] text-gray-600' />
                                                                    <span className='text-[12px] text-gray-600'>30km</span>
                                                                </div>
                                                                <div>
                                                                    <h4 className='text-[14px] font-medium text-gray-800 mb-[3px]'>Home</h4>
                                                                    <span className='text-[14px] text-gray-600'>A-188 gulab bag, Ground floor, Block D, Mansa Ram Park, ...</span>
                                                                </div>
                                                            </div>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${openAddressForm ? 'translate-y-0' : 'translate-y-full'} delay-100 absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end`}>
                                            <div className={`${openAddressForm ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-200 ease-out bg-white flex flex-col py-[12px] rounded-t-[15px]`} style={{ height: 'calc(100vh - 200px)' }}>
                                                <span className='absolute top-[-50px] w-fit left-0 right-0 m-auto bg-black p-[6px] rounded-full' onClick={() => setOpenAddressForm(false)}>
                                                    <IoMdClose className='text-[23px] text-white' />
                                                </span>

                                                <h4 className='text-[18px] text-gray-800 font-medium border-b mb-[10px] pb-[7px] px-[12px]'>Enter complete address</h4>

                                                <div className='flex-1 px-[12px]'>
                                                    <h5 className='text-[12px] font-medium text-gray-500'>Save address as</h5>
                                                    <div className='mt-[5px] flex items-center gap-[10px] text-[14px] text-gray-700 child:border child:px-[10px] child:py-[3px] child:rounded-[6px]'>
                                                        <span className='border border-red-600 bg-red-50'>Home</span>
                                                        <span>Work</span>
                                                        <span>Hotel</span>
                                                        <span>Other</span>
                                                    </div>

                                                    <div className='mt-[20px] flex flex-col gap-[16px] child:border child:p-[10px] child:rounded-[6px] text-[16px] text-black'>
                                                        <div className='flex items-center gap-[1.2rem] h-[45px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                            <RiBuilding4Line className='text-gray-500 text-[16px]' />
                                                            <input type="text" placeholder='Flat / House no / Floor / Building' className='bg-transparent' />
                                                        </div>
                                                        <div className='flex items-center gap-[1.2rem] h-[45px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                            <IoMdLocate className='text-gray-500 text-[16px]' />
                                                            <input type="text" placeholder='Area / Sector / Locality' className='bg-transparent' />
                                                        </div>
                                                        <div className='flex items-center gap-[1.2rem] h-[45px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                            <MdOutlineShareLocation className='text-gray-500 text-[16px]' />
                                                            <input type="text" placeholder='Nearby landmark' className='bg-transparent' />
                                                        </div>
                                                        <div className='flex items-center gap-[1.2rem] h-[45px] px-[1.2rem] rounded-[0.6rem] mt-[0.6rem] bg-[#F9F9F9]'>
                                                            <MdOutlinePassword className='text-gray-500 text-[16px]' />
                                                            <input type="number" placeholder='Area pincode' className='bg-transparent' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className='btn bg-red-600 font-medium text-[16px] py-[8px] rounded-[6px] mx-[12px]'>
                                                    Save address
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }

                                {profileId === 'enquiry' &&
                                    <div className='overflow-y-auto'>
                                        <div className='flex items-center gap-[10px]' onClick={() => setShowMobileInnerNav(false)}>
                                            <span><FaChevronLeft className='text-gray-700 text-[14px]' /></span>
                                            <span className='text-[18px] text-gray-800 font-medium'>Enquiry</span>
                                        </div>

                                        <div className='mt-[15px] space-y-[10px] child:bg-white child:shadow-md child:rounded-[4px]'>
                                            {boxData.map((item, i) =>
                                                <InfoBox item={{ ...item, hideEnquiryBtn: true, hideTags: true }} key={i} />
                                            )}
                                        </div>
                                    </div>
                                }


                                {profileId === 'location' &&
                                    <>
                                        <div className='h-full flex flex-col'>
                                            <div className='flex items-center gap-[10px]' onClick={() => setShowMobileInnerNav(false)}>
                                                <span><FaChevronLeft className='text-gray-700 text-[14px]' /></span>
                                                <span className='text-[18px] text-gray-800 font-medium'>Select Location</span>
                                            </div>

                                            <div className='flex-1 child:flex_between child:relative child:px-[10px] child:py-[15px] child:rounded-[10px] child:bg-blue-100 mt-[20px] space-y-[10px]'>
                                                <label for="delhi" className='text-[17px] text-gray-800 font-medium'>
                                                    <div className='flex items-center gap-[5px]'>
                                                        <input type="radio" id="delhi" name="location" value="delhi" />
                                                        Delhi
                                                    </div>
                                                    <img src="/Images/delhi.png" alt="delhi" className='object-cover' />
                                                </label>
                                                <label for="mumbai" className='text-[17px] text-gray-800 font-medium'>
                                                    <div className='flex items-center gap-[5px]'>
                                                        <input type="radio" id="mumbai" name="location" value="mumbai" />
                                                        Mumbai
                                                    </div>
                                                    <img src="/Images/mumbai.png" alt="mumbai" className='object-cover' />
                                                </label>
                                                <label for="pune" className='text-[17px] text-gray-800 font-medium'>
                                                    <div className='flex items-center gap-[5px]'>
                                                        <input type="radio" id="pune" name="location" value="pune" />
                                                        Pune
                                                    </div>
                                                    <img src="/Images/delhi.png" alt="delhi" className='object-cover' />
                                                </label>
                                                <label for="surat" className='text-[17px] text-gray-800 font-medium'>
                                                    <div className='flex items-center gap-[5px]'>
                                                        <input type="radio" id="surat" name="location" value="surat" />
                                                        Surat
                                                    </div>
                                                    <img src="/Images/mumbai.png" alt="mumbai" className='object-cover' />
                                                </label>
                                            </div>

                                            <div>
                                                <button className='rounded-[6px] p-[10px] btn w-full bg-gray-200 text-slate-500 text-[14px]'>
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }

                            </div>

                        </div>
                    </div>
                    {/* } */}

                    <Login showLogin={showLogin} handleShowLogin={handleShowLogin} />

                    <div className={`${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-out fixed top-0 left-0 bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-[1px]`}
                        onClick={() => setShowMobileMenu(false)}
                    >
                        <div className={`relative h-full`}>
                            <div className='absolute left-[7px] bottom-[10px] top-[10px] rounded-[20px] bg-[#E6E5E5] p-[10px] max-w-[40rem] w-full overflow-x-hidden overflow-y-auto' onClick={(e) => e.stopPropagation()}>

                                <div className='bg-[#2E3F6E] rounded-[20px] p-[2rem] h-[10rem] flex items-center justify-between'>
                                    <Link to="/" className="" onClick={closeMobileMenu}>
                                        <img loading='lazy' src="/Images/website-logo.png" alt="Surprise King" title="Surprise King" className="cursor-pointer h-[4rem]" />
                                    </Link>
                                    <span className='text-[14px] bg-slate-100 p-[10px] rounded-[13px] cursor-pointer text-gray-600' onClick={() => {
                                        setShowMobileMenu(false)
                                        unFixedBg()
                                    }}>
                                        <BsCaretLeftFill />
                                    </span>
                                </div>

                                <div className='mt-[10px]'>
                                    <h4 className='text-[#6d6d6d] text-[10px] font-medium pl-[5px]'>NAVIGATION</h4>
                                    <div className='bg-white rounded-[20px] p-[15px] mt-[4px] shadow-md'>
                                        <div className='flex flex-col gap-[16px]'>

                                            {mobileFirstNav?.map((item, index) =>
                                                <div className='flex items-center justify-between' key={index} onClick={() => {
                                                    setMobileNavId(item.id)
                                                    setShowMobileInnerNav(true)
                                                }}>
                                                    <div>
                                                        <div className='flex items-center gap-[11px]'>
                                                            <span className='h-[32px] w-[32px] flex items-center justify-center bg-[#593B8A] rounded-full'><BsBank className='text-[14px] text-white' /></span>
                                                            <h5 className='text-[14px] font-medium text-gray-800'>{item.title}</h5>
                                                        </div>
                                                    </div>
                                                    <FaChevronRight className='text-[14px] text-gray-700' />
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className='mt-[10px]'>
                                    <h4 className='text-[#6d6d6d] text-[10px] font-medium pl-[5px]'>Links</h4>
                                    <div className='bg-white rounded-[20px] p-[15px] mt-[4px] shadow-md'>
                                        <div className='flex flex-col gap-[16px]'>

                                            {mobileFirstNav?.slice(0, 3)?.map((item, index) =>
                                                <div className='flex items-center justify-between' key={index} onClick={() => {
                                                    setMobileNavId(item.id)
                                                    setShowMobileInnerNav(true)
                                                }}>
                                                    <div>
                                                        <div className='flex items-center gap-[11px]'>
                                                            <span className='h-[32px] w-[32px] flex items-center justify-center bg-[#593B8A] rounded-full'><BsBank className='text-[14px] text-white' /></span>
                                                            <h5 className='text-[14px] font-medium text-gray-800'>{item.title}</h5>
                                                        </div>
                                                    </div>
                                                    <FaChevronRight className='text-[14px] text-gray-700' />
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className={`${showMobileInnerNav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-linear absolute inset-0 bg-[#E6E5E5] p-[10px]`}>
                                    <div className='flex items-center gap-[10px] bg-white rounded-[20px] p-[15px] shadow-md' onClick={() => setShowMobileInnerNav(false)}>
                                        <span><FaChevronLeft className='text-gray-700 text-[14px]' /></span>
                                        <span className='text-[16px] text-gray-800'>Menu</span>
                                    </div>

                                    <div className='bg-white rounded-[20px] p-[15px] mt-[4px] shadow-md'>
                                        <div className='flex flex-col gap-[16px]'>
                                            {mobileInnerNav?.filter(item => item?.id === mobileNavId)[0]?.childCaty?.map((InnerNav, index) =>
                                                <Link to='/list/category-one'>
                                                    <div className='flex items-center gap-[11px]' key={index} onClick={closeMobileMenu}>
                                                        <span className='h-[32px] w-[32px] flex items-center justify-center bg-[#593B8A] rounded-full'><BsBank className='text-[14px] text-white' /></span>
                                                        <h5 className='text-[14px] font-medium text-gray-800'>{InnerNav?.title}</h5>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-[20px] flex items-center justify-center gap-[10px]'>
                                    <img src="/Images/facebook.png" alt="facebook" />
                                    <img src="/Images/instagram.png" alt="instagram" />
                                    <img src="/Images/whatsapp.png" alt="whatsapp" />
                                </div>

                                <div className='mt-[20px]'>
                                    <div className='text-gray-600 font-medium text-[12px] flex items-center justify-center gap-[5px]'>Made With <AiFillHeart className='text-red-600 text-[14px]' /> By Info Tech India</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* } */}

                    {openRatingForm &&
                        <div className='fixed inset-0 bg-black bg-opacity-40 flex_center w-full p-[10px]'>
                            <div className='rounded-[10px] bg-white w-full relative p-[20px] flex flex-col gap-[15px] items-center'>
                                <h3 className='text-[18px]'>Rate your experience</h3>
                                <div className='flex items-center gap-[5px] text-[35px] text-gray-300'>
                                    {[...Array(5)].map((item, index) =>
                                        <label>
                                            <span>
                                                <AiTwotoneStar className={index + 1 <= (ratingVal) ? 'text-yellow-400' : ''} />
                                            </span>
                                            <input type="radio" name='rating' value={index + 1} hidden onClick={() => setRatingVal(index + 1)} />
                                        </label>
                                    )}
                                </div>
                                <span className='absolute top-[-5px] right-[-4px] bg-gray-200 p-[4px] rounded-full' onClick={() => setOpenRatingForm(false)}>
                                    <MdOutlineClose className='text-[14px]' />
                                </span>
                            </div>
                        </div>
                    }

                    {openFeedBackForm &&
                        <div className='fixed inset-0 bg-black bg-opacity-40 flex_center w-full p-[10px]'>
                            <div className='rounded-[10px] bg-white w-full relative p-[20px] space-y-[20px]'>
                                <h3 className='text-[18px] text-center'>Help us improve!</h3>
                                <div className='flex_center gap-[10px] text-[35px] text-yellow-400'>
                                    <BsEmojiSmileFill />
                                    <BsEmojiSmileFill />
                                    <BsEmojiSmileFill />
                                    <BsEmojiSmileFill />
                                    <BsEmojiSmileFill />
                                </div>
                                <div className='flex flex-col gap-[20px]'>
                                    <div className='relative'>
                                        <TbMessage2 className='absolute top-[18px] left-[1.2rem] text-gray-500 text-[18px]' />
                                        <textarea rows="3" type="text" className='w-full mt-[0.6rem] px-[1.2rem] pl-[35px] rounded-[0.8rem] py-[10px] bg-gray-100 border-none outline-none text-[16px]' placeholder='Write your feedback!' />
                                    </div>
                                    <button className='btn px-[20px] py-[5px] ml-auto text-[14px]'>Submit</button>
                                </div>
                                <span className='absolute top-[-23px] right-[-4px] bg-gray-200 p-[4px] rounded-full' onClick={() => setOpenFeedBackForm(false)}>
                                    <MdOutlineClose className='text-[14px]' />
                                </span>
                            </div>
                        </div>
                    }
                </div>

                {showNotifications &&
                    <div className='fixed inset-0 bg-black bg-opacity-40 px-[7px] pt-[12px]'>
                        <div className='bg-[#DADCE0] space-y-[10px] rounded-[10px] p-[15px]'>
                            <div className='flex_between'>
                                <h4 className='text-[18px] font-medium'>Notifications</h4>
                                <span onClick={() => setShowNotifications(false)}><MdOutlineClose className='text-[18px]' /></span>
                            </div>

                            <div className='child:flex_between space-y-[5px] child:pb-[5px] child:border-b child:border-[#cfcfcf]'>
                                <div className=''>
                                    <div className='flex items-center gap-[10px]'>
                                        <span className='bg-[#593B8A] p-[10px] rounded-[6px]'>
                                            <TbCake className='text-[18px] text-white' />
                                        </span>
                                        <div className=''>
                                            <h4 className='text-[14px]'>Balloon Decoration</h4>
                                            <span className='text-[12px] text-gray-500'>Delhi, Dwarka More</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button className='btn px-[20px] py-[4px] text-[12px] font-medium bg-gray-400 text-black'>View</button>
                                        <span className='text-[10px] text-gray-500'>3 H ago</span>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-[10px]'>
                                        <span className='bg-[#593B8A] p-[10px] rounded-[6px]'>
                                            <TbCake className='text-[18px] text-white' />
                                        </span>
                                        <div className=''>
                                            <h4 className='text-[14px]'>Cake Shop</h4>
                                            <span className='text-[12px] text-gray-500'>Delhi, Dwarka More</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button className='btn px-[20px] py-[4px] text-[12px] font-medium bg-gray-400 text-black'>View</button>
                                        <span className='text-[10px] text-gray-500'>3 H ago</span>
                                    </div>
                                </div>
                                <div className='border-none'>
                                    <div className='flex items-center gap-[10px]'>
                                        <span className='bg-[#593B8A] p-[10px] rounded-[6px]'>
                                            <TbCake className='text-[18px] text-white' />
                                        </span>
                                        <div className=''>
                                            <h4 className='text-[14px]'>Pre-Wedding</h4>
                                            <span className='text-[12px] text-gray-500'>Delhi, Dwarka More</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button className='btn px-[20px] py-[4px] text-[12px] font-medium bg-gray-400 text-black'>View</button>
                                        <span className='text-[10px] text-gray-500'>3 H ago</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[20px]'>
                                <button className='btn w-full py-[10px] text-[12px]'>VIEW ALL NOTIFICATIONS</button>
                            </div>
                        </div>
                    </div>}
            </div>
        </header >
    )
}

export default Header