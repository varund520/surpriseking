import React, { useState } from 'react'
import { Chart } from "react-google-charts"
import { AiOutlineStock } from 'react-icons/ai'
import { BsCaretRightFill, BsStarFill } from 'react-icons/bs'
import { FaAppStore, FaArrowRight, FaChevronLeft, FaChevronRight, FaGooglePlay, FaRegUser, FaRegUserCircle } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { IoMdBusiness } from 'react-icons/io'
import { MdContactMail, MdDone, MdOutlineShareLocation } from 'react-icons/md'
import { RiShareCircleFill } from 'react-icons/ri'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CategoryList from '../../components/CategoryList/CategoryList'
import DifferentCaty from '../../components/DifferentCaty'
import DifferentPlans from '../../components/DifferentPlans/DifferentPlans'
import { profileData } from '../../components/Header/data'
import Menu from '../../components/Menu/Menu'
import Login from '../../components/Modals/Login'
import Slider from '../../components/Slider/Slider'
import './Home.css'

const Home = (props) => {

  const [showLogin, setShowLogin] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const { showHeaderForm, showBottomForm, showForm } = props

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

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
      items: 2
    }
  };

  const responsiveTwo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const options = {
    is3D: true,
  };

  const handleShowLogin = () => {
    setShowLogin(false)
  }
  return (
    <div className=''>
      <Menu />
      <Slider showHeaderForm={showHeaderForm} />
      <CategoryList />
      <DifferentPlans />
      <DifferentCaty />
      <br />
      <br />
      {/* <BannerSection /> */}

      <div className='mb-20 mx-[1rem] lg:mx-[3.2rem] bg-white px-4 py-6 rounded-[10px] shadow-sm'>

        <div className='flex items-center justify-between m-4'>

          <h3 className='text-[22px] font-medium'>
            <span className=' border-b border-gray-400'>Celebrate</span> Birthday
          </h3>

          <button className='btn py-[4px] px-[14px] text-[14px] flex items-center gap-4'>All Services <FaArrowRight className='' /> </button>

        </div>

        <Carousel responsive={responsive} infinite={true} className='z-[2] child:relative child:rounded-[20px] service_slider py-4'>
          {[0, 1, 2, 3, 4].map((item) =>
            <div key={item} className='h-[330px] w-[92%] m-4'>
              <span className='text-[16px] font-medium px-6 py-1 border border-white bg-black bg-opacity-30 backdrop-blur-[1px] rounded-full absolute top-10 left-10 text-white z-[2]'>Contact Center</span>
              <img src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/20569/SM1057366.jpg" alt=""
                className='h-full object-cover rounded-[20px] hover:scale-105 transition-all duration-200 ease-linear shadow-[-1px_2px_10px_-1px_rgba(0,0,0,0.75)]' />
              <div className='bg-white p-4 absolute -bottom-4 -left-4 rounded-full'>
                <span className='text-[30px] h-[35px] w-[35px] text-white flex items-center justify-center bg-blue-600 rounded-full'>+</span>
              </div>
            </div>
          )}
        </Carousel>

      </div>

      <div className='mb-20 mx-[1rem] lg:mx-[3.2rem] bg-white px-4 py-6 rounded-[10px] shadow-sm'>

        <div className='flex items-center justify-between m-4'>

          <h3 className='text-[22px] font-medium'>
            Celebrate Birthday
          </h3>

          <button className='btn py-[4px] px-[14px] text-[14px] flex items-center gap-4'>All Services <FaArrowRight className='' /> </button>

        </div>

        <Carousel responsive={responsiveTwo} infinite={true} className='z-[2] child:relative child:rounded-[20px] service_slider'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
            <div key={item} className='h-[260px] w-[93%] m-4'>
              <img src="https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/dv-1711708176652.jpg" alt="" className='h-full object-cover rounded-[20px] hover:scale-105 transition-all duration-200 ease-linear' />
            </div>
          )}
        </Carousel>

      </div>

      <div className='flex justify-around items-center bg-white px-4 py-8 mx-[1rem] lg:mx-[3.2rem] mb-10 rounded-[10px] shadow-sm'>

        <div className='space-y-24 border-r border-dashed border-gray-300 flex-[0.4] pr-32'>
          <h3 className='text-[24px] font-medium'>Get free quotes from multiple sellers</h3>

          <div className='flex gap-8 child:flex child:flex-col child:items-center child:gap-6'>
            <div>
              <span className='border border-blue-200 p-12 rounded-full bg-gray-100'>
                <MdContactMail className='text-[29px] text-gray-500' />
              </span>
              <span className='text-[15px] font-medium'>Tell us what you need</span>
            </div>

            <div>
              <span className='border border-blue-200 p-12 rounded-full bg-gray-100'>
                <MdContactMail className='text-[29px] text-gray-500' />
              </span>
              <span className='text-[15px] font-medium'>Receive free quotes from sellers</span>
            </div>

            <div>
              <span className='border border-blue-200 p-12 rounded-full bg-gray-100'>
                <MdContactMail className='text-[29px] text-gray-500' />
              </span>
              <span className='text-[15px] font-medium'>Seal the Deal</span>
            </div>
          </div>

        </div>

        <div className='space-y-6 flex-[0.4]'>
          <h4 className='text-[20px]'>Tell us your Requirement</h4>
          <div className='cm_input'>
            <input type="text" id="name" name="name" className='h-[50px] px-[15px] pt-[15px] text-[14px]' required />
            <label for='name' className={`transition-all duration-200 ease-linear`}>Name</label>
          </div>

          <div className='flex gap-4'>
            <div className='flex items-center justify-center gap-4 border rounded-[6px] w-44 py-[3px] bg-white'>
              <img src="/Images/india.png" alt="flag" />
              <span className='text-[14px]'>+91</span>
            </div>
            <div className='cm_input'>
              <input type="text" id="pincode" name="pincode" className='h-[50px] px-[15px] pt-[15px] text-[14px]' required />
              <label for='pincode' className={`transition-all duration-200 ease-linear`}>Mobile Number</label>
            </div>
          </div>

          <div className=''>
            <textarea name="" id="" placeholder='Your Message' className='px-[1.2rem] rounded-[0.8rem] py-[0.8rem] outline-none placeholder:text-[1.4rem] border border-gray-200 w-full'></textarea>
          </div>

          <button className='btn px-[14px] py-[6px] text-[14px]'>Submit Requirement</button>

        </div>
      </div>

      <div className='mb-20 mx-[1rem] lg:mx-[3.2rem] bg-white px-4 py-6 rounded-[10px] shadow-sm'>

        <div className='flex items-center justify-between m-4'>

          <h3 className='text-[22px] font-medium'>
            Anniversary Celebrate
          </h3>

          <button className='btn py-[4px] px-[14px] text-[14px] flex items-center gap-4'>All Services <FaArrowRight className='' /> </button>

        </div>

        <Carousel responsive={responsiveTwo} infinite={true} className='z-[2] child:relative child:rounded-[20px] service_slider'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
            <div key={item} className='h-[260px] w-[93%] m-4'>
              <img src="https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/dalmiacement-1080x1440-1711107224651.jpg" alt="" className='h-full object-cover rounded-[20px] hover:scale-105 transition-all duration-200 ease-linear' />
            </div>
          )}
        </Carousel>

      </div>

      <div className='px-[1rem] lg:px-[3.2rem] bg-[#2E3F6E] mb-60 pt-[10px]'>

        <div className='flex justify-between items-center translate-y-16'>
          <div className='text-white space-y-4'>
            <h3 className='text-[35px] font-medium'>Top Providers</h3>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <button className='btn px-[20px] py-[6px] h-fit text-[14px]'>View All</button>
        </div>

        {/* <div className='grid grid-cols-4 gap-[20px] translate-y-[100px] relative z-[2]'> */}
        <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} className='translate-y-[100px] z-[2]'>
          {[0, 1, 2, 3, 4, 5, 6].map((item) =>
            <div className='pt-32'>
              <div key={item} className='mx-4 bg-white rounded-[10px] relative pt-40 p-10 shadow-sm hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-linear'>
                <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg" alt="" className='absolute left-0 right-0 -top-32 m-auto w-[180px] h-[180px] object-cover rounded-full border-8 border-white' />

                <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>

                    <div className='flex items-center gap-3'>
                      <h4 className='text-[20px] font-medium'>John Smith</h4>
                      <span className='bg-[#6DCC76] rounded-full p-[3px]'><MdDone className='text-white text-[12px]' /> </span>
                    </div>

                    <span className='text-[16px]'>Electrician</span>
                  </div>
                  <div className=''>
                    <span className='text-[18px]'>$20.00</span>
                    <span className='text-[14px]'>/hr</span>
                  </div>
                </div>

                <div className='flex items-center justify-between mt-8'>
                  <span className='text-[15px] bg-blue-800 flex items-center gap-2 text-white px-[12px] py-[5px] rounded-full space-x-1'><BsStarFill className='text-yellow-400' /> 4.8</span>
                  <button className='text-[14px] btn px-[14px] py-[6px]'>View Details</button>
                </div>
              </div>
            </div>
          )}
        </Carousel>
        {/* </div> */}

      </div>

      <div className='flex justify-center items-center gap-12 translate-y-[4rem] bg-white pt-16'>

        <div className='flex-[0.3]'>
          <img src="https://html.designingmedia.com/medtech/assets/image/mobile-img.png" alt="" />
        </div>

        <div className='space-y-10 flex-[0.4]'>
          <h3 className='text-[40px] font-medium leading-[1.3]'>Download the medtech Mobile App</h3>

          <div className='text-[18px] space-y-4'>
            <p>
              Seram ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt enean leo ligula porttitor.
            </p>
            <p>
              Eu consequat vitae eleifend ac enim aliqu am lorem ante dapibus in viverra quis feugiata tellus.
            </p>
            <p>
              Eu consequat vitae eleifend ac enim aliqu am lorem ante dapibus in viverra quis feugiata tellus.
            </p>
          </div>

          <div className='relative z-[1] flex items-center gap-4 child:text-[16px] child:px-10 child:py-6 child:btn child:flex_center child:gap-4'>
            <button className='!bg-[#2E3F6E]'><FaGooglePlay />  Google Play</button>
            <button className=''><FaAppStore />  App Store</button>
          </div>
        </div>
      </div>


      {/* home page footer */}
      <div className='fixed bg-white max-h-[60px] bg-opacity-70 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.3)] backdrop-blur-sm p-[10px] bottom-[20px] rounded-full left-[8px] right-[8px] md:hidden flex items-center justify-around child:flex child:flex-col child:items-center gap-[4px]'>
        <div onClick={() => setShowMenu(true)}>
          <span><IoMdBusiness className='text-[20px]' /></span>
          <span className='text-[14px]'>B2C</span>
        </div>
        <div>
          <span><RiShareCircleFill className='text-[20px]' /> </span>
          <span className='text-[14px]'>Share</span>
        </div>
        <div>
          <span className='rounded-full bg-[#1e3d81] border border-sky-600 w-[65px] h-[65px] flex items-center justify-center'>
            <GoHome className='text-[25px] text-white' />
          </span>
        </div>
        <div onClick={() => setShowLogin(true)}>
          <span><FaRegUserCircle className='text-[20px]' /></span>
          <span className='text-[14px]'>Profile</span>
        </div>
        <div onClick={() => setShowLocationModal(true)}>
          <span><MdOutlineShareLocation className='text-[20px]' /></span>
          <span className='text-[14px]'>Location</span>
        </div>
      </div>

      <Login showLogin={showLogin} handleShowLogin={handleShowLogin} />

      {showLocationModal &&
        <div className='fixed inset-0 bg-white flex flex-col z-[40] p-[10px]'>
          <div className='flex items-center gap-[10px]' onClick={() => setShowLocationModal(false)}>
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
      }

      <div className={`${showMenu ? 'translate-x-0' : 'translate-x-full'} z-[40] block md:hidden transition-transform duration-500 ease-out fixed top-0 left-0 bottom-0 w-full`}>
        <div className='bg-[#E6E5E5] p-[10px] h-full overflow-x-hidden overflow-y-auto'>

          <div className='bg-[#2E3F6E] rounded-[10px] p-[2rem] h-[10rem] flex items-center justify-between'>
            <div className='flex gap-[10px] text-white'>
              <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[7rem] w-[7rem] rounded-full object-cover' />
              <div className=''>
                <h4 className='text-[16px]'>Manav</h4>
                <span className='text-[14px]'>manav@gmail.com</span>
              </div>
            </div>
            <span className='text-[14px] bg-slate-100 p-[10px] rounded-[13px] cursor-pointer text-gray-600' onClick={() => setShowMenu(false)}>
              <BsCaretRightFill />
            </span>
          </div>

          <div className='mt-[10px]'>

            <div className='grid grid-cols-2 gap-[10px] child:bg-white child:p-[10px]'>
              <div className='border shadow-sm rounded-[10px] space-y-[5px]'>
                <div className='flex items-center gap-[6px]'>
                  <span className='bg-white shadow-lg rounded-full p-[6px]'><FaRegUser className='text-[14px] text-blue-700' /></span>
                  <h3 className='text-[20px] font-medium'>855</h3>
                  <span className='bg-green-100 p-[2px] rounded-full'><AiOutlineStock className='text-[12px] text-green-400' /></span>
                </div>
                <div>
                  <span className='text-[14px] text-gray-500'>New Leads </span>
                  <span className='text-[12px] text-green-600'>+3.4%</span>
                </div>
              </div>
              <div className='border shadow-sm rounded-[10px] space-y-[5px]'>
                <div className='flex items-center gap-[6px]'>
                  <span className='bg-white shadow-lg rounded-full p-[6px]'><FaRegUser className='text-[14px] text-blue-700' /></span>
                  <h3 className='text-[20px] font-medium'>855</h3>
                  <span className='bg-green-100 p-[2px] rounded-full'><AiOutlineStock className='text-[12px] text-green-400' /></span>
                </div>
                <div>
                  <span className='text-[14px] text-gray-500'>Confirm Leads </span>
                  <span className='text-[12px] text-green-600'>+3.4%</span>
                </div>
              </div>
              <div className='border shadow-sm rounded-[10px] space-y-[5px]'>
                <div className='flex items-center gap-[6px]'>
                  <span className='bg-white shadow-lg rounded-full p-[6px]'><FaRegUser className='text-[14px] text-blue-700' /></span>
                  <h3 className='text-[20px] font-medium'>855</h3>
                  <span className='bg-green-100 p-[2px] rounded-full'><AiOutlineStock className='text-[12px] text-green-400' /></span>
                </div>
                <div>
                  <span className='text-[14px] text-gray-500'>Cancel Leads </span>
                  <span className='text-[12px] text-green-600'>+3.4%</span>
                </div>
              </div>
              <div className='border shadow-sm rounded-[10px] space-y-[5px]'>
                <div className='flex items-center gap-[6px]'>
                  <span className='bg-white shadow-lg rounded-full p-[6px]'><FaRegUser className='text-[14px] text-blue-700' /></span>
                  <h3 className='text-[20px] font-medium'>855</h3>
                  <span className='bg-green-100 p-[2px] rounded-full'><AiOutlineStock className='text-[12px] text-green-400' /></span>
                </div>
                <div>
                  <span className='text-[14px] text-gray-500'>Profile analytics </span>
                  <span className='text-[12px] text-green-600'>+3.4%</span>
                </div>
              </div>
            </div>

            <div className='relative mt-[10px] rounded-[10px] overflow-hidden bg-white'>
              <h4 className='absolute top-[12px] left-[16px] text-[18px] z-[1]'>My Daily Activities</h4>
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"240px"}
              // className='-translate-x-[48px]'
              />
            </div>

            <div className='mt-[10px]'>
              <div className='bg-white rounded-[10px] p-[15px] mt-[4px] shadow-md'>
                <div className='flex flex-col gap-[16px]'>
                  {profileData?.slice(0, 5)?.map((item, index) =>
                    <div className='flex items-center justify-between' key={index}>
                      <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-[11px]'>
                          <span className='h-[32px] w-[32px] flex items-center justify-center text-white bg-[#593B8A] rounded-full'>{item?.icon}</span>
                          <h5 className='text-[14px] font-medium text-gray-800'>{item?.opt}</h5>
                        </div>
                      </div>
                      <FaChevronRight className='text-[14px] text-gray-700' />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='mt-[10px]'>
              <div className='bg-white rounded-[10px] p-[15px] mt-[4px] shadow-md'>
                <div className='flex flex-col gap-[16px]'>
                  {profileData?.slice(5, profileData.length)?.map((item, index) =>
                    <div className='flex items-center justify-between' key={index}>
                      <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-[11px]'>
                          <span className='h-[32px] w-[32px] flex items-center justify-center text-white bg-[#593B8A] rounded-full'>{item?.icon}</span>
                          <h5 className='text-[14px] font-medium text-gray-800'>{item?.opt}</h5>
                        </div>
                      </div>
                      <FaChevronRight className='text-[14px] text-gray-700' />
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home