import React from 'react';
import ActivityDashboard from '../ActivityDashboard/ActivityDashboard';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className='headerContainer'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ActivityDashboard></ActivityDashboard>
        </div>
    );
};

export default Header;