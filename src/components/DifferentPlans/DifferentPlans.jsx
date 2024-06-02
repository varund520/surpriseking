import React from 'react'

const DifferentPlans = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-[2rem] lg:gap-[1.2rem] mx-[1rem] lg:mx-[3.2rem] child:shadow-md child:shadow-gray-500">
            <div className={`flex items-center justify-between bg-[#037D6B] w-full p-[1.6rem] rounded-[0.8rem] cursor-pointer`}>
                <div className='flex flex-col gap-[1.2rem]'>
                    <h2 className='text-white text-[1.8rem]'>Insta Personal Loan</h2>
                    <p className='text-[1.4rem] text-white'>Get up to Rs. 10 lakh in 30 minutes</p>
                    <button className='bg-white p-1 text-[1.2rem] w-[11.2rem] rounded-full'>Check Offer</button>
                </div>
                <div>
                    <img loading='lazy' src="/Images/DifferentPlans/business-loan.png" alt="" className='h-[11rem] w-[11rem] lg:h-[9.6rem] lg:w-[9.6rem] object-contain' />
                </div>
            </div>
            <div className={`flex items-center justify-between bg-[#033473] w-full p-[1.6rem] rounded-[0.8rem] cursor-pointer`}>
                <div className='flex flex-col gap-[1.2rem]'>
                    <h2 className='text-white text-[1.8rem]'>Insta Personal Loan</h2>
                    <p className='text-[1.4rem] text-white'>Get up to Rs. 10 lakh in 30 minutes</p>
                    <button className='bg-white p-1 text-[1.2rem] w-[11.2rem] rounded-full'>Check Offer</button>
                </div>
                <div>
                    <img loading='lazy' src="/Images/DifferentPlans/Startup-Loan.png" alt="" className='h-[11rem] w-[11rem] lg:h-[9.6rem] lg:w-[9.6rem] object-contain' />
                </div>
            </div>
            <div className={`flex items-center justify-between bg-[#714E99] w-full p-[1.6rem] rounded-[0.8rem] cursor-pointer`}>
                <div className='flex flex-col gap-[1.2rem]'>
                    <h2 className='text-white text-[1.8rem]'>Insta Personal Loan</h2>
                    <p className='text-[1.4rem] text-white'>Get up to Rs. 10 lakh in 30 minutes</p>
                    <button className='bg-white p-1 text-[1.2rem] w-[11.2rem] rounded-full'>Check Offer</button>
                </div>
                <div>
                    <img loading='lazy' src="/Images/DifferentPlans/Business-deal.png" alt="" className='h-[11rem] w-[11rem] lg:h-[9.6rem] lg:w-[9.6rem] object-contain' />
                </div>
            </div>
            <div className={`flex items-center justify-between bg-sky-400 w-full p-[1.6rem] rounded-[0.8rem] cursor-pointer`}>
                <div className='flex flex-col gap-[1.2rem]'>
                    <h2 className='text-white text-[1.8rem]'>Insta Personal Loan</h2>
                    <p className='text-[1.4rem] text-white'>Get up to Rs. 10 lakh in 30 minutes</p>
                    <button className='bg-white p-1 text-[1.2rem] w-[11.2rem] rounded-full'>Check Offer</button>
                </div>
                <div>
                    <img loading='lazy' src="/Images/DifferentPlans/BusinessLoan.png" alt="" className='h-[11rem] w-[11rem] lg:h-[9.6rem] lg:w-[9.6rem] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default DifferentPlans