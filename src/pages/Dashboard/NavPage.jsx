import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './DashBoardPages/Dashboard';
import Profile from './DashBoardPages/Profile';
import ChangePass from './DashBoardPages/ChangePass';
import Wishlist from './DashBoardPages/Wishlist';
import Booking from './DashBoardPages/Booking';

const NavPage = () => {
    return (
        <Routes>
            <Route path="/main">
                {/* <Route path="" element={<Dashboard />} /> */}
                <Route path="profile" element={<Profile />} />
                <Route path="change-password" element={<ChangePass />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="bookings" element={<Booking />} />
            </Route>
        </Routes>
    )
}

export default NavPage