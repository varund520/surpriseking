import React from 'react'
import { TiUserAddOutline } from 'react-icons/ti'

const BannerSection = (props) => {

    const { fromListPage } = props

    return (
        <div className={`hidden md:flex flex-col sm:flex-row gap-[2rem] sm:gap-[0] items-center justify-between bg-white rounded-[0.8rem] overflow-hidden ${!fromListPage ? 'mx-[1rem] lg:mx-[3.2rem]' : 'h-[25rem]'}`}>
            <div className="relative w-full sm:w-auto">
                <img loading='lazy' src="/Images/banner.avif" alt="" className={`h-[30rem] sm:w-auto w-full`} />
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='absolute top-0 right-0 bottom-0 hidden sm:block h-full w-[60rem]'>
                    <path d="M627.25,-82.39 C346.22,43.91 512.69,168.25 560.66,205.75 L500.00,150.00 L500.00,0.00 Z" style={{ stroke: "none", fill: "#fff" }}></path>
                </svg>
            </div>
            <div className='space-y-5 mr-[1rem] lg:mr-[5.6rem] pl-[2rem] pb-[1.3rem] sm:pl-0 sm:pb-0'>
                <h1 className='text-[2.4rem] text-[#122B46] font-semibold'>Qcs24.com is the best way to find & discover great local businesses</h1>
                <p className='text-[1.8rem]'>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero a feugiat</p>
                <button className='btn mx-auto sm:mx-0 flex items-center justify-center gap-[0.8rem] h-[4rem] w-[19.2rem] text-[1.6rem]'><TiUserAddOutline className='text-[1.8rem]' />Create an Account</button>
            </div>
        </div>
    )
}

export default BannerSection