import React, { useState } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaChevronLeft } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdSearch } from 'react-icons/io';

const AllCatyList = () => {

    const [activeCaty, setActiveCaty] = useState()

    const scrollHandler = (ele) => {
        const viewAllBox = document.getElementById('view_all_caty_box')
        viewAllBox.scrollTo({ top: document.getElementById(ele)?.offsetTop - document.getElementById(ele)?.offsetHeight })
        setActiveCaty(ele)
        console.log("ele", document.getElementById(ele))
        console.log("ele", "position", document.getElementById(ele), document.getElementById(ele)?.getBoundingClientRect())
        console.log("ele_height", document.getElementById(ele)?.offsetHeight)
    }

    return (
        <div id='view_all_caty_box' className={`overflow-y-auto transition-transform duration-500 ease-out fixed inset-0 bg-white z-[40] block md:hidden`}>
            <div className='space-y-[15px]'>
                <div className='sticky top-0 bg-white space-y-[15px] border-b pb-[10px] pt-[15px] child:mx-[15px]'>
                    <div className='flex items-center justify-between'>
                        <a href='/'>
                            <span><FaChevronLeft className='text-[16px] text-gray-700' /></span>
                        </a>
                        {/* <h4 className='text-[16px] text-gray-800'>Search</h4> */}
                        <span><IoMdSearch className='text-gray-600 text-[20px]' /></span>
                    </div>

                    <div className='border rounded-[6px] p-[10px] flex items-center gap-[10px] text-[16px]'>
                        <span><FiSearch className='text-gray-700' /></span>
                        <input type="text" placeholder='What your looking for?' className='h-full w-full border-none outline-none' />
                    </div>

                    <div className='flex items-center gap-[15px] text-[14px] text-[#404e5a] font-medium'>
                        <span className={`${activeCaty === 'caty_1' ? 'text-[#0076d7] underline' : 'text-[#404e5a]'}`} onClick={() => scrollHandler('caty_1')}>Category-1</span>
                        <span className={`${activeCaty === 'caty_2' ? 'text-[#0076d7] underline' : 'text-[#404e5a]'}`} onClick={() => scrollHandler('caty_2')}>Category-2</span>
                        <span className={`${activeCaty === 'caty_3' ? 'text-[#0076d7] underline' : 'text-[#404e5a]'}`} onClick={() => scrollHandler('caty_3')}>Category-3</span>
                        <span className={`${activeCaty === 'caty_4' ? 'text-[#0076d7] underline' : 'text-[#404e5a]'}`} onClick={() => scrollHandler('caty_4')}>Category-4</span>
                    </div>
                </div>

                <div className='px-[15px] pb-[15px]'>

                    <div className='mt-[20px] space-y-[20px]'>
                        {[0, 1, 2, 3].map((item, index) =>
                            <div id={`caty_${index + 1}`} key={index}>
                                <h5 className='font-medium text-[#111] text-[13px]'>Category-{index + 1}</h5>

                                <div className=' mt-[10px] child:border child:border-[#dbdbdb] child:rounded-full child:px-[10px] text-[#111] child:py-[4px] text-[12px] font-medium child:flex child:items-center child:gap-[4px] flex gap-[10px] items-center flex-wrap show_all_caty_box'>
                                    <span><BiCategoryAlt /> Type-01</span>
                                    <span><BiCategoryAlt /> Type-02</span>
                                    <span><BiCategoryAlt /> Type-03</span>
                                    <span><BiCategoryAlt /> Type-04</span>
                                    <span><BiCategoryAlt /> Type-05</span>
                                    <span><BiCategoryAlt /> Type-06</span>
                                    <span><BiCategoryAlt /> Type-07</span>
                                    <span><BiCategoryAlt /> Type-08</span>
                                    <span><BiCategoryAlt /> Type-09</span>
                                    <span><BiCategoryAlt /> Type-10</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCatyList