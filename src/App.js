import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import VendorForm from './pages/Form/VendorForm';
const AllCatyList = lazy(() => import('./pages/AllCatyList'))
const Booking = lazy(() => import('./pages/Dashboard/DashBoardPages/Booking'))
const ChangePass = lazy(() => import('./pages/Dashboard/DashBoardPages/ChangePass'))
const Dashboard = lazy(() => import('./pages/Dashboard/DashBoardPages/Dashboard'))
const Profile = lazy(() => import('./pages/Dashboard/DashBoardPages/Profile'))
const Wishlist = lazy(() => import('./pages/Dashboard/DashBoardPages/Wishlist'))
const NewDetails = lazy(() => import('./pages/Details/NewDetails'))
const Home = lazy(() => import('./pages/Home/Home'))
const List = lazy(() => import('./pages/List/List'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {

  const [showInput, setShowInput] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [openRatingForm, setOpenRatingForm] = useState(false)
  const [ratingVal, setRatingVal] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => setOpenRatingForm(true), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [])


  const showHeaderForm = (element) => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowInput(entry.isIntersecting)
    })
    observer.observe(element)
  }

  const showBottomForm = () => {
    setShowForm(!showForm)
  }


  return (
    <>
      <BrowserRouter>
        <Header showInput={showInput} showForm={showForm} showBottomForm={showBottomForm} />
        <Routes>
          <Route path="/" element={<Home showHeaderForm={showHeaderForm} showForm={showForm} showBottomForm={showBottomForm} />}
          />
          <Route path="/list/:id" element={
            <Suspense fallback={<div> </div>}>
              <List />
            </Suspense>
          }
          />
          <Route path="/account/dashboard" element={
            <Suspense fallback={<div> </div>}>
              <Dashboard />
            </Suspense>
          }
          />
          <Route path="/account/profile" element={
            <Suspense fallback={<div> </div>}>
              <Profile />
            </Suspense>
          }
          />
          <Route path="/account/bookings" element={
            <Suspense fallback={<div> </div>}>
              <Booking />
            </Suspense>
          }
          />
          <Route path="/account/wishlist" element={
            <Suspense fallback={<div> </div>}>
              <Wishlist />
            </Suspense>
          }
          />
          <Route path="/account/change-password" element={
            <Suspense fallback={<div> </div>}>
              <ChangePass />
            </Suspense>
          }
          />
          <Route path="/details" element={
            <Suspense fallback={<div> </div>}>
              <NewDetails />
            </Suspense>
          }
          />
          <Route path="/show-more" element={
            <Suspense fallback={<div> </div>}>
              <AllCatyList />
            </Suspense>
          }
          />
          <Route path="/vendor-form" element={
            <Suspense fallback={<div> </div>}>
              <VendorForm />
            </Suspense>
          }
          />
        </Routes>

        <Suspense fallback={<div> </div>}>
          <Footer />
        </Suspense>

      </BrowserRouter>

      <div className={`${openRatingForm ? 'translate-x-0' : '-translate-x-[105%]'} z-10 transition-all duration-300 ease-out fixed bottom-[10px] left-[10px] bg-white rounded-[6px] shadow-md py-[10px] pl-[15px] pr-[50px]`}>
        <h4 className='text-[16px]'>Please Rate Our Site</h4>

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

        <div className='flex items-center gap-4 mt-4'>
          <button className='btn px-[10px] py-[4px] text-[12px]'>Submit Rating</button>
          <span className='text-[12px] font-medium'>4.6 / 5</span>
        </div>

        <span className='absolute top-[-12px] right-[-4px] cursor-pointer shadow-md border bg-gray-200 p-[4px] rounded-full' onClick={() => setOpenRatingForm(false)}>
          <MdOutlineClose className='text-[14px]' />
        </span>
      </div>
    </>)
}

export default App