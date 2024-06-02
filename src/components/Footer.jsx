import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#2E3F6E] text-[#9c9c9c] space-y-[4rem] pt-[4rem] z-[-1] hidden md:block mt-[6rem] md:mt-[4rem]">
            <div className="mx-[1rem] lg:mx-[3.2rem]">
                <div className="">
                    <div className="flex flex-wrap gap-[3rem] sm:grid sm:grid-cols-2 xl:grid-cols-3 place-items-baseline child:space-y-[2rem]">
                        {/* <div className="flex flex-wrap justify-between child:space-y-[2rem]"> */}
                        <div className="">
                            <div>
                                <h2 className="text-white text-[2rem]">About Company</h2>
                                <hr className='w-[3.2rem] mt-[0.8rem] border' />
                            </div>
                            <p className="max-w-[30rem] text-[#9c9c9c] text-[1.6rem]">Over +3 years experience and knowledge local standards market, With our exquisite offerings, we bind couples and explore their Romantic Adventures!</p>
                        </div>
                        <div className="">
                            <div>
                                <h2 className="text-white text-[2rem]">Useful Links</h2>
                                <hr className='w-[3.2rem] mt-[0.8rem] border' />
                            </div>
                            <ul className='grid grid-cols-2 text-[#9c9c9c] gap-[0.4rem] text-[1.6rem]'>
                                <li className=""><a href="#" className="">Home</a></li>
                                <li className=""><a href="#" className="">Terms & Condition</a></li>
                                <li className=""><a href="#" className="">About Company</a></li>
                                <li className=""><a href="#" className="">Privacy Policy</a></li>
                                <li className=""><a href="#" className="">Contact Us</a></li>
                                <li className=""><a href="#" className="">Refund & Return Policy</a></li>
                                <li className=""><a href="#" className="">Cancellation Policy</a></li>
                                <li className=""><a href="#" className="">Faq's</a></li>
                                <li className=""><a href="#" className="">Partner Login</a></li>
                                <li className=""><a href="#" className="">Image lections</a></li>
                            </ul>
                            <br />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div>
                                <h2 className="text-white text-[2rem]">Our Services</h2>
                                <hr className='w-[3.2rem] mt-[0.8rem] border' />
                            </div>
                            <ul className='grid grid-cols-2 text-[#9c9c9c] gap-[0.4rem] text-[1.6rem]'>
                                <li className=""><a href="" className="">Anniversary Decorators</a></li>
                                <li className=""><a href="" className="">Balloon & Room Decoration</a></li>
                                <li className=""><a href="" className="">Birthday Specials</a></li>
                                <li className=""><a href="" className="">Car Decoration</a></li>
                                <li className=""><a href="" className="">Gifts</a></li>
                                <li className=""><a href="" className="">Home Surprises</a></li>
                                <li className=""><a href="" className="">Kids Special</a></li>
                                <li className=""><a href="" className="">Proposal Set Up</a></li>
                                <li className=""><a href="" className="">Valentine Day Specials</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-0.5 bg-gray-600 w-[95%] m-auto' />
 
            <div className="px-[1.2rem]">
                <div className="flex items-center justify-between lg:px-[2rem] pb-[2rem] text-[1.4rem]">
                    <div className="max-w-[40rem] lg:max-w-[45rem]">Copyrights &copy; 2023 SURPRISE KING INDIA PVT. LTD. All Rights Reserved.</div>
                    <div className="">
                        <div className="">Developed By : <a href="#"> INFO TECH INDIA</a></div>
                    </div>
                    <div className="">
                        <ul className="flex items-center justify-end flex-wrap gap-[1.2rem] whitespace-nowrap">
                            <li id="menu-item-328" className=""> <a title="Home" href="#" className="" data-scroll data-options="easing: easeOutQuart">Home</a> </li>
                            <li id="menu-item-324" className=""><a title="Our Services" href="#" className="" data-scroll data-options="easing: easeOutQuart">Our Services</a> </li>
                            <li id="menu-item-325" className=""><a title="Testimonials" href="#" className="" data-scroll data-options="easing: easeOutQuart">Testimonials</a></li>
                            <li id="menu-item-327" className=""><a title="About Us" href="#" className="" data-scroll data-options="easing: easeOutQuart">About Us</a></li>
                            <li id="menu-item-327" className=""><a title="About Us" href="#" className="" data-scroll data-options="easing: easeOutQuart">Career</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer