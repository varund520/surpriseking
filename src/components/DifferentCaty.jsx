import React from 'react'
import { motion } from "framer-motion"
import { FaChevronDown } from 'react-icons/fa'

const data = [
    {
        name: "Restaurants",
        icon: "https://cdn-icons-png.flaticon.com/512/9842/9842408.png"
    },
    {
        name: "Hotels",
        icon: "https://cdn-icons-png.flaticon.com/512/1475/1475996.png"
    },
    {
        name: "Automobile",
        icon: "https://cdn-icons-png.flaticon.com/512/741/741407.png"
    },
    {
        name: "Home Decor",
        icon: "https://cdn-icons-png.flaticon.com/512/3722/3722813.png"
    },
    {
        name: "Education",
        icon: "https://cdn-icons-png.flaticon.com/512/3976/3976631.png"
    },
    {
        name: "Hospitals",
        icon: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
    },
    {
        name: "Hospitals",
        icon: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
    },
    {
        name: "Hospitals",
        icon: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
    },
]

const DifferentCaty = () => {
    return (
        <div className='hidden md:block my-[6rem] mx-[1rem] lg:mx-[3.2rem]'>
            <div className='flex items-center justify-between'>
                {data.map((item, index) =>
                    <motion.div className='flex flex-col gap-[1.5rem] bg-white items-center max-w-[12rem] rounded-[1rem] h-[12rem] w-full justify-center' initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 }} >
                        <img src={item.icon} alt="" className='h-[4rem] object-cover' />
                        <span className='text-[1.4rem] font-medium'>{item.name}</span>
                    </motion.div>
                )}
            </div>
            <div className='flex items-center justify-between mt-[2rem]'>
                {data.map((item, index) =>
                    <>
                        <motion.div className={`${index === 7 ? 'hidden' : 'flex'} flex-col gap-[1.5rem] bg-white items-center max-w-[12rem] rounded-[1rem] h-[12rem] w-full justify-center`} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 }} >
                            <img src={item.icon} alt="" className='h-[4rem] object-cover' />
                            <span className='text-[1.4rem] font-medium'>{item.name}</span>
                        </motion.div>

                        <motion.div className={`${index === 7 ? 'flex' : 'hidden'} flex-col gap-[1.5rem] bg-white items-center max-w-[12rem] rounded-[1rem] h-[12rem] w-full justify-center`} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 }} >
                            <span className='bg-sky-700 border rounded-full p-[10px] down_arorw_animat'>
                                <FaChevronDown className='text-[16px] text-white' />
                            </span>
                            <span className='text-[11px] font-medium'>Show More</span>
                        </motion.div >

                    </>
                )}
            </div>
        </div >)
}

export default DifferentCaty;
