import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiTwotoneStar } from 'react-icons/ai';
import { BsFillCaretDownFill, BsShare, BsStarFill, BsUiChecksGrid } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaChevronRight, FaRegCalendarCheck, FaRupeeSign } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdContentCopy, MdOutlineCategory, MdOutlineClose, MdOutlineLocationOn, MdOutlineMarkEmailUnread, MdOutlineRateReview, MdOutlineSupportAgent } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import ItemCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import EnquiryForm from '../../components/EnquiryForm';
import Menu from '../../components/Menu/Menu';
import './style.css';
import SendEnquiry from '../../components/SendEnquiry';


// const ratingData = [
//     {
//         rateVal: 4.1,
//         title: 'Sound Quality'
//     },
//     {
//         rateVal: 3.5,
//         title: 'Bass'
//     },
//     {
//         rateVal: 4.3,
//         title: 'Design & Build'
//     },
//     {
//         rateVal: 4.2,
//         title: 'Battery Backup'
//     },
// ]


const NewDetails = () => {

    const [showImages, setShowImages] = useState(false)
    const [showSingleImages, setShowSingleImages] = useState(false)
    const [showSingleImageForGallery, setShowSingleImageForGallery] = useState(false)
    const [showTab, setShowTab] = useState(4)
    const [showCaty, setShowCaty] = useState(false)
    const [showShareMenu, setShowShareMenu] = useState(false)
    const [ratingVal, setRatingVal] = useState(1)
    const [openEnquiry, setOpenEnquiry] = useState(false)

    const list = [
        "/Images/DetailsPage/img__1.jpeg",
        "/Images/DetailsPage/img__2.jpeg",
        "/Images/DetailsPage/img__3.webp",
        "/Images/DetailsPage/img__4.jpg",
        "/Images/DetailsPage/img__2.jpeg",
    ];

    const photoGallery = [
        "/Images/DetailsPage/img__1.jpeg",
        "/Images/DetailsPage/img__2.jpeg",
        "/Images/DetailsPage/img__3.webp",
        "/Images/DetailsPage/img__4.jpg",
        "/Images/DetailsPage/img__2.jpeg",
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const showToggleTab = (index) => {
        setShowTab(index)
    }

    const copyText = () => {
        function myFunction() {
            const copyText = document.getElementById("myInput");

            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999);

            navigator.clipboard.writeText(copyText.value);

            // Alert the copied text
            alert("Copied the text: " + copyText.value);
        }
        myFunction();
    }

    return (
        <div className='flex flex-col mb-[4rem]'>
            <div>
                <div className='xl:flex hidden items-center bg-white justify-evenly shadow-lg px-[3.2rem]'>
                    <button className="btn flex items-center justify-center w-[16rem] h-[4rem] gap-[0.8rem] whitespace-nowrap border-r text-[1.6rem]" onClick={() => setShowCaty(!(showCaty))}>
                        <MdOutlineCategory />
                        Categories
                        <BsFillCaretDownFill className={`${showCaty && 'rotate-180'}`} />
                    </button>
                    <div className="">
                        <Menu hide={true} />
                    </div>
                </div>
                {/* {showCaty && <div className='w-screen h-screen absolute top-0 left-0 right-0 bg-opacity-50 bg-black z-[2] backdrop-blur-[1px]' />} */}
                {showCaty &&
                    <div className={`absolute mt-[0.8rem] w-[26rem] mx-[4rem] z-[3]`}>
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
                                <img loading='lazy' src="/Images/Menu/menu_3.png" alt="" className="h-[2.8rem]" />
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
                    </div>
                }
            </div>
            <div className='flex items-center absolute top-[12.5rem] left-[4rem]'>
                <div className='flex items-center gap-[0.8rem] text-[12px]'>
                    <Link to="/" className='text-blue-600'>Home</Link> <FaChevronRight className='text-[10px] text-gray-600' />
                    <Link to="/list/Anniversary-Decorators" className='text-blue-600'>List</Link> <FaChevronRight className='text-[10px] text-gray-600' />
                    <Link>Details</Link>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[1.2rem] mt-[2rem] mb-[50px] xl:mt-[4.8rem] xl:mx-[3.2rem]">
                <div className='flex-[0.7] space-y-[2rem]'>
                    <div className='h-[30rem] relative mx-[1rem] sm:mx-[0rem]'>
                        <div className='grid h-full grid-cols-2 gap-[0.4rem] overflow-hidden child:cursor-pointer rounded-[0.8rem]' onClick={() => setShowImages(true)}>
                            <div className=''>
                                <img loading='lazy' src={list[0]} alt="img" className='h-full object-cover' />
                            </div>
                            <div className='grid grid-cols-2 gap-[0.4rem] child:h-full child:object-cover'>
                                <img loading='lazy' src={list[1]} alt="img" />
                                <img loading='lazy' src={list[1]} alt="img" />
                                <img loading='lazy' src={list[2]} alt="img" />
                                <img loading='lazy' src={list[3]} alt="img" />
                            </div>
                        </div>
                        <button className='flex items-center gap-[0.8rem] absolute bottom-[2rem] right-[3.2rem] bg-white p-[0.8rem] rounded-[0.6rem] text-[1.6rem]' onClick={() => setShowImages(true)}>
                            <BsUiChecksGrid />Show all photos
                        </button>
                    </div>
                    <div className='bg-white child:px-[2rem] child:sm:px-[1.2rem] child:py-[0.8rem] flex flex-col py-[1.2rem]'>
                        <div className='mb-[2rem] relative'>
                            <div className='flex flex-col gap-[1.2rem]'>
                                <div className='flex justify-between sm:flex-row flex-col gap-[1.2rem] items-baseline'>
                                    <div>
                                        <div className='flex items-baseline sm:items-center gap-[0.8rem]'>
                                            <h2 className='text-[2.8rem] sm:text-[2.4rem] leading-[1.4] font-medium'>
                                                Bharti Taneja's Alps Beauty Academy
                                            </h2>
                                        </div>
                                        <p className='my-[0.5rem] text-[1.9rem] sm:text-[1.4rem] text-slate-700 flex items-center gap-[0.8rem]'>
                                            <MdOutlineLocationOn className='text-[1.6rem]' />
                                            Rajouri Garden, Delhi <CiLocationArrow1 className='text-blue-600 text-[1.8rem]' />
                                        </p>
                                        <div className='flex items-center gap-[0.8rem] text-slate-700'>
                                            <MdOutlineCategory className='text-[1.6rem]' />
                                            <span className='text-[1.6rem] sm:text-[1.3rem]'>
                                                {/* Categories • Event, Marriage, Birthday... */}
                                                Categories:
                                            </span>
                                            <div className='flex items-center max-w-[28rem] md:max-w-fit md:flex-wrap overflow-x-auto gap-4 child:border child:rounded-full custom-scrollbar child:border-slate-300 child:px-[1.5rem] text-[1.6rem] md:text-[1.2rem] child:py-[0.2rem] child-hover:bg-slate-200 child:cursor-pointer'>
                                                <span>Event</span>
                                                <span>Marriage</span>
                                                <span>Birthday</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='md:block hidden'>
                                        <div className='flex flex-col items-start sm:items-end gap-[0.8rem]'>
                                            <div className='flex items-center gap-[0.4rem] text-[1.8rem]'>
                                                <BsStarFill className='text-yellow-400' />
                                                <BsStarFill className='text-yellow-400' />
                                                <BsStarFill className='text-yellow-400' />
                                                <BsStarFill className='text-slate-200' />
                                                <BsStarFill className='text-slate-200' />
                                            </div>
                                            <h2 className='text-[3rem] sm:text-[2.4rem] font-medium'>3/5</h2>
                                        </div>
                                        <p className='text-slate-700 text-[2rem] sm:text-[1.6rem]'>Based on 65 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    <div><span className='text-red-500 text-[2rem] sm:text-[1.6rem]'>Closed Now -</span> <span className='text-slate-700 text-[2rem] sm:text-[1.4rem]'>10 AM - 8 PM</span></div>
                                    <span className='mt-[0.5rem] text-slate-700 flex items-center gap-[0.8rem] text-[2rem] sm:text-[1.6rem]'><FiPhoneCall /> +91-7503-XXX-088 <AiOutlineInfoCircle /></span>
                                </div>
                                <div className='flex items-center gap-[1.2rem]'>
                                    <button className='btn px-[2rem] py-[0.5rem] bg-[#2E3F6E] flex items-center gap-[0.8rem] justify-center text-[2rem] sm:text-[1.6rem]'><MdOutlineRateReview /> Write Review</button>
                                    <button className='flex items-center gap-[0.8rem] justify-center hover:bg-slate-200 h-[4rem] w-[9.6rem] rounded-full text-[2rem] sm:text-[1.6rem]' onClick={() => setShowShareMenu(true)}><BsShare /> Share</button>
                                </div>
                            </div>

                            <div className='absolute bottom-[1rem] right-[1rem] flex items-center gap-[0.8rem]'>
                                <img loading='lazy' src="/Images/verified.png" alt="" className='right-[0.4rem] h-[3.2rem] object-cover' />
                                <span className='text-green-600 font-medium text-[1.6rem]'>Verify</span>
                            </div>
                        </div>
                        <hr />
                        <div className='flex items-center gap-[2rem] child:cursor-pointer text-slate-700 text-[2rem] whitespace-nowrap overflow-x-auto sm:text-[1.4rem] font-medium'>
                            <span onClick={() => showToggleTab(4)} className={`${showTab === 4 && 'border-b-2 border-blue-500'} pb-[0.4rem]`}>Reviews</span>
                            <span onClick={() => showToggleTab(1)} className={`${showTab === 1 && 'border-b-2 border-blue-500'} pb-[0.4rem]`}>About Company</span>
                            <span onClick={() => showToggleTab(2)} className={`${showTab === 2 && 'border-b-2 border-blue-500'} pb-[0.4rem]`}>Photos</span>
                            <span onClick={() => showToggleTab(3)} className={`${showTab === 3 && 'border-b-2 border-blue-500'} pb-[0.4rem]`}>Videos (1)</span>
                            <span onClick={() => showToggleTab(5)} className={`${showTab === 5 && 'border-b-2 border-blue-500'} pb-[0.4rem]`}>More Services</span>
                        </div>
                    </div>
                    {showTab === 1 &&
                        <div className='bg-white child:px-[1.2rem] p-[1.2rem] rounded-sm pt-[2rem]'>

                            <h2 className='font-medium text-[18px] sm:text-[2rem] mb-[0.8rem]'>Overview</h2>

                            <div className='text-[14px] sm:text-[1.6rem] pb-[1.6rem]'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem quidem aut dolore autem voluptates similique. Voluptas nulla possimus labore.</p>
                                <button className='text-blue-600 underline'>Read More</button>
                            </div>
                            <hr />
                            <div className='flex flex-col gap-[0.8rem] py-[1.2rem]'>
                                <h2 className='text-[17px] sm:text-[2rem] font-medium'>Working Area</h2>
                                <span className='text-[14px] sm:text-[1.6rem]'>Delhi</span>
                            </div>
                            <hr />
                            <div className='flex flex-col gap-[0.8rem] py-[1.2rem]'>
                                <h2 className='text-[17px] sm:text-[2rem] font-medium'>More Information</h2>
                                <div className='flex flex-col gap-[1rem] sm:flex-row sm:items-center justify-between mb-[1.6rem]'>
                                    <div>
                                        <h3 className='text-red-700 text-[16px] sm:text-[1.8rem]'>Contact Person:</h3>
                                        <span className='text-slate-700 text-[14px] sm:text-[1.6rem]'>Sarika Sharma</span>
                                    </div>
                                    <div>
                                        <h3 className='text-red-700 text-[16px] sm:text-[1.8rem]'>Address:</h3>
                                        <p className='text-slate-700 text-[14px] sm:text-[1.6rem]'>A8, 3 Rd Floor, Rajori Garden, Rajouri Garden, Delhi - <br /> 110027</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {showTab === 2 &&
                        <div className='bg-white relative p-[1.2rem] space-y-[1rem]'>
                            <h2 className='text-[2rem] font-medium'>Photos (30)</h2>
                            <hr />
                            <div className='flex flex-col gap-[2rem]'>
                                <div className='grid grid-cols-2 md:flex flex-wrap gap-[2rem] child:w-[25.6rem] child:object-cover child:cursor-pointer child:rounded-[0.4rem]'>
                                    {photoGallery.map((item, i) =>
                                        <img key={i} src={item} alt="" onClick={() => showSingleImageForGallery(true)} />
                                    )}
                                </div>
                                <button className='btn text-[1.6rem] w-fit px-[2rem] py-[0.5rem] mx-auto'>Load More</button>
                            </div>
                        </div>
                    }
                    {showTab === 3 &&
                        <div className='bg-white p-[1.2rem] space-y-[1rem]'>
                            <h2 className='text-[2rem] font-medium'>Videos (1)</h2>
                            <hr />
                            <div className='flex flex-wrap gap-[2rem] child:rounded-[0.4rem] child:w-full child:md:w-[25.6rem] child:object-cover child:cursor-pointer'>
                                <video width="200" height="300" controls src="/Video/house__video.mp4"></video>
                                <video width="200" height="300" controls src="/Video/house__video.mp4"></video>
                                <video width="200" height="300" controls src="/Video/house__video.mp4"></video>
                                <video width="200" height="300" controls src="/Video/house__video.mp4"></video>
                            </div>
                        </div>
                    }
                    {showTab === 4 &&
                        <div className='bg-white'>
                            <div className='p-[2rem] sm:p-[1.2rem]'>
                                <h2 className='text-[2.5rem] sm:text-[2rem] font-medium mb-[2rem]'>Ratings & Reviews</h2>
                                <div className='flex sm:flex-row flex-col child:flex sm:items-center gap-[4rem] md:gap-[3rem]'>
                                    <div className='gap-[3rem] justify-between items-center md:pr-[3rem] md:border-r'>
                                        <div className='flex flex-col items-center pr-[6rem] md:pr-0 border-r md:border-0'>
                                            <div className='flex items-center gap-[0.5rem]'>
                                                <span className='text-[32px]'>4</span>
                                                <AiTwotoneStar className='text-[2.3rem]' />
                                            </div>
                                            <span className='text-[12px] sm:text-[1.4rem] text-gray-500 text-center'>
                                                8,09,694 Ratings
                                                <br />
                                                &
                                                <br />
                                                58,800 Reviews
                                            </span>
                                        </div>

                                        <div>

                                            <div className='child:flex flex items-center child:items-center gap-[1.3rem]'>
                                                <div className='gap-[0.3rem]'><span className='text-[12px]'>5</span><AiTwotoneStar className='text-[8px]' /></div>
                                                <div className='gap-[1rem]'>
                                                    <div className='relative w-[100px] h-[5px] rounded-full overflow-hidden bg-gray-300'>
                                                        <span className='w-full bg-green-700 absolute left-0 top-0 bottom-0 right-0'></span>
                                                    </div>
                                                    <span className='text-[12px] text-gray-500'>1000</span>
                                                </div>
                                            </div>

                                            <div className='child:flex flex items-center child:items-center gap-[1.3rem]'>
                                                <div className='gap-[0.3rem]'><span className='text-[12px]'>4</span><AiTwotoneStar className='text-[8px]' /></div>
                                                <div className='gap-[1rem]'>
                                                    <div className='relative w-[100px] h-[5px] rounded-full overflow-hidden bg-gray-300'>
                                                        <span className='w-[50%] bg-green-700 absolute left-0 top-0 bottom-0 right-0'></span>
                                                    </div>
                                                    <span className='text-[12px] text-gray-500'>500</span>
                                                </div>
                                            </div>

                                            <div className='child:flex flex items-center child:items-center gap-[1.3rem]'>
                                                <div className='gap-[0.3rem]'><span className='text-[12px]'>3</span><AiTwotoneStar className='text-[8px]' /></div>
                                                <div className='gap-[1rem]'>
                                                    <div className='relative w-[100px] h-[5px] rounded-full overflow-hidden bg-gray-300'>
                                                        <span className='w-[40%] bg-green-700 absolute left-0 top-0 bottom-0 right-0'></span>
                                                    </div>
                                                    <span className='text-[12px] text-gray-500'>300</span>
                                                </div>
                                            </div>

                                            <div className='child:flex flex items-center child:items-center gap-[1.3rem]'>
                                                <div className='gap-[0.3rem]'><span className='text-[12px]'>2</span><AiTwotoneStar className='text-[8px]' /></div>
                                                <div className='gap-[1rem]'>
                                                    <div className='relative w-[100px] h-[5px] rounded-full overflow-hidden bg-gray-300'>
                                                        <span className='w-[30%] bg-green-700 absolute left-0 top-0 bottom-0 right-0'></span>
                                                    </div>
                                                    <span className='text-[12px] text-gray-500'>200</span>
                                                </div>
                                            </div>

                                            <div className='child:flex flex items-center child:items-center gap-[1.3rem]'>
                                                <div className='gap-[0.3rem]'><span className='text-[12px]'>1</span><AiTwotoneStar className='text-[8px]' /></div>
                                                <div className='gap-[1rem]'>
                                                    <div className='relative w-[100px] h-[5px] rounded-full overflow-hidden bg-gray-300'>
                                                        <span className='w-[20%] bg-green-700 absolute left-0 top-0 bottom-0 right-0'></span>
                                                    </div>
                                                    <span className='text-[12px] text-gray-500'>100</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* 
                                    <div className='hidden justify-between gap-[1rem] md:gap-[3rem]'>

                                        {ratingData.map((item, index) =>
                                            <div className='flex flex-col items-center gap-[0.5rem] max-w-[13rem]' key={index}>
                                                <div className='rating_summary_box'>
                                                    <div className='relative h-[62px] w-[62px]'>
                                                        <svg>
                                                            <circle cx='28' cy='28' r='28'></circle>
                                                            <circle cx='28' cy='28' r='28' style={{ strokeDashoffset: (176 - ((176 * (item.rateVal * 100) / 5) / 100)) }}></circle>
                                                        </svg>
                                                        <div className='absolute inset-0 m-auto flex items-center justify-center text-[2rem] text-gray-800 font-medium'>
                                                            <h3>{item.rateVal}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className='text-[12px] md:text-[14px] font-medium text-gray-900'>{item.title}</h4>
                                            </div>
                                        )}

                                    </div> */}
                                </div>
                            </div>

                            <div className='child:border-b child:p-[2rem] mt-[3rem]'>

                                <div className='bg-gray-100'>
                                    <textarea name="" id="" rows='7' placeholder='Write Review' className='px-[1.2rem] rounded-[0.8rem] py-[0.8rem] outline-none placeholder:text-[1.4rem] border-2 border-gray-200 w-full'></textarea>

                                    <div className='flex items-center gap-[5px] mt-2 text-[18px] text-gray-300 child:cursor-pointer'>
                                        {[...Array(5)].map((item, index) =>
                                            <label>
                                                <span>
                                                    <AiTwotoneStar className={index + 1 <= (ratingVal) ? 'text-yellow-400' : ''} />
                                                </span>
                                                <input type="radio" name='rating' value={index + 1} hidden onClick={() => setRatingVal(index + 1)} />
                                            </label>
                                        )}
                                    </div>

                                    <input type="file" />

                                    <button className='btn px-6 py-2 text-[14px]'>Submit Review</button>
                                </div>

                                {[0, 1, 2, 3].map((item, index) =>
                                    <div className='space-y-[1.5rem]'>
                                        <div>
                                            <div className='flex_between'>
                                                <h3 className='text-[2rem] sm:text-[1.6rem] font-medium'>Sanjay Kumar</h3>
                                                <span className='text-gray-500 flex items-center gap-[3px]'>
                                                    <FaRegCalendarCheck className='text-[10px]' />
                                                    <span className='text-[12px]'>17-03-2024</span>
                                                </span>
                                            </div>
                                            <span className='flex items-center gap-[0.3rem] bg-green-700 rounded-[0.4rem] px-[0.5rem] py-[0.3rem] w-fit text-white'>
                                                <span className='text-[12px]'>4</span>
                                                <BsStarFill className='text-[8px]' />
                                            </span>
                                        </div>
                                        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.</p>

                                        {/* <div className='flex items-center gap-[3rem] child:flex child:items-center child:gap-[1rem] child:text-gray-700 child:cursor-pointer'>
                                            <div>
                                                <FiThumbsUp className='text-[2rem] sm:text-[1.6rem]' />
                                                <span className='text-[2rem] sm:text-[1.6rem] font-medium'>
                                                    Helpful
                                                </span>
                                            </div>
                                            <div>
                                                <FaRegComment className='text-[2rem] sm:text-[1.6rem]' />
                                                <span className='text-[2rem] sm:text-[1.6rem] font-medium'>
                                                    Comment
                                                </span>
                                            </div>
                                            <div>
                                                <BsShare className='text-[2rem] sm:text-[1.6rem]' />
                                                <span className='text-[2rem] sm:text-[1.6rem] font-medium'>
                                                    Share
                                                </span>
                                            </div>
                                        </div>  */}

                                    </div>
                                )}
                            </div>
                        </div>
                    }

                    {showTab === 5 &&
                        <div className='bg-white p-[0.8rem]'>
                            <ItemCarousel responsive={responsive} minimumTouchDrag={100} infinite={true} className='detail__Item'>
                                {[0, 1].map((item, index) =>
                                    <div className='flex flex-col gap-[0.5rem] max-w-[90%] md:max-w-[21rem]' key={index}>
                                        <div className=''>
                                            <img src="/Images/DetailsPage/cake.jpg" alt="service" className='rounded-[0.6rem]' />
                                        </div>
                                        <div>
                                            <div className='flex gap-[1rem]'>
                                                <h4 className='text-[2rem] sm:text-[1.6rem] font-medium'>Sweet Cake</h4>
                                                <span className='flex items-center gap-[0.4rem] text-[12px]'>
                                                    <BsStarFill className='text-yellow-500' />
                                                    <BsStarFill className='text-yellow-500' />
                                                    <BsStarFill className='text-yellow-500' />
                                                    <BsStarFill className='text-yellow-500' />
                                                    <BsStarFill className='text-gray-300' />
                                                </span>
                                            </div>
                                            <div className='flex items-center child:flex child:items-center justify-between mt-[0.5rem]'>
                                                <span><FaRupeeSign className='text-[12px]' />
                                                    <span className='text-[14px] sm:text-[1.4rem] font-medium'>999</span>
                                                </span>
                                                <div className='gap-[1rem]'>
                                                    <button className='btn px-[1.3rem] py-[0.4rem] text-[13px]'>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </ItemCarousel>
                        </div>
                    }
                </div>
                <div className='flex-[0.3] space-y-[1rem]'>

                    <div className='md:block hidden bg-white p-[3rem] rounded-[0.8rem]'>
                        <div className='flex flex-col gap-[1.5rem] child:flex child:items-center child:justify-center child:rounded-[1rem]'>
                            <button className='bg-sky-500 flex-col h-[6.5rem]'>
                                <span className='text-[1.8rem] text-white font-medium' onClick={() => setOpenEnquiry(true)}>Enquiry Now</span>
                                <span className='text-[1.4rem] text-white'>Get free details instantly via SMS</span>
                            </button>
                            <button className='bg-green-600 gap-[1rem] text-white h-[5rem]'>
                                <span><FiPhoneCall className='text-[1.6rem]' /> </span>
                                <span className='text-[1.6rem]'>
                                    08147950301
                                </span>
                            </button>
                            <button className='border border-blue-800 gap-[1rem] h-[5rem]'>
                                <span><RiWhatsappFill className='text-[2rem] text-green-700' /> </span>
                                <span className='text-[1.6rem] text-blue-700'>Live Chat</span>
                            </button>
                        </div>
                    </div>

                    {/* <div className='flex flex-col px-[3.2rem] gap-[0.8rem] py-[2rem] bg-white rounded-[0.6rem]'>
                        <h2 className='font-medium text-[1.8rem]'>Related Services</h2>
                        <div className='flex gap-[0.8rem] border border-slate-300 items-center rounded-[0.6rem]'>
                            <img loading='lazy' src="/Images/DetailsPage/img__1.jpeg" alt="" className='rounded-[0.6rem] h-[9.6rem] object-contain m-[1.2rem]' />
                            <p className='font-medium w-[12.8rem] text-[1.6rem]'>Business intelligence & analytics training</p>
                        </div>
                        <div className='flex gap-[0.8rem] border border-slate-300 items-center rounded-[0.6rem]'>
                            <img loading='lazy' src="/Images/DetailsPage/img__2.jpeg" alt="" className='rounded-[0.6rem] h-[9.6rem] object-contain m-[1.2rem]' />
                            <p className='font-medium w-[12.8rem] text-[1.6rem]'>Business intelligence & analytics training</p>
                        </div>
                    </div> */}
                    <div>
                        <EnquiryForm />
                    </div>
                    <div className='bg-white md:rounded-[0.8rem] overflow-hidden pb-[0.8rem] flex flex-col gap-[2rem] mx-[10px] rounded-[6px] shadow-md'>
                        <div className='space-y-[0.5rem] bg-gradient-to-b from-blue-300 to-white'>
                            <h2 className='text-center text-[navy] font-medium border-b p-[0.8rem] text-[17px]'>Verified supplier</h2>
                            <div className='space-y-[1rem] px-[2.8rem] p-[0.8rem] child:text-[14px] child:font-medium'>
                                <div className='underline'>Info Tech India Privated Limited</div>
                                <div className='text-[navy]'>Owner Name: Manav Chaudhary</div>
                            </div>
                        </div>
                        <div className='flex flex-wrap child:w-[110px] gap-[1.2rem] justify-between child:flex child:flex-col px-[2.8rem]'>
                            <div>
                                <span className='text-[12px] text-slate-600'>Store rating</span>
                                <span className='text-[14px] font-medium text-slate-800'>4.7/5</span>
                            </div>
                            <div>
                                <span className='text-[12px] text-slate-600'>On-time delivery rate</span>
                                <span className='text-[14px] font-medium text-slate-800'>100.0%</span>
                            </div>
                            <div>
                                <span className='text-[12px] text-slate-600'>Response time</span>
                                <span className='text-[14px] font-medium text-slate-800'>7h</span>
                            </div>
                            <div>
                                <span className='text-[12px] text-slate-600'>Transactions</span>
                                <span className='text-[14px] font-medium text-slate-800'>$20,000+</span>
                            </div>
                            <div>
                                <span className='text-[12px] text-slate-600'>Main markets</span>
                                <span className='text-[14px] font-medium underline text-slate-800'>Western Europe</span>
                            </div>
                            <div>
                                <span className='text-[12px] text-slate-600'>Customers served</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[0.8rem] px-[2.8rem]'>
                            <span className='text-[12px]'>Quality control</span>
                            <span className='text-[14px] font-medium text-slate-800'>Testing instruments (1)</span>
                        </div>
                        <hr />

                        <div className='flex flex-col gap-[0.8rem] px-[2.8rem]'>
                            <span className='text-[12px]'>Document verification</span>
                            <span className='text-[14px] font-medium underline text-slate-800'>Certificates</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* conditional based component Over main screen */}
            {showImages && <div className='fixed top-0 left-0 right-0 overflow-y-auto bottom-0 z-[41] bg-[#FFFFFE] gallery'>
                <div className='flex flex-wrap gap-[2rem] absolute inset-[4rem]'>
                    {list.map((item, i) =>
                        <img key={i} src={item} alt="" className='max-w-full md:max-w-[30rem] object-cover cursor-pointer rounded-[0.4rem]' onClick={() => setShowSingleImages(true)} />
                    )}
                </div>
                <button className='fixed top-[1.2rem] right-[1.2rem] p-[1rem] bg-slate-100 rounded-full flex items-center gap-[0.4rem] text-[1.6rem]' onClick={() => setShowImages(false)}><MdOutlineClose /></button>
            </div>
            }

            {showSingleImages &&
                <div className='bg-black flex items-center justify-center h-full fixed top-0 right-0 bottom-0 left-0 details z-[41]'>
                    <Carousel className='max-w-[57.6rem]' showIndicators={false} showThumbs={false} transitionTime={100}>
                        {list.map((item, i) =>
                            <div key={i} className='max-w-[51.2rem] object-cover max-h-[38.4rem]'>
                                <img loading='lazy' src={item} alt="" />
                            </div>
                        )}
                    </Carousel>
                    <button className='absolute top-[2rem] right-[2rem] text-[1.6rem] text-white flex items-center gap-[0.4rem]' onClick={() => setShowSingleImages(false)}><MdOutlineClose /> Close</button>
                </div>
            }

            {showSingleImageForGallery &&
                <div className='bg-black flex items-center justify-center h-full fixed top-0 right-0 bottom-0 left-0 details z-[41]'>
                    <Carousel className='max-w-[57.6rem]' showIndicators={true} showStatus={true} axis={'vertical'} showThumbs={true} transitionTime={100}>
                        {photoGallery.map((item, i) =>
                            <div key={i} className='max-w-[51.2rem] object-cover max-h-[38.4rem]'>
                                <img loading='lazy' src={item} alt="" />
                            </div>
                        )}
                    </Carousel>
                    <button className='absolute top-[2rem] right-[2rem] text-white flex items-center gap-[0.4rem]' onClick={() => setShowSingleImageForGallery(false)}><MdOutlineClose /> Close</button>
                </div>
            }


            {showShareMenu &&
                <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 backdrop-blur-[1px] z-[30] flex items-center justify-center">
                    <div className="bg-white max-w-[38.4rem] w-full p-[4rem] flex flex-col items-center gap-[2.8rem] rounded-[0.6rem]">
                        <div className='flex items-center justify-between w-[28.8rem] text-[1.6rem]'>
                            <h2>Share with friends</h2>
                            <span className='cursor-pointer p-[1rem] bg-slate-100 rounded-full'>
                                <MdOutlineClose onClick={() => setShowShareMenu(false)} />
                            </span>
                        </div>
                        <div className='flex items-center justify-center flex-wrap gap-[1.2rem] child:flex child:flex-col child:items-center child:gap-[0.4rem] px-[1.5rem]'>
                            <div>
                                <img loading='lazy' src="/Images/DetailsPage/whatsApp__icon.png" alt="" className="h-[4rem] w-[4rem] object-contain" />
                                <span className='text-[1.4rem] text-slate-700'>Whatsapp</span>
                            </div>
                            <div>
                                <img loading='lazy' src="/Images/DetailsPage/facebook__icon.png" alt="" className="h-[4rem] w-[4rem] object-contain" />
                                <span className='text-[1.4rem] text-slate-700'>Facebook</span>
                            </div>
                            <div>
                                <img loading='lazy' src="/Images/DetailsPage/twitter__icon.png" alt="" className="h-[4rem] w-[4rem] object-contain" />
                                <span className='text-[1.4rem] text-slate-700'>Twitter</span>
                            </div>
                            <div>
                                <img loading='lazy' src="/Images/DetailsPage/telegram__icon.png" alt="" className="h-[4rem] w-[4rem] object-contain" />
                                <span className='text-[1.4rem] text-slate-700'>Telegram</span>
                            </div>
                            <div>
                                <img loading='lazy' src="/Images/DetailsPage/linkedin__icon.png" alt="" className="h-[4rem] w-[4rem] object-contain" />
                                <span className='text-[1.4rem] text-slate-700'>Linkedin</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-[0.8rem] w-full'>
                            <input type="text" value="https://www.pexels.com/photo/high-rocky-mountains-14588051/" id="myInput" className='bg-slate-200 p-[1.2rem] w-full text-[1.4rem] text-slate-700 rounded-[0.6rem]' />
                            <MdContentCopy className='text-[1.8rem]' onClick={copyText} />
                        </div>
                    </div>
                </div>
            }

            {openEnquiry && <SendEnquiry setOpenEnquiry={setOpenEnquiry} />}

            <div className='md:hidden fixed bottom-[85px] right-[10px] rounded-full bg-white chat_btn'>
                <button className='p-[14px]'><MdOutlineSupportAgent className='text-[20px]' /></button>
            </div>

            <div className='fixed bottom-0 left-0 right-0 font-medium bg-white shadow-[0px_0px_13px_-3px_black] text-white child:py-[10px] py-[12px] px-[14px] child:flex child:items-center child:justify-center child:gap-[10px] child:rounded-[6px] text-[16px] md:hidden flex items-center gap-[10px] justify-between child:w-full'>
                <button className='btn'><MdOutlineMarkEmailUnread /> Send Enquiry</button>
                <button className='bg-blue-900'><FiPhoneCall className='wiggle_effect' /> Call Now</button>
            </div>

        </div>
    )
}

export default NewDetails