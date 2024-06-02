// import React, { useState } from 'react'
// import { AiTwotoneStar } from 'react-icons/ai'
// import { BsFillCaretDownFill } from 'react-icons/bs'
// import { FaChevronRight } from 'react-icons/fa'
// import { FcFilledFilter } from 'react-icons/fc'
// import { FiSearch } from 'react-icons/fi'
// import { HiOutlineArrowLeft } from 'react-icons/hi'
// import { MdOutlineCategory } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import BannerSection from '../../components/Banner/BannerSection'
// import EnquiryForm from '../../components/EnquiryForm'
// import InfoBox from '../../components/InfoBox'
// import Menu from '../../components/Menu/Menu'
// import { boxData } from './data'
// import './list.css'


// const filterOpt = ['Sound Systems on Rent', 'Sweet Shops', 'Guest Houses', "Electronics", 'Party Supplies', 'Food']

// console.log("boxdata", boxData)

// const List = () => {

//     const [showCaty, setShowCaty] = useState(false)
//     const [showFilterMenu, setShowFilterMenu] = useState(false)
//     const [selectedFilter, setSelectedFilter] = useState(['Guest Houses', 'Electronics'])

//     const open = () => {
//         if (window.innerWidth < 720) {
//             setShowFilterMenu(true)
//             document.body.style.overflow = 'hidden';
//         }
//     }

//     const close = () => {
//         setShowFilterMenu(false)
//         document.body.style.overflow = 'unset';
//     }

//     return (
//         <div>
//             <div>
//                 <div className='xl:flex items-center bg-white justify-evenly shadow-lg px-[3.2rem] hidden'>
//                     <button className="btn flex items-center justify-center w-[16rem] h-[4rem] text-[1.6rem] gap-[0.8rem] whitespace-nowrap border-r" onClick={() => setShowCaty(!(showCaty))}>
//                         <MdOutlineCategory />
//                         Categories
//                         <BsFillCaretDownFill className={`${showCaty && 'rotate-180'}`} />
//                     </button>
//                     <div className="">
//                         <Menu hide={true} />
//                     </div>
//                 </div>
//                 {/* {showCaty && <div className='w-screen h-screen absolute top-0 left-0 right-0 bg-opacity-50 bg-black z-[2] backdrop-blur-[1px]' />} */}
//                 {showCaty &&
//                     <div className={`absolute mt-[0.8rem] w-[26rem] mx-[4rem] z-[11]`}>
//                         <div className='flex flex-col gap-[1.2rem] child:flex child:items-center child:gap-[0.8rem] child:p-[0.8rem] child:rounded-sm bg-white p-[0.8rem] rounded-[0.6rem] border shadow-lg child-hover:bg-gray-100 child:shadow-md child:cursor-pointer h-full'>
//                             <div className='border-l-[3px] border-green-500'>
//                                 <img loading='lazy' src="/Images/SideBar/car.png" alt="" />
//                                 <span className='text-[1.4rem]'>Milks and Dairies</span>
//                             </div>
//                             <div className='border-l-[3px] border-blue-800'>
//                                 <img loading='lazy' src="/Images/SideBar/doctor.png" alt="" />
//                                 <span className='text-[1.4rem]'>Clothing & beauty</span>
//                             </div>
//                             <div className='border-l-[3px] border-slate-500'>
//                                 <img loading='lazy' src="/Images/Menu/menu_3.png" alt="" className="h-[2.8rem]" />
//                                 <span className='text-[1.4rem]'>Pet Foods & Toy</span>
//                             </div>
//                             <div className='border-l-[3px] border-purple-600'>
//                                 <img loading='lazy' src="/Images/SideBar/review.png" alt="" />
//                                 <span className='text-[1.4rem]'>Baking materilal</span>
//                             </div>
//                             <div className='border-l-[3px] border-yellow-500'>
//                                 <img loading='lazy' src="/Images/SideBar/car.png" alt="" />
//                                 <span className='text-[1.4rem]'>Fresh Fruit</span>
//                             </div>
//                         </div>
//                     </div>
//                 }
//             </div>

//             <div className='hidden lg:flex items-center absolute top-[8rem] xl:top-[12.8rem] left-[4rem]'>
//                 <div className='flex items-center gap-[0.8rem] text-[12px]'>
//                     <Link to="/" className='text-blue-600'>Home</Link> <FaChevronRight className='text-[10px] text-gray-600' />
//                     <Link>List</Link>
//                 </div>
//             </div>

//             <div className="flex items-stretch mx-[1rem] lg:mx-[3.2rem] gap-[1.2rem] xl:gap-[4rem] my-[4rem] lg:my-[4.8rem]">
//                 <div className={`lg:flex flex-col items-stretch ${showFilterMenu && 'fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 z-[30]'} ${showFilterMenu ? 'flex' : 'hidden'} `}>

//                     <div className={`lg:max-w-[32rem] mobile_filter_box ${showFilterMenu && 'mt-64 overflow-y-scroll bg-white rounded-t-[30px]'}`}>

//                         {/* filter for mobile screen */}
//                         <div className='block lg:hidden'>

//                             <div className='flex items-center gap-[2rem] sticky top-0 p-[2rem] bg-white'>
//                                 <HiOutlineArrowLeft className='text-[3rem]' onClick={close} />
//                                 <h3 className='text-[2.5rem]'>Filters</h3>
//                             </div>

//                             <div className='space-y-[3rem] px-[2rem] pb-[2rem]'>
//                                 <div>
//                                     <h3 className='text-[2.25rem] font-medium'>Category 1</h3>
//                                     <div className='flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border whitespace-nowrap flex-wrap'>
//                                         {filterOpt.map((item, index) =>
//                                             <span key={index} className={`${selectedFilter.includes(item) ? 'bg-blue-800 text-white' : 'bg-gray-200 text-slate-600 border-gray-300'}`} onClick={() => {
//                                                 setSelectedFilter((prev) => (Array.from(new Set([...prev.selectedFilter, item]))))

//                                                 if (selectedFilter.includes(item)) {
//                                                     setSelectedFilter((prev) => (selectedFilter.filter(e => e !== item)))
//                                                 }
//                                             }}
//                                             >
//                                                 {item}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className='text-[2.25rem] font-medium'>Category 2</h3>
//                                     <div className='flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 child:bg-gray-200 text-slate-600 whitespace-nowrap flex-wrap'>
//                                         {filterOpt.map((item, index) =>
//                                             <span key={index}>
//                                                 {item}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className='text-[2.25rem] font-medium'>Category 3</h3>
//                                     <div className='flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 child:bg-gray-200 text-slate-600 whitespace-nowrap flex-wrap'>
//                                         {filterOpt.map((item, index) =>
//                                             <span key={index}>
//                                                 {item}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className='text-[2.25rem] font-medium'>Experience</h3>
//                                     <div className='flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 text-slate-600 whitespace-nowrap flex-wrap child:bg-gray-200'>
//                                         <span>Experience (90)</span>
//                                         <span>Entry Level (20)</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='fixed bottom-0 lef-0 right-0 w-full p-[1.5rem] bg-white flex items-center gap-[1rem] child:py-[10px] justify-between text-[16px] child:w-full font-medium child:rounded-[6px]'>
//                                 <button className='bg-gray-300 text-gray-800'>Reset All</button>
//                                 <button className='bg-blue-800 text-white'>Apply</button>
//                             </div>

//                         </div>
//                         <EnquiryForm />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1'>

//                     <div className='bg-white border border-gray-400 rounded-[6px] h-[40px] px-[8px] md:hidden flex items-center gap-[10px] text-[16px]'>
//                         <input type="text" placeholder='What your looking for?' defaultValue='Great Northern Hotel' className='h-full w-full border-none outline-none' />
//                         <span className='p-[7px] rounded-full bg-purple-600'><FiSearch className='text-white' /></span>
//                     </div>

//                     <div className='sticky top-[6rem] bg-[#E5EAF7] -mx-1 px-1 py-[1.6rem] z-[1] max-w-[93vw] flex items-center gap-[10px] hide_scrollbar overflow-x-auto'>
//                         <span className='bg-gray-50 rounded-[6px] px-[8px] py-[7px]' onClick={open}>
//                             <FcFilledFilter className='text-[16px]' />
//                         </span>
//                         <select name="" id="" className='bg-white outline-none cursor-pointer rounded-[6px] text-[14px] px-[8px] py-[7px]'>
//                             <option value="" defaultValue={'DEFAULT'}>Select Options</option>
//                             <option value="">Rating</option>
//                             <option value="">Popular</option>
//                             <option value="">Distance</option>
//                         </select>

//                         <div className='whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]'>
//                             <AiTwotoneStar className='text-[14px]' />
//                             <span className='text-[14px]'>Top Rated</span>
//                         </div>

//                         <div className='whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]'>
//                             <AiTwotoneStar className='text-[14px]' />
//                             <span className='text-[14px]'>Quick Response</span>
//                         </div>
//                         <select name="" id="" className='bg-white outline-none cursor-pointer rounded-[6px] text-[14px] px-[8px] py-[7px]'>
//                             <option value="" defaultValue={'DEFAULT'}>Select Options</option>
//                             <option value="">Rating</option>
//                             <option value="">Popular</option>
//                             <option value="">Distance</option>
//                         </select>
//                         <div className='whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]'>
//                             <AiTwotoneStar className='text-[14px]' />
//                             <span className='text-[14px]'>Top Rated</span>
//                         </div>
//                         <div className='whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]'>
//                             <AiTwotoneStar className='text-[14px]' />
//                             <span className='text-[14px]'>Quick Response</span>
//                         </div>
//                         <div className='whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]'>
//                             <AiTwotoneStar className='text-[14px]' />
//                             <span className='text-[14px]'>Top Rated</span>
//                         </div>
//                     </div>


//                     <div className='flex flex-col gap-[2rem] child:bg-white child:border-b-2 child:rounded-[0.6rem] child:shadow-md lg:items-stretch'>
//                         {boxData.map((item, i) =>
//                             <InfoBox item={item} key={i} />
//                         )}
//                         <BannerSection fromListPage={true} />
//                     </div>
//                 </div>
//                 {/* {(isScrolling && showFilterBtn) &&
//                     <div className='fixed bottom-[2rem] ring ring-slate-100 left-0 right-0 m-auto rounded-full lg:hidden flex items-center gap-[1rem] border w-fit bg-white py-[0.7rem] px-[3rem]' onClick={open}>
//                         <img loading='lazy' src="/Images/ListPage/filter.png" alt="" className='max-w-[2rem] object-cover' />
//                         <span className='text-[2.3rem]'>Filter</span>
//                     </div>
//                 } */}
//             </div>
//         </div >
//     )
// }

// export default List




import React, { useState, useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import { FcFilledFilter } from "react-icons/fc";
import { FiSearch } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import BannerSection from "../../components/Banner/BannerSection";
import EnquiryForm from "../../components/EnquiryForm";
import InfoBox from "../../components/InfoBox";
import Menu from "../../components/Menu/Menu";
import { boxData } from "./data";
import "./list.css";
import { TiArrowSortedDown } from "react-icons/ti";

const filterOpt = [
    "Sound Systems on Rent",
    "Sweet Shops",
    "Guest Houses",
    "Electronics",
    "Party Supplies",
    "Food",
];

console.log("boxdata", boxData);

const List = () => {
    const [servList, setList] = useState(null);
    const [openSelect, setOpenSelect] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://localhost:8081/serv', requestOptions)
            .then(response => response.json())
            .then(data => setList(JSON.parse(data)));
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("http://localhost:8081/serv", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to fetch data");
    //         }

    //         response.then((res => res.json()))
    //             .then((data => console.log("data", data)))

    //         const jsonData = await response.json();
    //         setList(jsonData);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // console.log({ servList });

    const [showCaty, setShowCaty] = useState(false);
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState([
        "Guest Houses",
        "Electronics",
    ]);

    const open = () => {
        if (window.innerWidth < 720) {
            setShowFilterMenu(true);
            document.body.style.overflow = "hidden";
        }
    };

    const close = () => {
        setShowFilterMenu(false);
        document.body.style.overflow = "unset";
    };

    return (
        <div>
            <div>
                <div className="xl:flex items-center bg-white justify-evenly shadow-lg px-[3.2rem] hidden">
                    <button
                        className="btn flex items-center justify-center w-[16rem] h-[4rem] text-[1.6rem] gap-[0.8rem] whitespace-nowrap border-r"
                        onClick={() => setShowCaty(!showCaty)}
                    >
                        <MdOutlineCategory />
                        Categories
                        <BsFillCaretDownFill className={`${showCaty && "rotate-180"}`} />
                    </button>
                    <div className="">
                        <Menu hide={true} />
                    </div>
                </div>
                {/* {showCaty && <div className='w-screen h-screen absolute top-0 left-0 right-0 bg-opacity-50 bg-black z-[2] backdrop-blur-[1px]' />} */}
                {showCaty && (
                    <div className={`absolute mt-[0.8rem] w-[26rem] mx-[4rem] z-[11]`}>
                        <div className="flex flex-col gap-[1.2rem] child:flex child:items-center child:gap-[0.8rem] child:p-[0.8rem] child:rounded-sm bg-white p-[0.8rem] rounded-[0.6rem] border shadow-lg child-hover:bg-gray-100 child:shadow-md child:cursor-pointer h-full">
                            <div className="border-l-[3px] border-green-500">
                                <img loading="lazy" src="/Images/SideBar/car.png" alt="" />
                                <span className="text-[1.4rem]">Milks and Dairies</span>
                            </div>
                            <div className="border-l-[3px] border-blue-800">
                                <img loading="lazy" src="/Images/SideBar/doctor.png" alt="" />
                                <span className="text-[1.4rem]">Clothing & beauty</span>
                            </div>
                            <div className="border-l-[3px] border-slate-500">
                                <img
                                    loading="lazy"
                                    src="/Images/Menu/menu_3.png"
                                    alt=""
                                    className="h-[2.8rem]"
                                />
                                <span className="text-[1.4rem]">Pet Foods & Toy</span>
                            </div>
                            <div className="border-l-[3px] border-purple-600">
                                <img loading="lazy" src="/Images/SideBar/review.png" alt="" />
                                <span className="text-[1.4rem]">Baking materilal</span>
                            </div>
                            <div className="border-l-[3px] border-yellow-500">
                                <img loading="lazy" src="/Images/SideBar/car.png" alt="" />
                                <span className="text-[1.4rem]">Fresh Fruit</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="hidden lg:flex items-center absolute top-[8rem] xl:top-[12.8rem] left-[4rem]">
                <div className="flex items-center gap-[0.8rem] text-[12px]">
                    <Link to="/" className="text-blue-600">
                        Home
                    </Link>{" "}
                    <FaChevronRight className="text-[10px] text-gray-600" />
                    <Link>List</Link>
                </div>
            </div>

            <div className="flex items-stretch mx-[1rem] lg:mx-[3.2rem] gap-[1.2rem] xl:gap-[4rem] my-[4rem] lg:my-[4.8rem]">
                <div
                    className={`lg:flex flex-col items-stretch ${showFilterMenu &&
                        "fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 z-[30]"
                        } ${showFilterMenu ? "flex" : "hidden"} `}
                >
                    <div
                        className={`lg:max-w-[32rem] mobile_filter_box ${showFilterMenu &&
                            "mt-64 overflow-y-scroll bg-white rounded-t-[30px]"
                            }`}
                    >
                        {/* filter for mobile screen */}
                        <div className="block lg:hidden">
                            <div className="flex items-center gap-[2rem] sticky top-0 p-[2rem] bg-white">
                                <HiOutlineArrowLeft className="text-[3rem]" onClick={close} />
                                <h3 className="text-[2.5rem]">Filters</h3>
                            </div>

                            <div className="space-y-[3rem] px-[2rem] pb-[2rem]">
                                <div>
                                    <h3 className="text-[2.25rem] font-medium">Category 1</h3>
                                    <div className="flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border whitespace-nowrap flex-wrap">
                                        {filterOpt.map((item, index) => (
                                            <span
                                                key={index}
                                                className={`${selectedFilter.includes(item)
                                                    ? "bg-blue-800 text-white"
                                                    : "bg-gray-200 text-slate-600 border-gray-300"
                                                    }`}
                                                onClick={() => {
                                                    setSelectedFilter((prev) =>
                                                        Array.from(new Set([...prev.selectedFilter, item]))
                                                    );

                                                    if (selectedFilter.includes(item)) {
                                                        setSelectedFilter((prev) =>
                                                            selectedFilter.filter((e) => e !== item)
                                                        );
                                                    }
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[2.25rem] font-medium">Category 2</h3>
                                    <div className="flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 child:bg-gray-200 text-slate-600 whitespace-nowrap flex-wrap">
                                        {filterOpt.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[2.25rem] font-medium">Category 3</h3>
                                    <div className="flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 child:bg-gray-200 text-slate-600 whitespace-nowrap flex-wrap">
                                        {filterOpt.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[2.25rem] font-medium">Experience</h3>
                                    <div className="flex items-center gap-[1.3rem] mt-[1.25rem] child:text-[2rem] child:px-[2rem] child:py-[0.5rem] child:rounded-full child:border child:border-gray-300 text-slate-600 whitespace-nowrap flex-wrap child:bg-gray-200">
                                        <span>Experience (90)</span>
                                        <span>Entry Level (20)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="fixed bottom-0 lef-0 right-0 w-full p-[1.5rem] bg-white flex items-center gap-[1rem] child:py-[10px] justify-between text-[16px] child:w-full font-medium child:rounded-[6px]">
                                <button className="bg-gray-300 text-gray-800">Reset All</button>
                                <button className="bg-blue-800 text-white">Apply</button>
                            </div>
                        </div>
                        <EnquiryForm />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="bg-white border border-gray-400 rounded-[6px] h-[40px] px-[8px] md:hidden flex items-center gap-[10px] text-[16px]">
                        <input
                            type="text"
                            placeholder="What your looking for?"
                            defaultValue="Great Northern Hotel"
                            className="h-full w-full border-none outline-none"
                        />
                        <span className="p-[7px] rounded-full bg-purple-600">
                            <FiSearch className="text-white" />
                        </span>
                    </div>

                    <div className="sticky top-[6rem] bg-[#E5EAF7] -mx-1 px-1 py-[1.6rem] z-[1] max-w-[93vw] flex items-center gap-[10px] overflow-x-auto hide_scrollbar">
                        <span
                            className="bg-gray-50 rounded-[6px] px-[8px] py-[7px]"
                            onClick={open}
                        >
                            <FcFilledFilter className="text-[16px]" />
                        </span>

                        <div className="relative">
                            <div className="w-max bg-white text-[14px] pl-[8px] pr-[30px] py-[7px] rounded-[6px] cursor-pointer" onClick={() => setOpenSelect(!openSelect)}>Select Options</div>

                            <div className={`${openSelect ? 'flex' : 'hidden'} custom_select child-hover:bg-gray-100 child:cursor-pointer absolute top-[40px] child:border-gray-300 child:border-b w-full bg-white flex-col child:p-[10px] child:text-[14px]`}>
                                <span onClick={() => setOpenSelect(false)}>Raitng</span>
                                <span onClick={() => setOpenSelect(false)}>Popular</span>
                                <span onClick={() => setOpenSelect(false)}>Distance</span>
                            </div>
                            <span className="absolute top-4 right-2"><TiArrowSortedDown className={`text-[14px] ${openSelect ? 'rotate-180' : 'rotate-0'}`} /> </span>
                        </div>

                        {/* <select name="" id="" className="bg-white outline-none cursor-pointer rounded-[6px] text-[14px] px-[8px] py-[7px]">
                            <option value="" className="p-[10px]" defaultValue={"DEFAULT"}>Select Options</option>
                            <option value="" className="p-[10px]">Rating</option>
                            <option value="" className="p-[10px]">Popular</option>
                            <option value="" className="p-[10px]">Distance</option>
                        </select> */}

                        <div className="whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]">
                            <AiTwotoneStar className="text-[14px]" />
                            <span className="text-[14px]">Top Rated</span>
                        </div>

                        <div className="whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]">
                            <AiTwotoneStar className="text-[14px]" />
                            <span className="text-[14px]">Quick Response</span>
                        </div>
                        <select
                            name=""
                            id=""
                            className="bg-white outline-none cursor-pointer rounded-[6px] text-[14px] px-[8px] py-[7px]"
                        >
                            <option value="" defaultValue={"DEFAULT"}>
                                Select Options
                            </option>
                            <option value="">Rating</option>
                            <option value="">Popular</option>
                            <option value="">Distance</option>
                        </select>
                        <div className="whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]">
                            <AiTwotoneStar className="text-[14px]" />
                            <span className="text-[14px]">Top Rated</span>
                        </div>
                        <div className="whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]">
                            <AiTwotoneStar className="text-[14px]" />
                            <span className="text-[14px]">Quick Response</span>
                        </div>
                        <div className="whitespace-nowrap flex items-center gap-[4px] bg-white rounded-[6px] px-[8px] py-[7px]">
                            <AiTwotoneStar className="text-[14px]" />
                            <span className="text-[14px]">Top Rated</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[2rem] child:bg-white child:border-b-2 child:rounded-[0.6rem] child:shadow-md lg:items-stretch">
                        {boxData?.map((item, i) => (
                            <InfoBox item={item} key={i} />
                        ))}
                        <BannerSection fromListPage={true} />
                    </div>
                </div>
                {/* {(isScrolling && showFilterBtn) &&
                    <div className='fixed bottom-[2rem] ring ring-slate-100 left-0 right-0 m-auto rounded-full lg:hidden flex items-center gap-[1rem] border w-fit bg-white py-[0.7rem] px-[3rem]' onClick={open}>
                        <img loading='lazy' src="/Images/ListPage/filter.png" alt="" className='max-w-[2rem] object-cover' />
                        <span className='text-[2.3rem]'>Filter</span>
                    </div>
                } */}
            </div>
        </div>
    );
};

export default List;
