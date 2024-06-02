import React, { useState, useEffect } from 'react'
import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { options, popularArea } from '../../data/data';
import { AiOutlineLeft, AiOutlineRight, AiOutlineStock } from 'react-icons/ai';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { FaChevronLeft, FaPlaceOfWorship } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';

const Slider = (props) => {

    const [showOption, setShowOption] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [position, setPosition] = useState(null)
    const [mobileSearchPanel, setMobileSearchPanel] = useState(null)
    const [index, setIndex] = useState(1)

    const { showHeaderForm } = props


    useEffect(() => {
        const inputBox = document.getElementById('formBox')
        window.addEventListener('scroll', () => showHeaderForm(inputBox))
    }, [])


    const inputBoxElement = document.querySelector('.react-datalist-input__textbox')
    inputBoxElement?.addEventListener('click', () => {
        // setValue('')
        setShowOption(true)
        // setShowOption(true)
    })

    const handleOption = (item) => {
        // setValue(item?.value)
        setShowOption(false)
    }

    const handleSearch = () => {
        setShowModal(true)
    }

    const moveBox = (direction) => {
        if (index < (popularArea.length - 4) && direction === "right") {
            setPosition(-100 * index)
            // setPosition(-100 * index)
            setIndex((index + 1))
            // setIndex(index + 1)
        }
        if (index > 1 && direction === "left") {
            setPosition(position + 100)
            // setPosition(position + 100)
            setIndex((index - 1))
            // setIndex(index - 1)
        }
    }

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row m-[0.8rem] gap-[0.8rem] mx-[1rem] lg:mx-[3.2rem] slider">
                <div className={`relative hidden md:block flex-[3] lg:flex-[0.18] w-full mt-[0.8rem] h-[32.5rem]`}>
                    <div className='flex flex-col gap-[1.2rem] child:flex child:items-center child:gap-[0.8rem] child:p-[0.8rem] child:rounded-sm bg-white p-[0.8rem] rounded-[0.6rem] border shadow-lg child-hover:bg-gray-100 child:shadow-md child:cursor-pointer h-full'>
                        <div className='border-l-[3px] border-green-500'>
                            <img loading='lazy' src="/Images/SideBar/car.png" alt="" />
                            <span className='text-[1.4rem]'>Milks and Dairies</span>
                        </div>
                        <div className='border-l-[3px] border-blue-800'>
                            <img loading='lazy' src="/Images/SideBar/doctor.png" alt="" />
                            <span className='text-[1.4rem]'>Clothing & beauty</span>
                        </div>
                        <div className='border-l-[3px] border-slate-500'>
                            <img loading='lazy' src="/Images/Menu/menu_3.png" alt="" className="h-11" />
                            <span className='text-[1.4rem]'>Pet Foods & Toy</span>
                        </div>
                        <div className='border-l-[3px] border-purple-600'>
                            <img loading='lazy' src="/Images/SideBar/review.png" alt="" />
                            <span className='text-[1.4rem]'>Baking materilal</span>
                        </div>
                        <div className='border-l-[3px] border-yellow-500'>
                            <img loading='lazy' src="/Images/SideBar/car.png" alt="" />
                            <span className='text-[1.4rem]'>Fresh Fruit</span>
                        </div>
                    </div>
                    <div className='absolute bottom-[-10px] left-0 right-0 mx-auto flex items-center justify-center'>
                        <Link to="/list/category">
                            <span title='View All' className='cursor-pointer'>
                                <img loading='lazy' src="Images/SideBar/plus-icon.webp" alt="" className='h-[2.4rem]' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex-[7] lg:flex-[0.82] w-full relative mt-[0.8rem]'>
                    <div className='relative z-[-1]'>
                        <Carousel showIndicators={false} showThumbs={false} showArrows={false} autoPlay={false} transitionTime={2500} showStatus={false} infiniteLoop={true} animationHandler={'fade'} className='child:rounded-[0.8rem]'>
                            <div>
                                <img loading='lazy' src="/Images/desktop_bg.webp" alt="" className='h-[32.5rem] object-cover' />
                            </div>
                            {/* <div>
                                <img loading='lazy' src="/Images/Slider/slider_2.jpeg" alt="" className='h-[32.5rem] object-cover' />
                            </div>
                            <div>
                                <img loading='lazy' src="/Images/Slider/slider_3.png" alt="" className='h-[32.5rem] object-cover' />
                            </div> */}
                        </Carousel>
                        <div className='absolute top-0 right-0 bg-black w-full h-full left-0 bottom-0 opacity-50 rounded-[0.8rem]' />
                    </div>
                    <h2 className='text-white text-[3rem] font-medium absolute top-[4.8rem] text-center left-0 right-0 mx-auto'>India’s Best Local Search Engine</h2>
                    <div className="absolute top-0 bottom-0 right-0 left-0 mx-[2rem] sm:m-auto flex items-center flex-col justify-center max-w-[76.8rem] px-[1rem] lg:px-[0rem]">
                        <div className='text-white max-w-[76.8rem] w-full pb-[1.6rem] pt-[0.8rem] rounded-[1.6rem] h-[9.2rem] bg-black bg-opacity-30 backdrop-blur-sm pl-[1.4rem] sm:pl-[2rem]'>
                            <ul className='flex items-center gap-[2.5rem] sm:gap-[4.8rem] text-[1.4rem] whitespace-nowrap'>
                                <li className='active:border-b-2 border-b-2'>All Searches</li>
                                <li className='active:border-b-2'>Rent</li>
                                <li className='active:border-b-2'>Commercial</li>
                                <li className='active:border-b-2'>Restaurant</li>
                                <li className='active:border-b-2'>Doctor</li>
                            </ul>
                        </div>
                        {showModal && <div className='w-screen h-screen hidden md:block fixed top-0 left-0 right-0 bg-opacity-50 bg-black z-[2] backdrop-blur-[1px]' onClick={() => setShowModal(false)} />}
                        <div className={`flex items-center mt-[-5rem] child:justify-between bg-white z-[3] rounded-full w-full h-[6rem] ${showOption && 'rounded-bl-lg'}`}>
                            <div className="flex items-center child:items-center child:p-[0.8rem] w-full" id="formBox">
                                <div className='flex-[0.2] relative border-r flex'>
                                    <DatalistInput
                                        className='absolute top-[2px] right-0'
                                        placeholder="Ahemedabad"
                                        // value={value}
                                        // setValue={setValue}
                                        onSelect={(item) => handleOption(item)}
                                        items={options}
                                    // onClick={() => handleClick()}
                                    />
                                    <FaPlaceOfWorship className={`text-gray-400 mr-[0.8rem] text-[1.6rem]`} />
                                </div>
                                <div className="flex-[0.8] relative text-[1.4rem] md:flex hidden" onBlur={() => setShowModal(true)}>
                                    <input type="text" placeholder="Search for locality, landmark, project or builder" className="outline-none border-none w-full mr-[0.8rem]"
                                        onClick={handleSearch} />
                                    <button className='btn h-[4.8rem] w-[14.4rem]'>Search</button>
                                </div>
                                <div className="flex-[0.8] relative text-[1.4rem] flex md:hidden">
                                    <input type="text" placeholder="Search for locality, landmark, project or builder" className="outline-none border-none w-full mr-[0.8rem]"
                                        onClick={() => setMobileSearchPanel(true)} />
                                    <button className='btn h-[4.8rem] w-[14.4rem]'>Search</button>
                                </div>
                            </div>
                            {showModal &&
                                <div className='hidden md:flex flex-col items-start max-w-[58rem] w-full p-[1.2rem] absolute bottom-[-18rem] lg:bottom-[-17.5rem] right-[1.2rem] space-y-5 bg-[#ECECEC] rounded-[0.6rem]'>
                                    <div className='space-y-3 w-full p-[0.4rem]'>
                                        <p className='text-[1.4rem]'>Check out most popular serches</p>
                                        <div className='flex items-center justify-start gap-[1rem] sm:gap-[1.6rem] child:px-[2rem] child:py-[0.6rem] child:whitespace-nowrap child:cursor-pointer text-[#C98200] child:bg-[#FFE2AD] child:rounded-2xl child:text-[1.4rem]'>
                                            <div className='hover:bg-yellow-100'>East Campus</div>
                                            <div className='hover:bg-yellow-100'>West Campus</div>
                                            <div className='hover:bg-yellow-100'>North Campus</div>
                                        </div>
                                    </div>
                                    <div className='bg-white space-y-1 rounded-[0.6rem] max-w-[52.5rem] w-full p-[1.6rem]'>
                                        <p className='font-medium text-[1.6rem]'>Choose The Product You Are Applying For</p>
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
                    </div>

                    <div className={`flex flex-col sm:flex-row items-center child:flex child:items-center absolute bottom-[2rem] sm:bottom-[4rem] gap-[1rem] sm:gap-[1.6rem] p-[0.8rem] left-0 right-0 justify-center text-white rounded-sm mx-auto ${showModal && 'z-[-1]'}`}>
                        <div className='space-x-[0.7rem]'>
                            <AiOutlineStock className='text-[3rem] md:text-[1.6rem]' />
                            <span className='text-[1.8rem] md:text-[1.4rem] whitespace-nowrap'>Search History</span>
                        </div>
                        <div className='flex items-center'>
                            <span className={`md:block hidden rounded-full p-[0.8rem] bg-black cursor-pointer hover:bg-gray-200 text-[1.6rem] hover:text-black mx-[0.4rem] ${index > 1 ? 'block' : 'hidden'}`} onClick={() => moveBox("left")}><AiOutlineLeft /></span>
                            <div className='overflow-auto max-w-[40rem] sm:max-w-[51.2rem] whitespace-nowrap container'>
                                <div className='flex items-center gap-[0.8rem] child:bg-transparent child:px-[1.2rem] child:py-[0.6rem] child:rounded-[0.6rem] child:relative child:bg-gray-100 child:bg-opacity-20 text-[1.4rem] child:flex child:items-center child:gap-[1rem] lg:child:gap-[2rem]' style={{ transform: `translateX(${position}px)` }}>
                                    {popularArea.map((item, i) =>
                                        <div key={i}>
                                            <span>{item}</span>
                                            <AiOutlineRight />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <span className='md:block hidden rounded-full p-[0.8rem] bg-black cursor-pointer hover:bg-gray-200 text-[1.6rem] hover:text-black mx-[0.4rem]' onClick={() => moveBox("right")}><AiOutlineRight /></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* {mobileSearchPanel && */}
            <div className={`${mobileSearchPanel ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-500 ease-out fixed inset-0 bg-white z-[40] block md:hidden`}>
                <div className='p-[10px]'>
                    <div className='flex items-center justify-between'>
                        <span onClick={() => setMobileSearchPanel(false)}><FaChevronLeft className='text-[16px] text-gray-700' /></span>
                        <h4 className='text-[16px] text-gray-800'>Search</h4>
                        <span><IoMdSearch className='text-gray-600 text-[20px]' /></span>
                    </div>

                    <div className='mt-[10px] w-full border p-[8px] rounded-[6px]'>
                        <input type="text" placeholder='Search' className='outline-none border-none text-[14px] w-full' />
                    </div>

                    <div className='mt-[20px]'>
                        <h5 className='text-[16px]'>Trending Searches</h5>
                        <div className='mt-[10px] flex items-center flex-wrap gap-[1rem] child:rounded-full child:text-[12px] text-gray-800 child:px-[14px] child:py-[4px] font-medium child:bg-slate-200'>
                            <span>Politics</span>
                            <span>Fashion</span>
                            <span>Tech</span>
                            <span>Lifestyle</span>
                            <span>Sports</span>
                            <span>World</span>
                            <span>People</span>
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        <h5 className='text-[16px]'>Top Searches Category</h5>
                        <div className='mt-[10px] flex items-center flex-wrap gap-[1rem] child:rounded-full child:text-[12px] text-gray-800 child:px-[14px] child:py-[4px] font-medium child:bg-slate-200'>
                            <span>Politics</span>
                            <span>Fashion</span>
                            <span>Tech</span>
                            <span>Lifestyle</span>
                            <span>Sports</span>
                            <span>World</span>
                            <span>People</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* } */}

        </div >
    )
}

export default Slider
