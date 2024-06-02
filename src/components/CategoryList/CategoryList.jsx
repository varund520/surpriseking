import React from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { category } from './data';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const ButtonGroup = ({ next, previous }) => {

        return (
            <div className="absolute top-10 right-[20px] carousel-button-group mb-4 gap-4 flex justify-end 
                    items-center w-full">
                <button onClick={() => previous()}>
                    <span className='block p-3 bg-white rounded-full' style={{ boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)' }}>
                        <FaChevronLeft className='text-[14px] text-gray-500' />
                    </span>
                </button>

                <button onClick={() => next()}>
                    <span className='block p-3 bg-white rounded-full' style={{ boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)' }}>
                        <FaChevronRight className='text-[14px] text-gray-500' />
                    </span>
                </button>
            </div>
        );
    };

    return (
        <div className="mx-auto my-[5rem] lg:my-[4rem] relative">

            <div className="mx-[1rem] lg:mx-[3.2rem] rounded-[0.8rem] lg:hidden bg-white px-6 py-10 flex flex-col gap-[2rem]">
                <div>
                    <h2 className='text-[2.4rem] font-medium'>Trending Category</h2>
                </div>

                <div className='md:block hidden'>
                    <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} infinite={true} className="caty__list">
                        {category.map((item, i) =>
                            <div key={i} className='flex flex-col items-center space-y-2 cursor-pointer whitespace-nowrap'>
                                <div className='rounded-full border-[#E85187] border p-[0.4rem] w-[7.6rem] h-[7.5rem] flex items-center justify-center' style={{ backgroundColor: `${item.bgColor}` }}>
                                    <div className='p-[0.6rem] rounded-full flex items-center justify-center border-[3px] border-white'>
                                        <img loading='lazy' src={item.Img} alt="" className='h-[4.4rem] w-[4.4rem] object-cover hover:scale-110' />
                                    </div>
                                </div>
                                <h2 className='text-[1.4rem]'>{item.title}</h2>
                            </div>
                        )}
                    </Carousel>
                </div>

                <div className=''>
                    <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} infinite={true} className="caty__list">
                        <div className='grid grid-cols-3 gap-8'>
                            {category.map((item, i) =>
                                <>
                                    <div key={i} className={`${i === 5 ? 'hidden' : 'flex'} flex-col items-center space-y-2 cursor-pointer whitespace-nowrap`}>
                                        <div className='rounded-full border-[#E85187] border p-[0.4rem] w-[7.6rem] h-[7.5rem] flex items-center justify-center' style={{ backgroundColor: `${item.bgColor}` }}>
                                            <div className='p-[0.6rem] rounded-full flex items-center justify-center border-[3px] border-white'>
                                                <img loading='lazy' src={item.Img} alt="" className='h-[4.4rem] w-[4.4rem] object-cover hover:scale-110' />
                                            </div>
                                        </div>
                                        <h2 className='text-[1.4rem]'>{item.title}</h2>
                                    </div>

                                    <Link to='/show-more' className={`${i === 5 ? 'block' : 'hidden'}`}>
                                        <div className='flex flex-col gap-[4px] items-center justify-center'>
                                            <span className='bg-sky-700 border rounded-full p-[10px] down_arorw_animat'>
                                                <FaChevronDown className='text-[16px] text-white' />
                                            </span>
                                            <span className='text-[11px] font-medium'>Show More</span>
                                        </div>
                                    </Link>
                                </>
                            )}
                        </div>
                    </Carousel>
                </div>

                <div className='grid-cols-3 gap-[3rem] hidden'>
                    {category.map((item, i) =>
                        <div key={i} className='flex flex-col items-center space-y-2 cursor-pointer whitespace-nowrap'>
                            <div className='rounded-full border-[#E85187] border p-[0.4rem] w-[7.6rem] h-[7.5rem] flex items-center justify-center' style={{ backgroundColor: `${item.bgColor}` }}>
                                <div className='p-[0.6rem] rounded-full flex items-center justify-center border-[3px] border-white'>
                                    <img loading='lazy' src={item.Img} alt="" className='h-[4.4rem] w-[4.4rem] object-cover hover:scale-110' />
                                </div>
                            </div>
                            <h2 className='text-[11px] font-medium'>{item.title}</h2>
                        </div>
                    )}

                    <Link to='/show-more'>
                        <div className='flex flex-col gap-[4px] items-center justify-center'>
                            <span className='bg-sky-700 border rounded-full p-[10px] down_arorw_animat'>
                                <FaChevronDown className='text-[16px] text-white' />
                            </span>
                            <span className='text-[11px] font-medium'>Show More</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="mx-[1rem] lg:mx-[3.2rem] hidden lg:block">
                <Carousel responsive={responsive} infinite={true} className="caty__list">
                    {category.map((item, i) =>
                        <div key={i} className='flex flex-col items-center space-y-2 cursor-pointer whitespace-nowrap'>
                            <div className='rounded-full border-[#E85187] border p-[0.4rem] w-[7.6rem] h-[7.5rem] flex items-center justify-center' style={{ backgroundColor: `${item.bgColor}` }}>
                                <div className='p-[0.6rem] rounded-full flex items-center justify-center border-[3px] border-white'>
                                    <img loading='lazy' src={item.Img} alt="" className='h-[4.4rem] w-[4.4rem] object-cover hover:scale-110' />
                                </div>
                            </div>
                            <h2 className='text-[1.4rem]'>{item.title}</h2>
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default CategoryList